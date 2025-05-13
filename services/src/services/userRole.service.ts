const UserRole = require('../models/UserRole');

// 创建用户角色关联
async function createUserRole(userId, roleId) {
  return await UserRole.createUserRole(userId, roleId);
}

// 删除用户角色关联
async function deleteUserRole(userId, roleId) {
  return await UserRole.deleteUserRole(userId, roleId);
}
// 根据用户id获取角色列表
async function getRolesByUserId(userId) {
  return await UserRole.getRolesByUserId(userId);
}

// 导出
module.exports = {
  
  createUserRole,
  deleteUserRole,
  getRolesByUserId,

}