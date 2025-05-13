import { PrismaClient } from '@prisma/client'
import { UserRole as UserRoleType } from '@/types';
const prisma = new PrismaClient();
class UserRole {
  // 创建用户角色关联
  static async createUserRole(data: UserRoleType): Promise<boolean> {
    try {
      await prisma.sys_user_role.create({
        data: {
          user_id: data.user_id,
          role_id: data.role_id,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
  // 删除用户角色关联
  static async deleteUserRole(data: UserRoleType): Promise<boolean> {
    try {
      await prisma.sys_user_role.delete({
        where: {
          user_id_role_id: {
            user_id: data.user_id,
            role_id: data.role_id,
          }
        }
      });
      return true;
    } catch (error) {
      console.error('删除用户角色关联失败:', error);
      return false;
    }
  }

  // 根据用户id获取角色列表
  static async getRolesByUserId(userId: string) {
    try {
      const menuList = await prisma.sys_user_role.findMany({
        where: {
          user_id: userId
        }
      });
      return menuList;
    } catch (error) {
      console.error('获取菜单列表失败:', error);
      return [];
    }
  }

}

module.exports = UserRole;