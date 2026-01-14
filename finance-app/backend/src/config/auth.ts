import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'seu_segredo_super_secreto_aqui';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export const authConfig = {
  secret: JWT_SECRET,
  expiresIn: JWT_EXPIRES_IN,
  algorithm: 'HS256' as jwt.Algorithm
};

// Funções de helper para JWT
export const generateToken = (userId: string, email: string): string => {
  return jwt.sign(
    { userId, email },
    authConfig.secret,
    { expiresIn: authConfig.expiresIn, algorithm: authConfig.algorithm }
  );
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, authConfig.secret);
  } catch (error) {
    return null;
  }
};