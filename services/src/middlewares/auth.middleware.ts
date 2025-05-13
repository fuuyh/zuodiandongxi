const jwt = require('jsonwebtoken');
const config = require('../config/default');

function authenticate() {
  return async (ctx, next) => {
    const token = ctx.headers['authorization']?.split(' ')[1];
    if (!token) {
      ctx.status = 401;
      ctx.body = { error: 'No token provided' };
      return;
    }

    try {
      const decoded = jwt.verify(token, config.jwt.secret);
      ctx.state.user = decoded;
      await next();
    } catch (error) {
      ctx.status = 401;
      ctx.body = { error: 'Invalid token' };
    }
  };
}

module.exports = authenticate;