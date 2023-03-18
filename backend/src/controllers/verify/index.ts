import { Request, Response } from 'express';
import { IVerifyDataRequest, IVerifyDataResponse } from './verifyData.js';
import userModel from '../../models/user/index.js';
import logger from '../../logger.js';
import AuthMechanism from '../../auth-mechanism.js';

export default async function verifyCodeController(req: Request<{}, {}, IVerifyDataRequest>, res: Response<IVerifyDataResponse>) {
  try {
    const data: IVerifyDataRequest = req.body;

    const user = await userModel.findOne({
      _id: data.userId
    }, {
      confirmationCode: 1,
      activated: 1
    });

    if (!user) {
      throw new Error('Пользователь не найден');
    }

    const result = await user.activateCode(data.code);
    if (data.activate) {
      if (user.activated) {
        throw new Error('Аккаунт уже активирован');
      }

      if (result) {
        user.activated = true;
        await user.save();

        const token = AuthMechanism.createTokenForUser(user._id);
        res.cookie('auth_token', token[0], {
          expires: token[1],
          secure: AuthMechanism.secure
        });
      }
    }

    res.statusCode = 200;
    res.send({
      success: result,
      message: result ? undefined : 'Код неверен или уже использован'
    })
  } catch (e) {
    logger.error(e.message);
    res.statusCode = 401;
    res.json({
      success: false,
      message: e.message
    })
  }
}