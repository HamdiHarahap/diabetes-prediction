import { Router } from 'express';
import users from '../services/user/routes/index.js';
import authentications from '../services/authentication/routes/index.js';
import predict from '../services/predict/routes/index.js';

const router = Router();

router.use('/', users);
router.use('/', authentications);
router.use('/', predict);

export default router;
