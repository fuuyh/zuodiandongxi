import { PrismaClient } from '@prisma/client'
import { Role as RoleType,Page } from '@/types';
const prisma = new PrismaClient();

class Role {
  // 获取所有角色并且分页
    static async findAll(
      pageNum: number,
      pageSize: number
    ): Promise<Page<RoleType>> {
      const [total, data] = await Promise.all([
        prisma.sys_role.count(),
        prisma.sys_role.findMany({
          skip: (pageNum - 1) * pageSize,
          take: pageSize,
        }),
      ]);
      return { records: data, total, current: pageNum, size: pageSize };
    }

  // 根据ID获取角色
  static async findRoleById(id: string): Promise<RoleType | null> {
    return await prisma.sys_role.findUnique({
      where: {
        id,
      },
    });
  }
  // 创建角色
  static async createRole(data:RoleType) {
    return await prisma.sys_role.create({
      data,
    });
  }

  // 更新角色
  static async updateRole(data: RoleType) {
    return await prisma.sys_role.update({
      where: {
        id: data.id,
      },
      data,
    });
  }
  // 删除角色
  static async deleteRole(id: string) {
    return await prisma.sys_role.delete({
      where: {
        id,
      },
    });
  }
  
}

module.exports = Role;