// model/Role.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Role {
  // 获取所有角色
  static async findAllRoles() {
    return await prisma.sys_role.findMany();
  }

  // 根据ID获取角色
  static async findRoleById(id) {
    return await prisma.sys_role.findUnique({
      where: {
        role_id: id,
      },
    });
  }
  // 创建角色
  static async createRole(data) {
    return await prisma.sys_role.create({
      data,
    });
  }

  // 更新角色
  static async updateRole(id, data) {
    
    return await prisma.sys_role.update({
      where: {
        role_id: id,
      },
      data,
    });
  }
  // 删除角色
  static async deleteRole(id) {
    return await prisma.sys_role.delete({
      where: {
        role_id: id,
      },
    });
  }
  
}

module.exports = Role;