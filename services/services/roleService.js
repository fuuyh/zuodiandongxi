const Role = require('../models/Role');
const UUID = require('../utils/genUUID')

// 创建角色
async function createRole(data) {
  data.id = UUID();
  const role = await Role.createRole(data);
  return role;
}

// 获取所有角色
async function findAllRoles() {
  const roles = await Role.findAllRoles();
  return roles;
}
// 获取单个角色
async function findRoleById(id) {
  const role = await Role.findRoleById(id);
  return role;
}
// 更新角色
async function updateRole(id, data) {
  
  return await Role.updateRole(id, data);
}
// 删除角色
async function deleteRole(id) {
  
  return await Role.deleteRole(id);
}

module.exports = {
  createRole,
  findAllRoles,
  findRoleById,
  updateRole,
  deleteRole,
}