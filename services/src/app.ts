import 'reflect-metadata';
import 'dotenv/config';
import Koa from 'koa';
import koaBody from 'koa-body';
import errorMiddleware from './middlewares/error.middleware';
import authRoutes from './routes/auth.routes';
import menuRoutes from './routes/menu.routes';
import cors from '@koa/cors';
import logger from 'koa-logger';

const app = new Koa();

// Middlewares
// 支持文件上传
app.use(koaBody({ multipart: true, jsonLimit: '10mb', formLimit: '10mb' }));
app.use(errorMiddleware); // 正确使用方式，返回中间件函数
app.use(cors());
app.use(logger());

// Routes
app.use(authRoutes.routes()).use(authRoutes.allowedMethods());
app.use(menuRoutes.routes()).use(menuRoutes.allowedMethods());

// 错误处理（全局错误监听）
app.on('error', (err, ctx) => {
  console.error('Server error:', err);
  ctx.body = { message: err.message };
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});