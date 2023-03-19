import { Request, Response } from 'express';
import { IProfileAccessRequest, IProfileAccessResponse } from './profile-access-middleware.js';
// import { Types } from 'mongoose';
// import userModel, { ROLES } from '../../models/user/index.js';
import AuthMechanism from '../../auth-mechanism.js';
import { Types } from 'mongoose';
import userModel, { ROLES } from '../../models/user/index.js';

export default async function profileAccessController(req: Request<{}, {}, IProfileAccessRequest>, res: Response<IProfileAccessResponse>, next: Function) {
  try {
    const data = req.body;
    
    const rawToken: string = req.cookies['auth_token'] ? req.cookies['auth_token'] : req.body.token;
    if (!rawToken) {
      throw new Error('Auth token not provided');
    }

    const token = AuthMechanism.getUserIdFromToken(rawToken);
    
    if (typeof token === 'string') {
      throw new Error('expired');
    }

    const userId: Types.ObjectId = token['userId'];
    console.log(data.userId, userId);

    if (userId !== data.userId) {
      const check = await userModel.findOne({
        _id: userId
      }, {
        role: 1
      });

      if (!check || check.role !== ROLES.ADMIN) {
        throw new Error('access denied');
      }
    }

    next();
  } catch (e) {
    res.statusCode = 401;
    res.json({
      message: e.message
    });
  }
}