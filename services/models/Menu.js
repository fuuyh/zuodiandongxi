// model/Menu.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Menu {
  // 创建菜单
  static async createMenu(data) {
    return await prisma.menu.create({ data });
  }

  // 更新菜单
  static async updateMenu(id, data) {
    return await prisma.menu.update({
      where: { id },
      data,
    });
  }
  // 删除菜单
  static async deleteMenu(id) {
    return await prisma.menu.delete({
      where: { id },
    });
  }

  // 获取所有菜单并组装成树形结构
  static async getMenuTree() {
    const menus = await prisma.menu.findMany(); // 获取所有菜单数据
    return this.buildTree(menus);
  }

  // 组装树形结构
  static buildTree(menus, parentId = null) {
    const tree = [];
    for (const menu of menus) {
      if (menu.parentId === parentId) {
        const children = this.buildTree(menus, menu.id); // 递归查找子节点
        if (children.length > 0) {
          menu.children = children;
        }
        tree.push(menu);
      }
    }
    return tree;
  }
}

module.exports = Menu;