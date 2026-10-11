import PredictRepositories from '../repositories/predict-repositories.js';
import response from '../../../utils/response.js';
import predictRisk from '../service/predict-service.js';
import {
  genderMapping,
  hypertensionMapping,
  heartDiseaseMapping,
  smokingHistoryMapping,
} from '../../../utils/mapping.js';

export const createPredict = async (req, res, next) => {
  const {
    gender,
    age,
    hypertension,
    heart_disease,
    smoking_history,
    bmi,
    blood_glucose_level,
  } = req.body;

  const predictResult = await predictRisk({
    gender: genderMapping[gender],
    age,
    hypertension: hypertensionMapping[hypertension],
    heart_disease: heartDiseaseMapping[heart_disease],
    smoking_history: smokingHistoryMapping[smoking_history],
    bmi,
    blood_glucose_level,
  });
  const isDiabetes = predictResult.prediction == 0 ? 'tidak' : 'ya';

  const { id } = req.user;

  const predict = await PredictRepositories.createPredict({
    user_id: id,
    gender,
    age,
    hypertension,
    heart_disease,
    smoking_history,
    bmi,
    blood_glucose_level,
    diabetes: isDiabetes,
  });

  return response(res, 201, 'Prediksi diabetes berhasil', predict);
};
