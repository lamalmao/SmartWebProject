import crypto from 'crypto';
import { Schema, model } from 'mongoose';
const UserPasswordSchema = new Schema({
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
}, {
    methods: {
        setPassword: function (password) {
            if (!this.verify(password)) {
                throw new Error('Пароль не соответсвует требованиям');
            }
            const newPass = this.hashPassword(password);
            this.salt = newPass[0];
            this.hash = newPass[1];
        },
        verify: function (password) {
            return (password.length < 6 || password.length > 32 || !/^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\=\+\\\/\[\]\<\>\,\.\`\~\:\;\'\"\?]{6,32}$/.test(password));
        },
        hashPassword: function (password) {
            const salt = crypto.randomBytes(32).toString('hex');
            const hash = crypto.pbkdf2Sync(password, salt, 1000, 128, 'sha512').toString('hex');
            return [salt, hash];
        },
        compare: function (password) {
            return crypto.pbkdf2Sync(password, this.salt, 1000, 128, 'sha512').toString('hex') === this.hash;
        }
    }
});
const UserPassword = model('password', UserPasswordSchema);
export default UserPassword;
