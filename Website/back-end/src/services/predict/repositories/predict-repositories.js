import pool from '../../../config/db.js';

class PredictRepositories {
  async createPredict({
    user_id,
    gender,
    age,
    hypertension,
    heart_disease,
    smoking_history,
    bmi,
    blood_glucose_level,
    diabetes,
  }) {
    const query = {
      text: 'INSERT INTO predicts (user_id, gender, age, hypertension, heart_disease, smoking_history, bmi, blood_glucose_level, diabetes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, diabetes',
      values: [
        user_id,
        gender,
        age,
        hypertension,
        heart_disease,
        smoking_history,
        bmi,
        blood_glucose_level,
        diabetes,
      ],
    };

    const result = await pool.query(query);
    return result.rows;
  }
}

export default new PredictRepositories();
