const userService = require('../services/user.service');
const Result = require('../utils/result');

class UserController {
  // 获取用户列表
  async getUserList(ctx) {
    const { page = 1, pageSize = 10 } = ctx.request.query;
    const users = await userService.findAllUsers(Number(page), Number(pageSize));
    ctx.body = Result.ok('获取用户列表成功', users);
  }
  // 获取用户详情
  async getUserDetail(ctx) {
    const { id } = ctx.request.body;
    const user = await userService.findUserById(id);
    ctx.body = Result.ok('获取用户详情成功', user);
  }
  // 删除用户
  async deleteUser(ctx) {
    const { id } = ctx.request.body;
    await userService.deleteUser(id);
    ctx.body = Result.ok('删除用户成功');
  }
  // 更新用户
  async updateUser(ctx) {
    const { id, data } = ctx.request.body;
    const user = await userService.updateUser(id, data);
    ctx.body = Result.ok('更新用户成功', user);
  }
}

module.exports = new UserController();