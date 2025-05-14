import { PrismaClient } from '@prisma/client'
import { User as UserType, Page } from '@/types';
import { UserEntity } from '../entities/User.entity';
import { plainToInstance } from 'class-transformer';

const prisma = new PrismaClient();

export default class User {
  static async findById(id: string): Promise<UserEntity | null> {
    const user = await prisma.sys_user.findUnique({ where: { id } });
    if (!user) return null;
    return plainToInstance(UserEntity, user);
  }

  // 根据用户名查询用户
  static async findByUsername(username: string): Promise<UserEntity | null> {
    try {
      const user = await prisma.sys_user.findFirst({ where: { username } });
      if (!user) return null;
      return plainToInstance(UserEntity, user);
    } catch (error) {
      console.error('数据库查询出错:', error);
      return null;
    }
  }

  // 获取所有用户
  static async findAll(
    pageNum: number,
    pageSize: number
  ): Promise<Page<UserEntity>> {
    const [total, data] = await Promise.all([
      prisma.sys_user.count(),
      prisma.sys_user.findMany({
        skip: (pageNum - 1) * pageSize,
        take: pageSize,
      }),
    ]);
    return {
      records: data.map(item => plainToInstance(UserEntity, item)),
      total,
      current: pageNum,
      size: pageSize
    };
  }

  static async createUser(data: UserEntity): Promise<boolean> {
    try {
      // 确保 password 字段存在并为字符串类型
      if (!data.password) {
        throw new Error('密码不能为空');
      }
  
      await prisma.sys_user.create({
        data: {
          ...data,
          password: data.password, // 明确赋值，确保类型正确
        },
      });
      return true;
    } catch (error) {
      console.error('创建用户失败:', error);
      return false;
    }
  }

  // 更新用户信息
  static async updateUser(id: string, data: UserEntity): Promise<boolean> {
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