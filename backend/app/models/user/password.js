import crypto from 'crypto';
export default class UserPassword {
    hash;
    salt;
    static verify(password) {
        return (password.length < 6 || password.length > 32 || !/^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\=\+\\\/\[\]\<\>\,\.\`\~\:\;\'\"\?]{6,32}$/.test(password));
    }
    constructor(password) {
        if (!UserPassword.verify(password)) {
            throw new Error('Пароль не соотвествует требованиям');
        }
        this.salt = crypto.randomBytes(32).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 128, 'sha512').toString('hex');
    }
    compare(password) {
        return crypto.pbkdf2Sync(password, this.salt, 1000, 128, 'sha512').toString('hex') === this.hash;
    }
}
