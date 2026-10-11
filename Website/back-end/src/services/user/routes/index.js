import { Router } from 'express';
import { createUser, getUserLogged } from '../controllers/user-controller.js';
import { validate } from '../../../middlewares/validate.js';
import { userPayloadSchema } from '../validator/schema.js';
import authenticationMiddleware from '../../../middlewares/auth.js';

const router = Router();

router.post('/users', validate(userPayloadSchema), createUser);
router.get('/users/me', authenticationMiddleware, getUserLogged);

export default router;
