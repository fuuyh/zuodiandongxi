const User = require('../models/User');

// 获取所有用户
async function findAllUsers() {
  return User.findMany();
}
// 获取单个用户
async function findUserById(id) {
  return User.findUnique({ where: { id } });
}
// 删除用户
async function deleteUser(id) {
  return User.delete({ where: { id } });
}
// 更新用户
async function updateUser(id, data) {
  return User.update({ where: { id }, data });
}


module.exports = { findAllUsers,findUserById,deleteUser,updateUser };