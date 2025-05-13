// middlewares/error.middleware.ts
import { Middleware } from 'koa';

const errorMiddleware: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err.statusCode || 500;
    ctx.body = {
      message: err.message,
    };
    throw err;
  }
};

export default errorMiddleware;