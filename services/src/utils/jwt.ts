import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import config from '../config/default';

function generateToken(payload: Record<string, any>): string {
  const secret: Secret = process.env.JWT_SECRET || config.jwt.secret; // 使用默认值
  const expiresIn: any = process.env.JWT_EXPIRES_IN || config.jwt.expiresIn; // 使用默认值

  const options: SignOptions = {
    expiresIn,
  };

  return jwt.sign(payload, secret, options);
}

function verifyToken(token: string): string | jwt.JwtPayload {
  const secret: Secret = process.env.JWT_SECRET || config.jwt.secret;

  return jwt.verify(token, secret);
}

export { generateToken, verifyToken };