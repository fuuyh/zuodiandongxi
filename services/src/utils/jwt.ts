import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import config from '../config/default';

function generateToken(payload: Record<string, any>): string {
  const secret: Secret = config.jwt.secret;
  const expiresIn:any = config.jwt.expiresIn; // 显式声明类型

  const options: SignOptions = {
    expiresIn,
  };

  return jwt.sign(payload, secret, options);
}

function verifyToken(token: string): string | jwt.JwtPayload {
  const secret: Secret = config.jwt.secret;

  return jwt.verify(token, secret);
}

export { generateToken, verifyToken };