const bcrypt = require('../utils/bcrypt');
const jwt = require('../utils/jwt');
const User = require('../models/User');
const UUID = require('../utils/genUUID')

// 注册
async function registerUser(username, password) {
  const existingUser = await User.findUnique({ where: { user_name: username } }); // 使用 sys_user 模型 + 字段 user_name
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password);
  return User.create({
    data: { id: UUID, user_name: username, password: hashedPassword, nick_name: '开玩笑' },
  });
}

// 登录
async function loginUser(username, password) {
  const user = await User.findUnique({ where: { user_name: username } }); // 同样使用 user_name 查询
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  return jwt.generateToken({ id: user.id, username: user.user_name });
}

module.exports = { registerUser, loginUser };