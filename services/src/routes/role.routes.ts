import Router from 'koa-router';
import { validateRequest } from '../middlewares/validate-request.middleware';
import RoleController from '../controllers/role.controller';
import { RoleEntity } from '../entities/Role.entity';
import { RoleMenuEntity } from '../entities/RoleMenu.entity';
import { UserRoleEntity } from '../entities/UserRole.entity';

const router = new Router({ prefix: '/api/role' });
// 创建角色
router.post('/add', validateRequest(RoleEntity), RoleController.createRole);
// 更新角色
router.post('/update', validateRequest(RoleEntity), RoleController.updateRole);
// 删除角色
router.post('/delete', RoleController.deleteRole);
// 获取所有角色
router.get('/', RoleController.getAllRoles);
// 获取角色详情
router.get('/detail', RoleController.getRoleDetail);
// 获取角色的菜单权限
router.get('/menus', RoleController.getRoleMenus);
// 获取角色的用户权限
router.get('/users', RoleController.getRoleUsers);
// 创建角色的菜单权限
router.post('/menus/add', validateRequest(RoleMenuEntity), RoleController.createRoleMenus);
// 删除角色的菜单权限
router.post('/menus/delete', validateRequest(RoleMenuEntity), RoleController.deleteRoleMenus);
// 创建角色的用户权限
router.post('/users/add', validateRequest(UserRoleEntity), RoleController.createRoleUsers);
// 删除角色的用户权限
router.post('/users/delete', validateRequest(UserRoleEntity), RoleController.deleteRoleUsers);
export default router;