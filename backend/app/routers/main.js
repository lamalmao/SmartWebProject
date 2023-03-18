import express from 'express';
import signupController from '../controllers/signup/index.js';
import logger from '../logger.js';
import verifyCodeController from '../controllers/verify/index.js';
import authController from '../controllers/auth/index.js';
import profileRouter from './profile.js';
const mainRouter = express.Router();
mainRouter.post('/signup', signupController);
mainRouter.post('/verify', verifyCodeController);
mainRouter.post('/auth', authController);
mainRouter.use('/profile', profileRouter);
mainRouter.use(function (err, _, res, next) {
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
