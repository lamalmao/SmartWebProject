// import { Types } from 'mongoose';
// import userModel, { ROLES } from '../../models/user/index.js';
import AuthMechanism from '../../auth-mechanism.js';
import userModel, { ROLES } from '../../models/user/index.js';
export default async function profileAccessController(req, res, next) {
    try {
        const data = req.body;
        const rawToken = req.cookies['auth_token'];
        if (!rawToken) {
            throw new Error('Auth token not provided');
        }
        const token = AuthMechanism.getUserIdFromToken(rawToken);
        if (typeof token === 'string') {
            throw new Error('expired');
        }
        const userId = token['userId'];
        console.log(data.userId, userId);
        if (userId !== data.userId) {
            const check = await userModel.findOne({
                _id: userId
            }, {
                role: 1
            });
            if (!check || check.role !== ROLES.ADMIN) {
                throw new Error('access denied');
            }
        }
        next();
    }
    catch (e) {
        res.statusCode = 401;
        res.json({
            message: e.message
        });
    }
}
