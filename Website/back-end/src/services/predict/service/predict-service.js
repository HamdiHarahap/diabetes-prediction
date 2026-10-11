const predictRisk = async ({
  gender,
  age,
  hypertension,
  heart_disease,
  smoking_history,
  bmi,
  blood_glucose_level,
}) => {
  const response = await fetch(`${process.env.ML_API_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      gender,
      age,
      hypertension,
      heart_disease,
      smoking_history,
      bmi,
      blood_glucose_level,
    }),
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`ML API error: ${response.status}`);
  }

  return JSON.parse(text);
};

export default predictRisk;
