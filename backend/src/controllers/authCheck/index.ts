import { Request, Response } from 'express';
import { IAuthCheckRequest, IAuthCheckResponse } from './authCheckData.js';
import AuthMechanism from '../../auth-mechanism.js';
import { Types } from 'mongoose';
import userModel from '../../models/user/index.js';

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
    const userId: Types.ObjectId = check['userId'];
    const user = await userModel.findOne({
      _id: userId
    }, {
      activated: 1
    });

    if (!user || !user.activated) {
      throw new Error('Нет доступа');
    } 

    res.locals['userId'] = userId;
    next();
  } catch (e) {
    res.statusCode = 401;
    res.json({
      message: e.message
    });
  }
}