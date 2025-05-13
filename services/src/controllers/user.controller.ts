import { Context } from 'koa';
import Result from '../utils/result';
import userService from '../services/user.service';
import { User as UserType, Page } from '@/types';
class UserController {
  // 获取用户列表
  async getUserList(ctx: Context) {
    const page = Number(ctx.query.page) || 1; // 默认值为 1
    const size = Number(ctx.query.size) || 10; // 默认值为 10
    const users = await userService.getAllUsers(page, size);
    ctx.body = Result.ok<Page<UserType>>('获取用户列表成功', users);
  }
  // 获取用户详情
  async getUserDetail(ctx: Context) {
    const id:string = ctx.query.id as string;
    if (!id) return Result.err('用户id不能为空')
    const user = await userService.getUserById(id);
    ctx.body = Result.ok('获取用户详情成功', user);
  }
  // 删除用户
  async deleteUser(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) return Result.err('用户id不能为空')
    await userService.deleteUser(id);
    ctx.body = Result.ok('删除用户成功');
  }
  // 更新用户
  async updateUser(ctx: Context) {
    const dto = ctx.state.dto; // 已经经过校验的 DTO 对象
    const { id } = dto;
    const user = await userService.updateUser(id, dto);
    ctx.body = Result.ok('更新用户成功', user);
  }
  // 停用用户
  async disableUser(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) return Result.err('用户id不能为空')
    await userService.disableUser(id);
    ctx.body = Result.ok('停用用户成功');
  }
  // 启用用户
  async enableUser(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) return Result.err('用户id不能为空')
    await userService.enableUser(id);
    ctx.body = Result.ok('启用用户成功');
  }
}

export default new UserController();