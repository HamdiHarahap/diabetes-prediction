const BASE_URL = 'http://localhost:3000';

export const predict = async (data, token) => {
  const response = await fetch(`${BASE_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      gender: data.gender,
      age: Number(data.age),
      hypertension: data.hypertension,
      heart_disease: data.heart_disease,
      smoking_history: data.smoking_history,
      bmi: Number(data.bmi.replace(',', '.')),
      blood_glucose_level: Number(data.blood_glucose_level),
    }),
  });

  const result = await response.json();

  if (result.status != 'success') {
    throw new Error(result.message || 'Gagal melakukan skrining');
  }

  return result;
};
