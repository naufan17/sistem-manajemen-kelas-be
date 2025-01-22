import jwt, { JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken';

export const generateToken = (payload: JwtPayload) => {
  const secretToken: string = process.env.JWT_SECRET_KEY || '';
  const expiredToken: string = process.env.JWT_EXPIRED_IN || '1h';
  const options: SignOptions = {
    expiresIn: expiredToken,
  }

  return jwt.sign(payload, secretToken, options);
}; 

export const verifyToken = (token: string) => {
  const secretToken: string = process.env.JWT_SECRET_KEY || '';
  const options: VerifyOptions = {
    ignoreExpiration: false,
  
  }
  return jwt.verify(token, secretToken, options);
};