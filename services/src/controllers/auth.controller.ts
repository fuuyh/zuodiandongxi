const authService = require('../services/auth.service');
const Result = require('../utils/result');

export const register = async(ctx) => {
  try {
    const { username, password } = ctx.request.body;
    const user = await authService.registerUser(username, password);
    // ctx.status = 201;
    // ctx.body = { message: 'User created', user };
    ctx.body = Result.ok('注册成功！', user);
  } catch (error) {
    Result.fail('注册失败！', error.message);
  }
}

export const login = async(ctx) => {
  try {
    const { username, password } = ctx.request.body;
    const token = await authService.loginUser(username, password);
    ctx.body = Result.ok('登录成功！', { token });
  } catch (error) {
    if (error.message === 'Invalid username or password') {
      ctx.status = 401;
      ctx.body = Result.unauthorized('用户名或密码错误！');
    } else {
      ctx.status = 500;
      ctx.body = Result.error('登录失败！', error.message);
    }
  }
}