import { Context } from 'koa';
import Result from '../utils/result';
import menuService from '../services/menu.service';

class MenuController {
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
    const { id } = ctx.request.body;

    const success = await menuService.updateMenu(id, dto);
    if (success) {
      ctx.body = Result.ok('更新菜单成功');
    } else {
      ctx.status = 400;
      ctx.body = Result.err('更新菜单失败');
    }
  }
}

export default new MenuController();