import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import config from '../config/default';
import { env } from 'process';

function generateToken(payload: Record<string, any>): string {
  const secret: Secret = env.JWT_SECRET || config.jwt.secret; // 使用默认值
  const expiresIn: any = env.JWT_EXPIRES_IN || '1h'; // 使用默认值

  const options: SignOptions = {
    expiresIn,
  };

  return jwt.sign(payload, secret, options);
}

function verifyToken(token: string): string | jwt.JwtPayload {
  const secret: Secret = env.JWT_SECRET || config.jwt.secret;

  return jwt.verify(token, secret);
}

export { generateToken, verifyToken };