// 菜单
export interface Menu {
  id: string;
  menu_name: string;
  parent_id: string | null;
  order_num?: number | null;
  path?: string | null;
  component?: string | null;
  query?: string | null;
  route_name?: string | null;
  is_frame?: number | null;
  is_cache?: number | null;
  menu_type?: string | null;
  visible?: string | null;
  status?: string | null;
  perms?: string | null;
  icon?: string | null;
  create_by?: string | null;
  create_time?: Date | null;
  update_by?: string | null;
  update_time?: Date | null;
  remark?: string | null;
}
// 树形菜单接口
export interface MenuTree {
  id: string;
  menu_name: string;
  parent_id: string | null;
  disabled?: boolean;
  children: Array<MenuTree>;
}
// 角色
export interface Role {
  id: string;
  role_name: string;
  role_key: string;
  role_sort: number;
  data_scope?: string;
  menu_check_strictly?: boolean;
  dept_check_strictly?: boolean;
  status: string;
  del_flag?: string;
  create_by?: string;
  create_time?: Date;
  update_by?: string;
  update_time?: Date;
  remark?: string;
}
// 角色菜单
export interface RoleMenu {
  role_id: string;
  menu_id: string;
}
// 用户
export interface User {
  id: string;
  dept_id?: string | null;
  user_name: string;
  nick_name: string;
  user_type?: string | null;
  email?: string | null;
  phonenumber?: string | null;
  sex?: string | null;
  avatar?: string | null;
  password?: string | null;
  status?: string | null;
  del_flag?: string | null;
  login_ip?: string | null;
  login_date?: Date | null;
  create_by?: string | null;
  create_time?: Date | null;
  update_by?: string | null;
  update_time?: Date | null;
  remark?: string | null;
}
// 用户角色
export interface UserRole {
  user_id: string;
  role_id: string;
}
// 用户登陆
export interface UserLogin {
  user_name: string;
  password: string;
}