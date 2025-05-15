// 菜单
export interface Menu {
  id: string;
  menuName: string;
  parentId: string | null;
  orderNum?: number | null;
  path?: string | null;
  component?: string | null;
  query?: string | null;
  routeName?: string | null;
  isFrame?: number | null;
  isCache?: number | null;
  menuType?: string | null;
  visible?: string | null;
  status?: string | null;
  icon?: string | null;
  remark?: string | null;
}
// 树形菜单接口
export interface MenuTree {
  id: string;
  menuName: string;
  parentId: string | null;
  disabled?: boolean;
  children: Array<MenuTree>;
}
// 角色
export interface Role {
  id: string;
  roleName: string;
  roleKey: string;
  status: string;
  delFlag?: string | null;
  remark?: string | null;
}
// 角色菜单
export interface RoleMenu {
  roleId: string;
  menuId: string;
}
// 用户
export interface User {
  id: string;
  username: string;
  nickName: string;
  userType?: string | null;
  email?: string | null;
  phonenumber?: string | null;
  sex?: string | null;
  avatar?: string | null;
  password?: string | null;
  remark?: string | null;
}
// 用户角色
export interface UserRole {
  userId: string;
  roleId: string;
}
// 用户登陆
export interface UserLogin {
  username: string;
  password: string;
}

// api 返回接口
// 获取用户信息
export interface UserInfo {
  userId: string;
  userName: string;
  roles: Array<string>;
  buttons: Array<string>;
}