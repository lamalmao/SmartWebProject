import { Request, Response } from 'express';
import { IAuthCheckRequest, IAuthCheckResponse } from './authCheckData.js';
import AuthMechanism from '../../auth-mechanism.js';

export default async function authCheckController(req: Request<{}, {}, IAuthCheckRequest>, res: Response<IAuthCheckResponse>, next: Function) {
  try {
    const token: string = req.cookies['auth_token'] ? req.cookies['auth_token'] : req.body.userId;

    if (!token) {
      throw new Error('не авторизован');
    }

    const check = AuthMechanism.getUserIdFromToken(token);

    if (typeof check === 'string') {
      throw new Error('неверный токен');
    }

    next();
  } catch (e) {
    res.statusCode = 401;
    res.json({
      message: e.message
    });
  }
}