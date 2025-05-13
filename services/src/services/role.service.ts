const Role = require('../models/Role');
const UUID = require('../utils/genUUID');
const pagination = require('prisma-pagination');

// 创建角色
async function createRole(data) {
  data.id = UUID();
  const role = await Role.createRole(data);
  return role;
}

// 获取所有角色
async function findAllRoles(page, pageSize) {
  const result = await pagination({
    model: Role,
    page,
    pageSize,
    // 可选：添加查询条件、排序等
    where: {},     // 过滤条件
    orderBy: { id: 'asc' },  // 排序方式
  });
  return result;
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