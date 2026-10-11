import Joi from 'joi';

export const predictPayloadSchema = Joi.object({
  gender: Joi.string().valid('pria', 'wanita').required(),
  age: Joi.number().required(),
  hypertension: Joi.string().valid('ya', 'tidak').required(),
  heart_disease: Joi.string().valid('ya', 'tidak').required(),
  smoking_history: Joi.string()
    .valid(
      'tidak pernah',
      'tidak ada informasi',
      'saat ini masih',
      'pernah',
      'tidak sedang',
      'mantan'
    )
    .required(),
  bmi: Joi.number().required(),
  blood_glucose_level: Joi.number().required(),
});
