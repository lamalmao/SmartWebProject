import { Request, Response } from 'express';
import { IGameCreateRequest, IGameCreateResponse } from './createData.js';
import { IGame } from '../../../models/game/game.d.js';
import { gameModel } from '../../../models/game/game.js';
import logger from '../../../logger.js';

export default async function createGameController(req: Request<{}, {}, IGameCreateRequest>, res: Response<IGameCreateResponse>) {
  try {
    const gameData: IGame = req.body.data;
    if (!gameData) {
      throw new Error('data not provided');
    }

    const newGame = new gameModel(gameData);
    await newGame.validate();
    
    newGame.isNew = true;
    await newGame.save();

    res.statusCode = 200;
    res.json({
      success: true,
      gameId: newGame._id
    });
  } catch (e) {
    logger.error(e.message);
    res.statusCode = 400;
    res.json({
      success: false,
      message: e.message
    });
  }
}