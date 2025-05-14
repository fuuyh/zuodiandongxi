import { Context } from 'koa';
import authService from '../services/auth.service'
import Result from '../utils/result';
import { UserLogin } from '@/types';
import { UserEntity } from '../entities/User.entity';

export const register = async (ctx: Context) => {
  // const data = ctx.request.body;
  const data = ctx.state.dto;
  console.log(data, '注册数据');
  const success = await authService.registerUser(data as UserEntity);
  if (success) {
    ctx.body = Result.ok<string>('注册成功！');
  } else {
    Result.err('注册失败！');
  }
}

export const login = async (ctx: Context) => {
  try {
    const { userName, password } = ctx.request.body;
    console.log(userName, password,'[[[');
    const token = await authService.loginUser({ username: userName, password } as UserLogin);
    ctx.body = Result.ok('登录成功！', { token });
  } catch (error: any) {
    if (error.message === 'Invalid username or password') {
      ctx.body = Result.unauthorized('用户名或密码错误！');
    } else {
      ctx.body = Result.err('登录失败！');
    }
  }
}