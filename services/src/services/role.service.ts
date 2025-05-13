import Role from '../models/Role';
import { uuid } from "../utils/genUUID";
import { Role as RoleType, Page } from '@/types';

// 创建角色
async function createRole(data:RoleType):Promise<boolean> {
  data.id = uuid();
  return await Role.createRole(data);
}

// 获取所有角色 分页
async function findAllRoles(pageNum:number, pageSize:number):Promise<Page<RoleType>> {
  return await Role.findAll(pageNum, pageSize);
}

// 获取单个角色
async function findRoleById(id:string): Promise<RoleType | null>{
  return await Role.findRoleById(id);
}
// 更新角色
async function updateRole(data:RoleType) {

  return await Role.updateRole(data);
}
// 删除角色
async function deleteRole(id:string) {

  return await Role.deleteRole(id);
}

export default {
  createRole,
  findAllRoles,
  findRoleById,
  updateRole,
  deleteRole,
}