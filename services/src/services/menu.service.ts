import Menu from '../models/Menu';
import { uuid } from "../utils/genUUID";
import { Menu as MenuType, MenuTree,Page } from '@/types';

// 获取所有菜单
async function getAllMenus():Promise<MenuType[]> {
  return await Menu.findAll();
}

// 创建菜单
async function createMenu(data:MenuType):Promise<boolean> {
  data.id = uuid();
  const bool = await Menu.createMenu(data);
  return bool;
}
// 更新菜单
async function updateMenu(data:MenuType):Promise<boolean> {
  const bool = await Menu.updateMenu(data);
  return bool;
}
// 删除菜单
async function deleteMenu(id:string):Promise<boolean> {
  const bool = await Menu.deleteMenu(id);
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