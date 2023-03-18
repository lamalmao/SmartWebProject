import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const tokenFile = 'jwt_token.txt';
const tokenLifeTime = 7 * 24 * 60 * 60 * 1000;
export default class AuthMechanism {
    static cypherToken;
    static secure;
    static loadToken() {
        const tokenFilePath = path.join(process.cwd(), tokenFile);
        if (fs.existsSync(tokenFilePath)) {
            AuthMechanism.cypherToken = fs.readFileSync(tokenFilePath).toString();
        }
        else {
            AuthMechanism.cypherToken = crypto.randomBytes(256).toString('hex');
            fs.writeFileSync(tokenFilePath, AuthMechanism.cypherToken);
        }
        AuthMechanism.secure = process.env['MODE'] === 'PRODUCTION';
        console.log('JWT cypher token loaded\nSecure: ' + AuthMechanism.secure);
    }
    static createTokenForUser(userId) {
        const token = jwt.sign({
            userId: userId
        }, AuthMechanism.cypherToken, {
            algorithm: 'HS256',
            expiresIn: '7d'
        });
        return [token, new Date(Date.now() + tokenLifeTime)];
    }
    static getUserIdFromToken(token) {
        const data = jwt.verify(token, AuthMechanism.cypherToken);
        return data;
    }
}
