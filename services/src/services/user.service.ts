const User = require('../models/User');
const uuid = require('../utils/genUUID')
import { User as UserType } from '@/types';
// 注册用户
async function registerUser(user:UserType):Promise<boolean> {
  const existingUser = await User.findUnique({ where: { user_name: user.user_name } });
  if (existingUser) return false;
  const hashedPassword = await bcrypt.hash(user.password);
  user.id = uuid();
  user.password = hashedPassword;
  return User.createUser({
    data: user
  });
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
// 获取所有用户
async function getAllUsers():Promise<UserType[]> {
  const users = await User.findAll();
  return users;
}

export default {
  registerUser,updateUser
};