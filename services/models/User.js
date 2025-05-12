// model/user.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class User {
  static async findById(id) {
    return await prisma.sys_user.findUnique({ where: { id } });
  }

  static async findByUsername(username) {
    return await prisma.sys_user.findUnique({ where: { user_name: username } });
  }

  static async createUser(data) {
    return await prisma.sys_user.create({
      data,
    });
  }
  // 更新用户信息
  static async updateUser(id, data) {
    return await prisma.sys_user.update({
      where: { id },
      data,
    });
  }

  // 停用用户
  static async disableUser(id) {
    return await prisma.sys_user.update({
      where: { id },
      data: { status: '1' },
    });
  }

  // 启用用户
  static async enableUser(id) {
    return await prisma.sys_user.update({
      where: { id },
      data: { status: '0' },
    });
  }
  
}

module.exports = User;