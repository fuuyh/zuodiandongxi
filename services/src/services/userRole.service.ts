const UserRole = require('../models/UserRole');
import { UserRole } from '@/types';
// 创建用户角色关联
async function createUserRole(data: UserRole) {
  return await UserRole.createUserRole(data);
}

// 删除用户角色关联
async function deleteUserRole(data: UserRole) {
  return await UserRole.deleteUserRole(data);
}
// 根据用户id获取角色列表
async function getRolesByUserId(userId: string) {
  return await UserRole.getRolesByUserId(userId);
}

// 导出
export default {

  createUserRole,
  deleteUserRole,
  getRolesByUserId,

}