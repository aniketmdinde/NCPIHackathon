from flask import Blueprint, jsonify

fin_bp = Blueprint("fin", __name__)

@fin_bp.route("/hello")
def hello():
    return jsonify({"response": "Hello World"})