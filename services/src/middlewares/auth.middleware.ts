// src/middlewares/auth.middleware.ts
import { Context, Next } from 'koa';
import jwt from 'jsonwebtoken';
import User from '../models/User';
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key'; // 替换为你的密钥

export default async function authMiddleware(ctx: Context, next: Next) {
  // 从请求头中获取 token
  const token = ctx.headers.authorization?.split(' ')[1];

  if (!token) {
    ctx.status = 401;
    ctx.body = { message: '未提供认证令牌' };
    return;
  }

  try {
    // 验证 token
    const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
    const user = await User.findById(decoded.userId);

    if (!user) {
      ctx.status = 401;
      ctx.body = { message: '用户不存在' };
      return;
    }

    // 将用户信息存入 ctx.state
    ctx.state.user = user;
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: '无效的认证令牌' };
  }
}