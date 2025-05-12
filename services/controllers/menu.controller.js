const menuService = require('../services/menuService');
const Result = require('../utils/result');

class MenuController {
  async getMenuTree(ctx) {
    const menus = await menuService.getMenuTree();
    ctx.body = Result.ok('获取菜单树成功', menus);
  }
  // 创建菜单
  async createMenu(ctx) {
    const { data } = ctx.request.body;
    const menu = await menuService.createMenu(data);
    ctx.body = Result.ok('创建菜单成功', menu);
  }
  // 更新菜单
  async updateMenu(ctx) {

    const { id, data } = ctx.request.body;
    const menu = await menuService.updateMenu(id, data);
    ctx.body = Result.ok('更新菜单成功', menu);
  }
  // 删除菜单
  async deleteMenu(ctx) {
    
    const { id } = ctx.request.body;
    await menuService.deleteMenu(id);
    ctx.body = Result.ok('删除菜单成功');
  }
}

module.exports = new MenuController();