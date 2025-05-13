import { PrismaClient } from '@prisma/client'
import { Menu as MenuType, MenuTree,Page } from '@/types';
const prisma = new PrismaClient();

class Menu {
  // 获取所有菜单,并且分页
  static async findAll(
    pageNum: number = 1,
    pageSize: number = 10
  ): Promise<Page<MenuType>> {
    const [total, data] = await Promise.all([
      prisma.sys_menu.count(),
      prisma.sys_menu.findMany({
        skip: (pageNum - 1) * pageSize,
        take: pageSize,
      }),
    ]);
    return { records: data, total, current: pageNum, size: pageSize };
  }

  // 创建菜单
  static async createMenu(data: MenuType): Promise<boolean> {
    try {
      await prisma.sys_menu.create({ data });
      return true;
    } catch (error) {
      console.error('创建菜单失败:', error);
      return false;
    }
  }

  // 更新菜单
  static async updateMenu(id: string, data: MenuType): Promise<boolean> {
    try {
      await prisma.sys_menu.update({
        where: { id },
        data,
      });
      return true;
    } catch (error) {
      console.error('菜单更新失败:', error);
      return false;
    }
  }
  // 删除菜单
  static async deleteMenu(id: string): Promise<boolean> {
    try {
      await prisma.sys_menu.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error('删除菜单失败:', error);
      return false;
    }
  }

  // 获取所有菜单并组装成树形结构
  static async getMenuTree(): Promise<MenuTree[]> {
    const menus = await prisma.sys_menu.findMany();
    return this.buildMenuTree(menus);
  }

  // 构建树形结构（高效版本）
  static buildMenuTree(menus: MenuType[]): MenuTree[] {
    const map = new Map<string, MenuType>();
    const result: MenuTree[] = [];

    // 构建 ID 到菜单的映射
    for (const menu of menus) {
      map.set(menu.id, { ...menu });
    }

    // 给每个节点添加 children，并构建最终树
    for (const menu of menus) {
      const parentId = menu.parent_id;
      if (parentId && map.has(parentId)) {
        const parent = map.get(parentId)!;
        const treeMenu = menu as MenuTree;

        // 初始化 children 数组
        treeMenu.children = treeMenu.children || [];

        // 设置 disabled 状态（比如根据 visible 或 status）
        treeMenu.disabled = menu.visible === '1'; // 示例：visible=1 表示隐藏/禁用

        // 添加到父级的 children 中
        (parent as any).children = (parent as any).children || [];
        (parent as any).children.push(treeMenu);
      } else {
        // 没有父节点，作为根节点加入
        const treeMenu = { ...menu, children: [] } as MenuTree;

        // 设置 disabled
        treeMenu.disabled = menu.visible === '1';

        result.push(treeMenu);
      }
    }

    return result;
  }
}

module.exports = Menu;