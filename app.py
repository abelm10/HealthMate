from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
#loads health data
with open("data/health_data.json") as f:
    health_data = json.load(f)

@app.route("/")
def home():
    return "HealthMate Backend is running"

@app.route("/check", methods=["POST"])
def check_symptoms():
    user_symptoms = request.json.get("symptoms", [])

    matched_conditions = []

    for condition in health_data["conditions"]:
        common = set(user_symptoms) & set(condition["symptoms"])

        if common:
            matched_conditions.append({
                "condition": condition["name"],
                "matched_symptoms": list(common),
                "remedies": condition["remedies"]
            })

    return jsonify(matched_conditions)

if __name__ == "__main__":
    app.run(debug=True)
