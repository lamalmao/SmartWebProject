import { Request, Response } from 'express';
import { IProfileGetDataReponse, IProfileGetDataRequest } from './getProfileRequest.js';
import logger from '../../logger.js';
import userModel from '../../models/user/index.js';
import IUser from '../../models/user/user.js';

export default async function getProfileDataController(req: Request<{}, {}, IProfileGetDataRequest>, res: Response<IProfileGetDataReponse>) {
  try {
    const data = req.body;

    let user = await userModel.findById(data.userId);
    if (!user) {
      throw new Error('Пользователь не найден');
    }

    user.password = undefined;
    user.confirmationCode = undefined;

    const responseData: IProfileGetDataReponse = {
      success: true,
      user: user as IUser
    }

    res.statusCode = 200;
    res.json(responseData);
    
  } catch (e) {
    logger.error(e.message);
    res.statusCode = 400;
    res.json({
      success: false,
      message: e.message
    })
  }
};