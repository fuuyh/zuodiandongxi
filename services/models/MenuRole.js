// model/menu.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class MenuRole {
  // 创建用户角色关联
  static async createMenuRole(menuId, roleId) {
    const MenuRole = await prisma.menu_role.create({
      data: {
        menu_id: menuId,
        role_id: roleId,
      },
    });
    return MenuRole;
  }
  // 删除用户角色关联
  static async deleteMenuRole(menuId, roleId) {
    return await prisma.menu_role.delete({
      where: {
        menu_id: {
          menu_id: menuId
        },
        role_id: {
          role_id: roleId
        },
      },
    });
  }
  // 根据角色id获取菜单列表
  static async getMenusByRoleId(roleId) {
    const menus = await prisma.menu_role.findMany({
      where: {
        role_id: roleId,
      },
      select: {
        menu: true,
      },
    });
    return menus.map((menuRole) => menuRole.menu);
  }
  
}

module.exports = MenuRole;