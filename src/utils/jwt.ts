/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken';

export const generateToken = (payload: JwtPayload): { accessToken: string; expiresIn: number | undefined; tokenType: string } => {
  const secretToken: string = process.env.JWT_SECRET_KEY || '';
  const expiredToken: string = process.env.JWT_EXPIRED_IN || '1h';
  const options: SignOptions = {
    expiresIn: expiredToken,
  }

  const token = jwt.sign(payload, secretToken, options);
  const decoded = jwt.decode(token) as JwtPayload;

  return {
    accessToken: token,
    expiresIn: decoded.exp && decoded.iat ? decoded.exp - decoded.iat : undefined,
    tokenType: 'Bearer'
  };
};

export const verifyToken = (token: string): any => {
  const secretToken: string = process.env.JWT_SECRET_KEY || '';
  const options: VerifyOptions = {
    ignoreExpiration: false,
  
  }
  return jwt.verify(token, secretToken, options);
};