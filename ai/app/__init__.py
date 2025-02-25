from flask import Flask
# from groq import Groq
# import os

# GROQ_API_KEY = os.getenv("GROQ_API_KEY") or "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"
# client = Groq(api_key=GROQ_API_KEY)

# model_path = "app/lsm_model3"
# model = load_model(model_path)

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "123"

    from .fin_bp import fin_bp
    app.register_blueprint(fin_bp, url_prefix='/api')

    return app