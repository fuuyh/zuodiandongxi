const bcrypt = require('bcryptjs');

async function hash(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

async function compare(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = { hash, compare };