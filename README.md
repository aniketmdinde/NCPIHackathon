# FinSaathi - Fraud Detection System for UPI Transactions

**Detect. Prevent. Protect.**

## Team Members
1. Vaibhav Kachare
2. Krishnan Venkiteswaran
3. Aniket Dinde
4. Aayush Bohra

## Project Overview
FinSaathi is an advanced fraud detection system designed specifically for UPI transactions, leveraging cutting-edge AI technologies to identify and prevent fraudulent activities in real-time. Our solution combines powerful machine learning models with innovative simulation techniques to provide highly accurate fraud predictions with clear explanations.

## Key Features
- **Real-Time Fraud Detection**: Millisecond-level detection integrated with UPI systems
- **Monte Carlo Simulation-Based Prediction**: Probabilistic modeling for enhanced accuracy
- **Automated Fraud Reports**: Instant, detailed reports with actionable insights
- **Interactive Chatbot**: User-friendly alerts with SHAP-based explanations
- **Seamless UPI Integration**: Works with existing infrastructure
- **Ensemble Model Approach**: Robust performance on imbalanced datasets

## Process Flow

1. **Data Collection**: Gather UPI transaction data (time, amount, merchant details)
2. **Preprocessing**: Clean and prepare data for model training
3. **Model Training**: Train XGBoost and LightGBM models to detect fraud patterns
4. **Prediction**: Make real-time fraud predictions for each transaction
5. **Evaluation**: Measure accuracy and explain predictions using SHAP plots
6. **Alerting**: Notify users via chatbot if fraud is detected, with clear explanations

## Technical Architecture

### Models
- **XGBoost**: Gradient boosting optimized for speed and robustness
  - Key parameters: learning_rate: 0.03, max_depth: 6
- **LightGBM**: Efficient handling of categorical data
  - Key parameters: num_leaves: 31, learning_rate: 0.03
- **Ensemble**: Combined approach achieving 95% accuracy
  - Performance metrics: F1: 0.9498, AUC: 0.9868
- **Mixtral 7x8b**: Used for detailed report generation
- **Monte Carlo Simulations**: For more accurate fraud prediction

### Tech Stack
- **Machine Learning**: Monte Carlo Simulations, XGBoost, LightGBM, SHAP
- **Development**: Python, Scikit-learn, Pandas, NumPy
- **Web Framework**: MERN stack
- **Cloud Infrastructure**:
  - AWS SageMaker, Azure ML
  - Docker, Kubernetes
- **Database**: PostgreSQL, MongoDB
- **Monitoring**: Prometheus, Grafana
- **Chatbot**: Rasa, Dialogflow

## Business Value
- Estimated to save $475M annually in fraud losses
- Increases user trust and ensures regulatory compliance
- Scalable to 100M+ users within 12 months
- Global expansion potential within 24 months
- Additional benefits:
  - Boosted transaction volumes
  - Reduced operational costs
  - Improved risk mitigation
  - Enhanced operational efficiency

## Innovation Highlights
- Real-time chatbot with SHAP-based explanations (e.g., "Merchant City = 0 raises fraud risk")
- Seamless integration with current UPI systems for instant fraud flagging
- User-centric, transparent design reducing false positives
- Ensemble approach provides robustness for handling imbalanced UPI transaction data

## Acknowledgements
This project was developed for the NPCI Hackathon HackOverFlow.
