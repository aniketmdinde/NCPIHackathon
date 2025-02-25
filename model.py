import pandas as pd
import numpy as np
import xgboost as xgb
import lightgbm as lgb
from joblib import load
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def load_models_and_predict(input_data, 
                             xgb_model_path='/content/drive/MyDrive/NPCI_Hackathon/xgb_model.json',
                             lgb_model_path='/content/drive/MyDrive/NPCI_Hackathon/lgb_model.txt',
                             scaler_path='/content/drive/MyDrive/NPCI_Hackathon/scaler.pkl',
                             optimal_threshold=0.5):
    # Preprocessing steps from original script
    def preprocess_input_data(df, scaler):
        logger.info("Preprocessing input data...")
        df_new = df.copy()
        
        # Drop unnecessary columns
        df_new = df_new.drop(['index', 'Unnamed: 0'], axis=1, errors='ignore')
        
        # Define categorical and numerical columns
        cat_columns = ['User', 'Card', 'Year', 'Month', 'Day', 'Errors?']
        num_columns = ['Time', 'Amount', 'Merchant Name', 'Merchant City', 'Use Chip', 'MCC']
        
        # Verify column existence
        missing_columns = [col for col in cat_columns + num_columns if col not in df_new.columns]
        if missing_columns:
            logger.warning(f"Missing columns: {missing_columns}")
            cat_columns = [col for col in cat_columns if col in df_new.columns]
            num_columns = [col for col in num_columns if col in df_new.columns]
        
        # Fill NAs and convert categorical to integer
        df_new = df_new.fillna(0)
        for col in cat_columns:
            if col in df_new.columns:
                df_new[col] = df_new[col].astype(int)
        
        # Scale numerical features
        if num_columns:
            df_new[num_columns] = scaler.transform(df_new[num_columns])
        
        return df_new
    
    # Load models and scaler
    logger.info("Loading models and scaler...")
    try:
        # Load scaler
        scaler = load(scaler_path)
        
        # Load XGBoost model
        xgb_model = xgb.Booster()
        xgb_model.load_model(xgb_model_path)
        
        # Load LightGBM model
        lgb_model = lgb.Booster(model_file=lgb_model_path)
    except Exception as e:
        logger.error(f"Error loading models or scaler: {e}")
        raise
    
    # Preprocess input data
    processed_data = preprocess_input_data(input_data, scaler)
    
    # Remove target column if present
    if 'Is Fraud?' in processed_data.columns:
        processed_data = processed_data.drop('Is Fraud?', axis=1, errors='ignore')
    
    # Generate predictions
    logger.info("Generating predictions...")
    try:
        # Convert to DMatrix for XGBoost
        dtest = xgb.DMatrix(processed_data)
        
        # XGBoost prediction
        xgb_pred_proba = xgb_model.predict(dtest)
        
        # LightGBM prediction
        lgb_pred_proba = lgb_model.predict(processed_data)
        
        # Ensemble predictions (simple average)
        ensemble_pred_proba = (xgb_pred_proba + lgb_pred_proba) / 2
        
        # Apply threshold
        predictions = (ensemble_pred_proba >= optimal_threshold).astype(int)
        
        logger.info(f"Predictions complete. Fraud probability threshold: {optimal_threshold}")
        logger.info(f"Detected fraud samples: {sum(predictions)} out of {len(predictions)}")
        
        return predictions, ensemble_pred_proba
    
    except Exception as e:
        logger.error(f"Prediction error: {e}")
        raise
      
def predict_fraud(input_data_list):
    with open('/content/drive/MyDrive/NPCI_Hackathon/preprocessing_weights.pkl', 'rb') as f:
        weights = pickle.load(f)
    
    df = pd.DataFrame(input_data_list)
    
    # Drop unnecessary columns
    df = df.drop(columns=[col for col in weights['columns_to_drop'] if col in df.columns], errors='ignore')
    
    # Process 'Errors?'
    if 'Errors?' in df.columns:
        df['Errors?'] = df['Errors?'].apply(lambda x: 0 if pd.isna(x) else 1)
    
    # Process 'Time'
    if 'Time' in df.columns:
        df['Time'] = pd.to_datetime(df['Time'], format='%H:%M').dt.hour * 60 + \
                    pd.to_datetime(df['Time'], format='%H:%M').dt.minute
        df['Time'] = df['Time'] / weights['time_max']
    
    # Process 'Amount'
    if 'Amount' in df.columns:
        df['Amount'] = df['Amount'].astype(str).str.replace('$', '', regex=False).astype(float)
    
    # Process 'Use Chip'
    if 'Use Chip' in df.columns:
        df['Use Chip'] = df['Use Chip'].map(weights['use_chip_freq']).fillna(0)
    
    # Process 'Merchant Name'
    if 'Merchant Name' in df.columns:
        df['Merchant Name'] = df['Merchant Name'].map(weights['merchant_lookup']).fillna(0)
    
    # Process 'Merchant City'
    if 'Merchant City' in df.columns:
        df['Merchant City'] = df['Merchant City'].map(weights['city_fraud_rates']).fillna(weights['global_mean'])
    
    # Selecting relevant features
    X_train_columns = [col for col in ['User', 'Card', 'Year', 'Month', 'Day', 'Time', 'Amount', 'Use Chip',
       'Merchant Name', 'Merchant City', 'MCC', 'Errors?', 'Is Fraud?'] if col in df.columns]
    
    return df[X_train_columns]
  
  load_models_and_predict(predict_fraud([
    {
        "User": 0,
        "Card": 0,
        "Year": 2002,
        "Month": 9,
        "Day": 1,
        "Time": "06:21",
        "Amount": 134.09,
        "Use Chip": "Swipe Transaction",
        "Merchant Name": "3527213246127876953",
        "Merchant City": "La Verne",
        "Merchant State": "CA",
        "Zip": 91750.0,
        "MCC": 5300,
        "Errors?": "No",
    },
    {
        "User": 0,
        "Card": 0,
        "Year": 2002,
        "Month": 9,
        "Day": 1,
        "Time": "06:42",
        "Amount": 38.48,
        "Use Chip": "Swipe Transaction",
        "Merchant Name": "-727612092139916043",
        "Merchant City": "Monterey Park",
        "Merchant State": "CA",
        "Zip": 91754.0,
        "MCC": 5411,
        "Errors?": "No",
    },
    {
        "User": 0,
        "Card": 0,
        "Year": 2002,
        "Month": 9,
        "Day": 2,
        "Time": "06:22",
        "Amount": 120.34,
        "Use Chip": "Swipe Transaction",
        "Merchant Name": "-727612092139916043",
        "Merchant City": "Monterey Park",
        "Merchant State": "CA",
        "Zip": 91754.0,
        "MCC": 5411,
        "Errors?": "No",
    },
    {
        "User": 0,
        "Card": 0,
        "Year": 2002,
        "Month": 9,
        "Day": 2,
        "Time": "17:45",
        "Amount": 128.95,
        "Use Chip": "Swipe Transaction",
        "Merchant Name": "3414527459579106770",
        "Merchant City": "Monterey Park",
        "Merchant State": "CA",
        "Zip": 91754.0,
        "MCC": 5651,
        "Errors?": "No",
    },
    {
        "User": 0,
        "Card": 0,
        "Year": 2002,
        "Month": 9,
        "Day": 3,
        "Time": "06:23",
        "Amount": 104.71,
        "Use Chip": "Swipe Transaction",
        "Merchant Name": "5817218446178736267",
        "Merchant City": "La Verne",
        "Merchant State": "CA",
        "Zip": 91750.0,
        "MCC": 5912,
        "Errors?": "No",
    },
    {
    "User": 0,
    "Card": 0,
    "Year": 2015,
    "Month": 11,
    "Day": 15,
    "Time": "12:55",
    "Amount": "$287.13",
    "Use Chip": "Online Transaction",
    "Merchant Name": "-8194607650924472520",
    "Merchant City": "ONLINE",
    "Merchant State": None,  # NaN converted to None
    "Zip": None,  # NaN converted to None
    "MCC": 3001,
    "Errors?": None,  # NaN converted to None
}
]))