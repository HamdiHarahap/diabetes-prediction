import Joi from 'joi';

export const postAuthenticationPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export const putAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

export const deleteAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
