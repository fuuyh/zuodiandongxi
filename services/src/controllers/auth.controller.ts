import { Context } from 'koa';
import authService from '@/services/auth.service'
import Result from '../utils/result';
import { User, UserLogin } from '@/types';

export const register = async (ctx: Context) => {
  const data = ctx.request.body;
  const success = await authService.registerUser(data as User);
  if (success) {
    ctx.body = Result.ok('注册成功！');
  } else {
    Result.err('注册失败！');
  }
}

export const login = async (ctx: Context) => {
  try {
    const { username, password } = ctx.request.body;
    const token = await authService.loginUser({ user_name: username, password } as UserLogin);
    ctx.body = Result.ok('登录成功！', { token });
  } catch (error: any) {
    if (error.message === 'Invalid username or password') {
      ctx.status = 401;
      ctx.body = Result.unauthorized('用户名或密码错误！');
    } else {
      ctx.status = 500;
      ctx.body = Result.err('登录失败！');
    }
  }
}