import Router from 'koa-router';
import { validateRequest } from '../middlewares/validate-request.middleware';
import UserController from '../controllers/user.controller';
import { UserEntity } from '../entities/User.entity';

const router = new Router({ prefix: '/api/user' });

// 更新用户
router.post('/update', validateRequest(UserEntity), UserController.updateUser);
// 获取所有用户
router.get('/', UserController.getUserList);
// 获取用户详情
router.get('/:id', UserController.getUserDetail);
// 删除用户
router.post('/delete', UserController.deleteUser);
// 禁用用户
router.post('/disable', UserController.disableUser);
// 启用用户
router.post('/enable', UserController.enableUser);

export default router;