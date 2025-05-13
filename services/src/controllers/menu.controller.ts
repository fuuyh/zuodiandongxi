import { Context } from 'koa';
import Result from '../utils/result';
import menuService from '../services/menu.service';
import { MenuTree,Page } from '@/types';

class MenuController {
  // 获取所有菜单 分页
  async getAllMenus(ctx: Context) {
    const page = Number(ctx.query.page) || 1; // 默认值为 1
    const size = Number(ctx.query.size) || 10; // 默认值为 10
    const menus = await menuService.getAllMenus(page, size);
    ctx.body = Result.ok<Page<MenuTree>>('获取所有菜单成功', menus);
  }
  // 获取所有菜单树
  async getAllMenusTree(ctx: Context) {
    const menus = await menuService.getMenuTree();
    ctx.body = Result.ok<MenuTree[]>('获取所有菜单树成功', menus);
  }
  async createMenu(ctx: Context) {
    const dto = ctx.state.dto; // 已经经过校验的 DTO 对象
    const success = await menuService.createMenu(dto);
    if (success) {
      ctx.body = Result.ok('创建菜单成功');
    } else {
      ctx.status = 400;
      ctx.body = Result.err('创建菜单失败');
    }
  }

  async updateMenu(ctx: Context) {
    const dto = ctx.state.dto;
    const success = await menuService.updateMenu(dto);
    if (success) {
      ctx.body = Result.ok('更新菜单成功');
    } else {
      ctx.body = Result.err('更新菜单失败');
    }
  }

  // 删除
  async deleteMenu(ctx: Context) {
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = Result.err('菜单ID不能为空');
      return;
    }
    const success = await menuService.deleteMenu(id);
    if (success) {
      ctx.body = Result.ok('删除菜单成功');
    } else {
      ctx.body = Result.err('删除菜单失败');
    }
  }
}

export default new MenuController();