const authService = require('../services/authService');

class AuthController {
  async register(ctx) {
    try {
      const { username, password } = ctx.request.body;
      const user = await authService.registerUser(username, password);
      ctx.status = 201;
      ctx.body = { message: 'User created', user };
    } catch (error) {
      ctx.status = 400;
      ctx.body = { error: error.message };
    }
  }

  async login(ctx) {
    try {
      const { username, password } = ctx.request.body;
      const token = await authService.loginUser(username, password);
      ctx.status = 200;
      ctx.body = { token };
    } catch (error) {
      ctx.status = 401;
      ctx.body = { error: error.message };
    }
  }
}

module.exports = new AuthController();