// model/menu.js
import { PrismaClient } from '@prisma/client'
import { RoleMenu } from '@/types';
const prisma = new PrismaClient();

class MenuRole {
  // 创建用户角色关联
  static async createMenuRole(roleMenu: RoleMenu): Promise<boolean> {
    try {
      await prisma.sys_role_menu.create({
        data: {
          role_id: roleMenu.role_id,
          menu_id: roleMenu.menu_id
        }
      });
      return true;
    } catch (error) {
      console.error('创建用户角色关联失败:', error);
      return false;
    }
  }

  // 删除用户角色关联
  static async deleteMenuRole(roleMenu: RoleMenu): Promise<boolean> {
    try {
      await prisma.sys_role_menu.delete({
        where: {
          role_id_menu_id: {
            role_id: roleMenu.role_id,
            menu_id: roleMenu.menu_id
          }
        }
      });
      return true;
    } catch (error) {
      console.error('删除用户角色关联失败:', error);
      return false;
    }
  }

  // 根据角色id获取菜单列表
  static async getMenuListByRoleId(roleId: string): Promise<RoleMenu[]> {
    try {
      const menuList = await prisma.sys_role_menu.findMany({
        where: {
          role_id: roleId
        }
      });
      return menuList;
    } catch (error) {
      console.error('获取菜单列表失败:', error);
      return [];
    }
  }
}

module.exports = MenuRole;