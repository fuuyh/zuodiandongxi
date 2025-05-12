const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const errorMiddleware = require('./middlewares/error.middleware');
const authRoutes = require('./routes/auth.routes');
// const userRoutes = require('./routes/user.routes');

const app = new Koa();

// Middlewares
app.use(bodyParser());
app.use(errorMiddleware());

// Routes
app.use(authRoutes.routes()).use(authRoutes.allowedMethods());
// app.use(userRoutes.routes());
// 错误处理
app.on('error', (err, ctx) => {
  console.error('Server error:', err);
  ctx.body = { message: err.message };
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});