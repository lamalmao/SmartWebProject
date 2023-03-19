import { Request, Response } from 'express';
import { IGameGetRequest, IGameGetResponse } from './getData.js';
import { IGame } from '../../../models/game/game.d.js';
import { gameModel } from '../../../models/game/game.js';
import { Types } from 'mongoose';
import AuthMechanism from '../../../auth-mechanism.js';
import userModel, { ROLES } from '../../../models/user/index.js';

export default async function getGameController(req: Request<{}, {}, IGameGetRequest>, res: Response<IGameGetResponse>) {
  try {
    const gameId: Types.ObjectId = req.body.gameId;
    const game = await gameModel.findById(gameId);

    if (!game) {
      throw new Error('Квиз не найден');
    }

    if (game.hidden) {
      const token = req.cookies['auth_token'] ? req.cookies['auth_token'] : req.body.token;
      if (!token) {
        throw new Error('Необходима авторизаця');
      }

      const tokenData = AuthMechanism.getUserIdFromToken(token);
      if (typeof tokenData === 'string') {
        throw new Error('нет доступа');
      }

      const userId: Types.ObjectId = tokenData['userId'];
      const user = await userModel.findById(userId, {
        role: 1
      });

      if (!user) {
        throw new Error('пользователь не найден');
      }

      console.log(game.creator, userId);

      if (game.creator !== userId && user.role !== ROLES.ADMIN) {
        throw new Error('игра скрыта');
      }
    }

    let resData: IGame = game.toObject();
    resData.quests.forEach(quest => {
      quest.answer = undefined;
    });

    res.statusCode = 200;
    res.json({
      success: true,
      data: resData
    });
  } catch (e) {
    res.statusCode = 400;
    res.json({
      success: false,
      message: e.message
    });
  }
}