import { decrypt } from '../services/cryptoService';
import { PrismaClient } from '@prisma/client';

// 从环境变量读取加密后的密码并解密
const encryptedPassword = process.env.DB_PASSWORD;
const password = decrypt(encryptedPassword, process.env.CRYPTO_KEY);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${process.env.DB_USER}:${password}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    }
  }
});

export default prisma;