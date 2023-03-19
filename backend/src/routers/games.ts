import express from 'express';
import authCheckController from '../controllers/authCheck/index.js';
import createGameController from '../controllers/games/create/index.js';
import getGameController from '../controllers/games/play/index.js';

const gamesRouter = express.Router();

gamesRouter.post('/get', getGameController);

gamesRouter.use(authCheckController);
gamesRouter.post('/create', createGameController);

export default gamesRouter;