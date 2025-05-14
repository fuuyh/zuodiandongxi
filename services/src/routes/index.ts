import Router from 'koa-router';
import authMiddleware from '../middlewares/auth.middleware'; // 引入中间件
import menuRoutes from './menu.routes';
import roleRoutes from './role.routes';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const router = new Router();

// 所有需要鉴权的路由使用中间件
const protectedRoutes = new Router();

protectedRoutes.use(authMiddleware); // 应用中间件

protectedRoutes.use('/menus', menuRoutes.routes(), menuRoutes.allowedMethods());
protectedRoutes.use('/roles', roleRoutes.routes(), roleRoutes.allowedMethods());
protectedRoutes.use('/users', userRoutes.routes(), userRoutes.allowedMethods());

// 不需要鉴权的路由（如登录、注册等）
router.use('/auth', authRoutes.routes(), authRoutes.allowedMethods());

// 添加受保护的路由
router.use(protectedRoutes.routes()).use(protectedRoutes.allowedMethods());

export default router;