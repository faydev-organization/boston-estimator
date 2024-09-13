import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { validateUser } from '../middlewares/validationUserMiddleware';

const router = Router();

router.post('/register', validateUser, register);
router.post('/login', login);

export default router;
