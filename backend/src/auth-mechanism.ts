import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { Types } from 'mongoose';
import jwt, { JwtPayload } from 'jsonwebtoken';

const tokenFile = 'jwt_token.txt';
const tokenLifeTime = 7 * 24 * 60 * 60 * 1000;
export interface IAuthPayload {
  userId: Types.ObjectId;
}

export default abstract class AuthMechanism {
  private static cypherToken: string;
  public static secure: boolean;
  
  public static loadToken(): void {
    const tokenFilePath = path.join(process.cwd(), tokenFile);

    if (fs.existsSync(tokenFilePath)) {
      AuthMechanism.cypherToken = fs.readFileSync(tokenFilePath).toString();
    } else {
      AuthMechanism.cypherToken = crypto.randomBytes(256).toString('hex');
      fs.writeFileSync(tokenFilePath, AuthMechanism.cypherToken);
    }

    AuthMechanism.secure = process.env['MODE'] === 'PRODUCTION';
    console.log('JWT cypher token loaded\nSecure: ' + AuthMechanism.secure);
  }

  public static createTokenForUser(userId: Types.ObjectId): [string, Date] {
    const token = jwt.sign({
      userId: userId
    }, AuthMechanism.cypherToken, {
      algorithm: 'HS256',
      expiresIn: '7d'
    });

    return [token, new Date(Date.now() + tokenLifeTime)];
  }

  public static getUserIdFromToken(token: string): string | JwtPayload {
    const data = jwt.verify(token, AuthMechanism.cypherToken);
    return data;
  }
}