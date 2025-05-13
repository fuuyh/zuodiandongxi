import { hash,compare } from '../utils/bcrypt';
import { uuid } from "../utils/genUUID";
import { generateToken } from '../utils/jwt';
import { User as UserType,UserLogin } from '@/types';
import User from '../models/User';

// 注册用户
async function registerUser(user:UserType):Promise<boolean> {
  const existingUser = await User.findByUsername(user.user_name);
  if (existingUser) return false;
  const hashedPassword = await hash(user.password as string);
  user.id = uuid();
  user.password = hashedPassword;
  return User.createUser(user);
}

// 登录
async function loginUser(loginData: UserLogin):Promise<string> {
  const user = await User.findByUsername(loginData.user_name); // 同样使用 user_name 查询
  if (!user || !(await compare(loginData.password, user.password as string))) {
    throw new Error('Invalid credentials');
  }

  return generateToken({ id: user.id, username: user.user_name });
}

export default {
registerUser, loginUser
};