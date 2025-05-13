// model/user.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserRole {
  // 创建用户角色关联
  static async createUserRole(userId, roleId) {
    const userRole = await prisma.user_role.create({
      data: {
        user_id: userId,
        role_id: roleId,
      },
    });
    return userRole;
  }
  // 删除用户角色关联
  static async deleteUserRole(userId, roleId) {
    return await prisma.user_role.delete({
      where: {
        user_id: {
          user_id: userId
        },
        role_id: {
          role_id: roleId
        },
      },
    });
  }

  // 根据用户id获取角色列表
  static async getRolesByUserId(userId) {
    return await prisma.user_role.findMany({
      where: {
        user_id: userId,
      },
      include: {
        role: true,
      },
    });
  }
  
}

module.exports = UserRole;