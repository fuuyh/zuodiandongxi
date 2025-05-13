import { Context } from 'koa';
import Result from '../utils/result';
import menuRoleService from '../services/menuRole.service';
import userRoleService from '../services/userRole.service';
import roleService from '../services/role.service';
import { Role, Page, RoleMenu, UserRole } from '@/types';

class RoleController {
  // 创建角色
  async createRole(ctx: Context) {
    const dto = ctx.state.dto; // 已经经过校验的 DTO 对象
    const success = await roleService.createRole(dto);
    if (success) {
      ctx.body = Result.ok('创建角色成功');
    } else {
      ctx.body = Result.err('创建角色失败');
    }
  }
  // 更新角色
  async updateRole(ctx: Context) {
    const dto = ctx.state.dto;
    const success = await roleService.updateRole(dto);
    if (success) {
      ctx.body = Result.ok('更新角色成功');
    } else {
      ctx.body = Result.err('更新角色失败');
    }
  }
  // 删除角色
  async deleteRole(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = Result.err('角色ID不能为空');
      return;
    }
    await roleService.deleteRole(id);
    ctx.body = Result.ok('删除角色成功');
  }
  // 获取所有角色
  async getAllRoles(ctx: Context) {
    const { page = 1, pageSize = 10 } = ctx.request.query;
    const roles = await roleService.findAllRoles(Number(page), Number(pageSize));
    ctx.body = Result.ok('获取所有角色成功', roles);
  }
  // 获取角色详情
  async getRoleDetail(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = Result.err('角色ID不能为空');
      return;
    }
    const role = await roleService.findRoleById(id);
    ctx.body = Result.ok('获取角色详情成功', role);
  }
  // 获取角色的菜单权限
  async getRoleMenus(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = Result.err('角色ID不能为空');
      return;
    }
    const menus = await menuRoleService.getMenusByRoleId(id);
    ctx.body = Result.ok('获取角色菜单权限成功', menus);
  }
  // 获取角色的用户权限
  async getRoleUsers(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = Result.err('用户ID不能为空');
      return;
    }
    const users = await userRoleService.getRolesByUserId(id);
    ctx.body = Result.ok('获取角色用户权限成功', users);
  }
}

exports = new RoleController();