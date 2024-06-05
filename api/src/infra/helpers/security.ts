import bcrypt from 'bcrypt';
import jsonWebToken from 'jsonwebtoken';

export function hashPassword(password: string) {
  const SALT = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, SALT);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export function generateToken(payload: {
  user: { id: string; phone: string };
}) {
  return jsonWebToken.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRATION_TIME as string,
  });
}

export function decodeToken(token: string) {
  return jsonWebToken.verify(token, process.env.JWT_SECRET as string);
}
