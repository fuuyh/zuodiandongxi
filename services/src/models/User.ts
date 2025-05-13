import { PrismaClient } from '@prisma/client'
import { User as UserType,Page } from '@/types';
const prisma = new PrismaClient();

class User {
  static async findById(id: string): Promise<UserType | null> {
    const user = await prisma.sys_user.findUnique({ where: { id } });
    // 使用 plainToInstance 方法进行类型转换
    if (!user) return null;
    return user;
  }
  // 获取所有用户
  static async findAll(
    pageNum: number = 1,
    pageSize: number = 10
  ): Promise<Page<UserType>> {
    const [total, data] = await Promise.all([
      prisma.sys_user.count(),
      prisma.sys_user.findMany({
        skip: (pageNum - 1) * pageSize,
        take: pageSize,
      }),
    ]);
    return { records: data, total, current: pageNum, size: pageSize };
  }
  static async createUser(data: UserType): Promise<boolean> {
    try {
      await prisma.sys_user.create({ data });
      return true;
    } catch (error) {
      console.error('创建用户失败:', error);
      return false;
    }
  }
  // 更新用户信息
  static async updateUser(id: string, data: UserType): Promise<boolean> {
    try {
      await prisma.sys_user.update({
        where: { id },
        data,
      });
      return true;
    } catch (error) {
      console.error('更新用户信息失败:', error);
      return false;
    }
  }

  // 停用用户
  static async disableUser(id: string): Promise<boolean> {
    try {
      await prisma.sys_user.update({
        where: { id },
        data: { status: '1' },
      });
      return true;
    } catch (error) {
      console.error('停用用户失败:', error);
      return false;
    }
  }

  // 启用用户
  static async enableUser(id: string): Promise<boolean> {
    try {
      await prisma.sys_user.update({
        where: { id },
        data: { status: '0' },
      });
      return true;
    } catch (error) {
      console.error('启用用户失败:', error);
      return false;
    }
  }

}

module.exports = User;