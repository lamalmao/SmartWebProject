import express from 'express';
// import signupController from '../controllers/signup/index.js';
// import { ApiError } from './error.js';
// import logger from '../logger.js';
// import verifyCodeController from '../controllers/verify/index.js';
// import authController from '../controllers/auth/index.js';
import getProfileDataController from '../controllers/getProfileData/index.js';
import profileAccessController from '../controllers/profile-access/index.js';


const profileRouter = express.Router();

profileRouter.use(profileAccessController);

profileRouter.post('/get', getProfileDataController);

export default profileRouter;