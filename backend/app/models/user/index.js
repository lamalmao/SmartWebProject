import { Schema, model } from 'mongoose';
import UserPassword from './password.js';
import ConfirmationCode from './confirmation.js';
export const ROLES = {
    ADMIN: 'admin',
    USER: 'user'
};
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (username) {
                return /^[a-zA-Z0-9\!\@\#\$\%\[\]\=\+\-\)\(\.\<\>\_]{5,15}$/.test(username);
            },
            message: 'Имя пользователя может состоять из букв латинского алфавита, цифр и символов "!@#$%=+-_/\\<>[]", и быть в промежутке от 5 до 15 символов'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
            },
            message: 'Данная строка не является почтой'
        }
    },
    telegram: {
        type: Number,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(ROLES),
        default: ROLES.USER
    },
    registerFinished: {
        type: Boolean,
        required: true,
        default: false
    },
    joinDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    password: {
        type: UserPassword,
        required: true
    },
    confirmationCode: {
        type: ConfirmationCode
    },
}, {
    methods: {
        genCode: async function () {
            const code = new ConfirmationCode();
            this.confirmationCode = code;
            await this.save();
            return code;
        },
        changePassword: async function (pwd) {
            this.password = new UserPassword(pwd);
            await this.save();
        },
        comparePassword: function (pwd) {
            if (!this.password)
                return false;
            return this.password.compare(pwd);
        },
        changeEmail: async function (email) {
            this.email = email;
            await this.save();
        }
    }
});
userSchema.pre('save', async function (next) {
    await this.validate();
    next();
});
const userModel = model('users', userSchema);
export default userModel;
