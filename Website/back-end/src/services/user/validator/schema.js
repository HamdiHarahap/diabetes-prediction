import Joi from 'joi';

export const userPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
