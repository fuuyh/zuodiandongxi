const Menu = require('../models/Menu');
const uuid = require('../utils/genUUID')
import { Menu as MenuType, MenuTree } from '@/types';

// 获取所有菜单,并且分页
async function getAllMenus(pageNum:number = 1, pageSize:number = 10):Promise<{ data: MenuType[]; total: number }> {
  const { data, total } = await Menu.findAll(pageNum, pageSize);
  return { data, total };
}

// 创建菜单
async function createMenu(data:MenuType):Promise<boolean> {
  data.id = uuid();
  const bool = await Menu.createMenu({
    data
  });
  return bool;
}
// 更新菜单
async function updateMenu(id:string, data:MenuType):Promise<boolean> {
  const bool = await Menu.updateMenu({
    id,
    data
  });
  return bool;
}
// 删除菜单
async function deleteMenu(id:string):Promise<boolean> {
  const bool = await Menu.deleteMenu({
    id
  });
  return bool;
}
// 获取所有菜单并组装成树形结构
async function getMenuTree():Promise<MenuTree[]> {
  const res = await Menu.getMenuTree();
  return res;
}

export default {
  getAllMenus,
  createMenu,
  updateMenu,
  deleteMenu,
  getMenuTree
};