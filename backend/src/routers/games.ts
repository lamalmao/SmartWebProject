import express from 'express';
import authCheckController from '../controllers/authCheck/index.js';
import createGameController from '../controllers/games/create/index.js';

const gamesRouter = express.Router();

gamesRouter.use(authCheckController);
gamesRouter.post('/create', createGameController);

export default gamesRouter;