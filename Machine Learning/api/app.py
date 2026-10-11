from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Load Model
model = joblib.load('knn_diabetes.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    gender = data['gender']
    age = data['age']
    hypertension = data['hypertension']
    heart_disease = data['heart_disease']
    smoking_history = data['smoking_history']
    bmi = data['bmi']
    blood_glucose_level = data['blood_glucose_level']

    # susun sesuai urutan training
    input_data = [[gender, age, hypertension, heart_disease, smoking_history, bmi, blood_glucose_level]]

    prediction = model.predict(input_data)[0]

    return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True)


#aktifkan venvironment
# .\.venv\Scripts\Activate.ps1
# deactivate (matikan environment)