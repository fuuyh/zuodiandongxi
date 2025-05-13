import { Context } from 'koa';
import Result from '@/utils/result';
import menuRoleService from '@/services/menuRole.service';
import userRoleService from '@/services/userRole.service';
import roleService from '@/services/role.service';
import { Role, Page, RoleMenu, UserRole } from '@/types';

class RoleController {
  // 创建角色
  async createRole(ctx: Context) {
    const { name, description } = ctx.request.body;
    const role = await roleService.createRole(name, description);
    ctx.body = Result.ok('创建角色成功', role);
  }
  // 更新角色
  async updateRole(ctx: Context) {
    const { id, name, description } = ctx.request.body;
    const role = await roleService.updateRole(id, name, description);
    ctx.body = Result.ok('更新角色成功', role);
  }
  // 删除角色
  async deleteRole(ctx: Context) {
    const { id } = ctx.request.body;
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
    const role = await roleService.findRoleById(id);
    ctx.body = Result.ok('获取角色详情成功', role);
  }
  // 获取角色的菜单权限
  async getRoleMenus(ctx: Context) {
    const { id } = ctx.request.body;
    const menus = await menuRoleService.getRoleMenus(id);
    ctx.body = Result.ok('获取角色菜单权限成功', menus);
  }
  // 获取角色的用户权限
  async getRoleUsers(ctx: Context) {
    const { id } = ctx.request.body;
    const users = await userRoleService.getRoleUsers(id);
    ctx.body = Result.ok('获取角色用户权限成功', users);
  }
}

exports = new RoleController();