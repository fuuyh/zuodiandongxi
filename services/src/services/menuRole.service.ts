import MenuRole from '../models/MenuRole';
import { RoleMenu } from '@/types';
// 创建菜单角色关联
async function createMenuRole(roleMenu: RoleMenu) {
  return await MenuRole.createMenuRole(roleMenu);
}

// 删除菜单角色关联
async function deleteMenuRole(roleMenu: RoleMenu) {
  return await MenuRole.deleteMenuRole(roleMenu);
}

// 根据角色id获取菜单列表
async function getMenusByRoleId(roleId: string) {
  return await MenuRole.getMenuListByRoleId(roleId);
}

// 导出

export default {
  createMenuRole,
  deleteMenuRole,
  getMenusByRoleId
}