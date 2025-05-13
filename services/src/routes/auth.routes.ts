// routes/auth.routes.ts
import Router from 'koa-router';
import { login,register } from '../controllers/auth.controller';

const authRouter = new Router();
authRouter.post('/register', register);
authRouter.post('/login', login);

export default authRouter;