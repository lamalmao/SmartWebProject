import express, { Response } from 'express';
import signupController from '../controllers/signup/index.js';
import { ApiError } from './error.js';
import logger from '../logger.js';
import verifyCodeController from '../controllers/verify/index.js';
import authController from '../controllers/auth/auth.js';


const mainRouter = express.Router();

mainRouter.post('/signup', signupController);
mainRouter.post('/verify', verifyCodeController);
mainRouter.post('/auth', authController);
mainRouter.use(function(err: ApiError, _: any, res: Response, next: () => void) {
  if (err) {
    res.statusCode = err.code;
    res.json(err.data);

    if (process.env['MODE'] === 'DEVELOPMENT') {
      console.log(err.data);
    }
    logger.error(err.data);
  }

  next();
});

export default mainRouter;