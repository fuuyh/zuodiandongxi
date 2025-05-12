const Menu = require('../models/Menu');
const UUID = require('../utils/genUUID')

// 创建菜单
async function createMenu(data) {
  data.id = UUID();
  const menu = await Menu.create({
    data
  });
  return menu;
}
// 更新菜单
async function updateMenu(id, data) {
  
  return Menu.updateMenu(id, data);
}
// 删除菜单
async function deleteMenu(id) {
  
  return Menu.deleteMenu(id);
}
// 获取所有菜单并组装成树形结构
async function getMenuTree() {
  
  return Menu.getMenuTree();
}

module.exports = {
  
  createMenu,
  updateMenu,
  deleteMenu,
  getMenuTree
}