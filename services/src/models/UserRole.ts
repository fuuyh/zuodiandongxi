import { PrismaClient } from '@prisma/client'
import { UserRole as UserRoleType } from '@/types';
const prisma = new PrismaClient();
export default class UserRole {
  // 创建用户角色关联
  static async createUserRole(data: UserRoleType): Promise<boolean> {
    try {
      await prisma.sys_user_role.create({
        data: {
          userId: data.userId,
          roleId: data.roleId,
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
          userId_roleId: {
            userId: data.userId,
            roleId: data.roleId,
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
          userId
        }
      });
      return menuList;
    } catch (error) {
      console.error('获取菜单列表失败:', error);
      return [];
    }
  }

}
