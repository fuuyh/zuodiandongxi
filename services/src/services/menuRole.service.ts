const MenuRole = require('../models/MenuRole');

// 创建菜单角色关联
async function createMenuRole(menuId, roleId) {
  return await MenuRole.createMenuRole(menuId, roleId);
}

// 删除菜单角色关联
async function deleteMenuRole(menuId, roleId) {
  return await MenuRole.deleteMenuRole(menuId, roleId);
}

// 根据角色id获取菜单列表
async function getMenusByRoleId(roleId) {
  return await MenuRole.getMenusByRoleId(roleId);
}

// 导出

module.exports = {
  
  createMenuRole,
  deleteMenuRole,
  getMenusByRoleId
}