const userService = require('../services/userService');

class UserController {
  async getAllUsers(ctx) {
    try {
      const users = await userService.findAllUsers();
      ctx.body = users;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }
}

module.exports = new UserController();