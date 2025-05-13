// app.ts 修改后的代码
import Koa from 'koa';
import koaBody from 'koa-body';
import errorMiddleware from './middlewares/error.middleware';
import authRoutes from './routes/auth.routes';
import cors from '@koa/cors';
import logger from 'koa-logger';
import 'reflect-metadata';

const app = new Koa();

// Middlewares
// 支持文件上传
app.use(koaBody({ multipart: true, jsonLimit: '10mb', formLimit: '10mb' }));
app.use(errorMiddleware); // 正确使用方式，返回中间件函数
app.use(cors());
app.use(logger());

// Routes
app.use(authRoutes.routes()).use(authRoutes.allowedMethods());

// 错误处理（全局错误监听）
app.on('error', (err, ctx) => {
  console.error('Server error:', err);
  ctx.body = { message: err.message };
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});