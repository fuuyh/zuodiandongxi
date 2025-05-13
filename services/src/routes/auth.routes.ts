// routes/auth.routes.ts
import Router from 'koa-router';
import { validateRequest } from '../middlewares/validate-request.middleware';
import { login, register } from '../controllers/auth.controller';
import { UserEntity } from '../entities/User.entity';

const authRouter = new Router({ prefix: '/api/auth' });
authRouter.post('/register', validateRequest(UserEntity), register);
authRouter.post('/login', login);

export default authRouter;