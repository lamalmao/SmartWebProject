import logger from '../../logger.js';
import userModel from '../../models/user/index.js';
import AuthMechanism from '../../auth-mechanism.js';
export default async function authController(req, res) {
    try {
        const data = req.body;
        const user = await userModel.findOne({
            username: data.login
        }, {
            password: 1,
            activated: 1
        });
        if (!user) {
            throw new Error('Логин или пароль неверен');
        }
        if (!user.activated) {
            throw new Error('Аккаунт не активирован');
        }
        if (!user.comparePassword(data.password)) {
            throw new Error('Логин или пароль неверен');
        }
        const token = AuthMechanism.createTokenForUser(user._id);
        res.cookie('auth_token', token[0], {
            expires: token[1],
            secure: true
        });
        res.json({
            success: true
        });
    }
    catch (e) {
        logger.error(e.message);
        res.statusCode = 401;
        res.json({
            success: false,
            message: e.message
        });
    }
}
