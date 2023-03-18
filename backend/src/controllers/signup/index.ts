import { Request, Response } from 'express';
import { ISignupRequest, ISignupResponse } from './signupData.js';
import userModel from '../../models/user/index.js';
import ApiMailer from '../../mail.js';
import settings from '../../settings.js';

const mailer = new ApiMailer(settings.mailer);

export default async function signupController(req: Request<{}, {}, ISignupRequest>, res: Response<ISignupResponse>): Promise<void> {
  try {
    const data = req.body;
    let user = new userModel({
      email: data.email,
      username: data.username,
    });

    const userExists = await userModel.exists({
      username: data.username
    });

    if (userExists) {
      throw new Error(`Пользователь ${data.username} уже существует`);
    }

    if (!user.verifyPassword(data.password)) {
      throw new Error('Пароль не соответствует требованиям');
    }

    let pwd = user.createPassword(data.password);
    user.password = {
      salt: pwd[0],
      hash: pwd[1]
    };

    user.isNew = true;
    await user.save();

    const code = await user.genCode();
    let responseBody: ISignupResponse = {
      success: true,
      userId: user._id
    }

    if (data.verificationMethod === 'mail') {
      await mailer.sendCode(user, code);
    } else {
      responseBody.verificationLink = `https://t.me/${settings.bot.name}?start=${user._id.toString()}`
    }

    res.statusCode = 200;
    res.send(responseBody);
  } catch (e) {
    res.statusCode = 401;
    res.send({
      success: false,
      error: e.message
    });
  }
}