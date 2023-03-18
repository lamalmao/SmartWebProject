import logger from '../../logger.js';
import userModel from '../../models/user/index.js';
export default async function getProfileDataController(req, res) {
    try {
        const data = req.body;
        let user = await userModel.findById(data.userId);
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        user.password = undefined;
        user.confirmationCode = undefined;
        const responseData = {
            success: true,
            user: user
        };
        res.statusCode = 200;
        res.json(responseData);
    }
    catch (e) {
        logger.error(e.message);
        res.statusCode = 400;
        res.json({
            success: false,
            message: e.message
        });
    }
}
;
