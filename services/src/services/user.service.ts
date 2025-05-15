const User = require('../models/User');
import { User as UserType,Page } from '@/types';


// 根据用户名查询是否存在
async function getUserByName(name:string):Promise<UserType | null> {
  const user = await User.findByUsername(name);
  return user;
}
// 更新用户信息
async function updateUser(id:string, data:UserType):Promise<boolean> {
  const bool = await User.updateUser({
    where: { id },
    data
  });
  return bool;
}
// 停用用户
async function disableUser(id:string):Promise<boolean> {
  const bool = await User.disableUser({
    where: { id }
  });
  return bool;
}
// 启用用户
async function enableUser(id:string):Promise<boolean> {
  const bool = await User.enableUser({
    where: { id }
  });
  return bool;
}
// 获取所有用户 分页查询
async function getAllUsers(pageNum:number, pageSize:number):Promise<Page<UserType>> {
  return await User.findAll(pageNum, pageSize);
}
// 获取用户信息
async function getUserById(id:string):Promise<UserType> {
  return await User.findById(id);
}
// 删除用户 
async function deleteUser(id:string):Promise<boolean> {
  return await User.deleteUser(id);
}

export default {
  updateUser,disableUser,enableUser,getAllUsers,getUserById,deleteUser,getUserByName
};