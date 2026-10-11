import { Router } from 'express';
import authenticationMiddleware from '../../../middlewares/auth.js';
import { createPredict } from '../controllers/predict-controller.js';
import { validate } from '../../../middlewares/validate.js';
import { predictPayloadSchema } from '../validator/schema.js';

const router = Router();

router.post(
  '/predict',
  authenticationMiddleware,
  validate(predictPayloadSchema),
  createPredict
);

export default router;
