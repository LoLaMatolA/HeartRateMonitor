from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
import random
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes.
#Agar iske bina chalao toh browser ke security features ke wajeh se nahi chalta. Ye important hai

# Ye batata hai ki agar koi request /api/pulse ko aye to get_pulse_data function chala do
@app.route('/api/pulse', methods=['GET'])

def get_pulse_data():
    pulse_value = random.randint(60, 120)
    return jsonify({'heartRate': pulse_value})

def simulate_pulse():
    app.run(debug=True)

if __name__ == "__main__":
    simulate_pulse()
