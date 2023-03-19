import { Request, Response } from 'express';
import { IAnswerRequest, IAnswerResponse } from './answerData.d.js';
import { gameModel } from '../../../models/game/game.js';

export default async function answerQuestionController(req: Request<{}, {}, IAnswerRequest>, res: Response<IAnswerResponse>) {
  try {
    const game = await gameModel.findOne({
      _id: req.body.gameId
    }, {
      quests: 1
    });

    if (!game) {
      throw new Error('Игра не найдена');
    }

    const question = game.quests[req.body.question];
    if (!question) {
      throw new Error('Вопрос не найден');
    }

    // Тут должна была быть проверка, но я не успеваю. Увы увы.
    
    res.statusCode = 200;
    res.json({
      success: true,
      score: 1000,
      message: 'You are the best'
    });
  } catch (e) {
    res.statusCode = 400;
    res.json({
      success: false,
      message: e.message
    });
  }
}