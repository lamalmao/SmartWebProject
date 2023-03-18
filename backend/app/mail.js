import nodemailer from 'nodemailer';
export default class ApiMailer {
    transport;
    auth;
    constructor(auth) {
        this.auth = auth;
        this.transport = nodemailer.createTransport({
            host: 'smtp.timeweb.ru',
            port: 465,
            auth: {
                user: this.auth.mail,
                pass: this.auth.password
            }
        });
    }
    async sendCode(user, code) {
        if (!user.email) {
            throw new Error('email unknown');
        }
        const message = {
            from: this.auth.mail,
            to: user.email,
            subject: 'Подтверждение регистрации',
            html: `Здравствуйте, <b>${user.username}!</b>\n\nВаш код для подтвеждения регистрации: <b>${code}</b>`
        };
        return this.transport.sendMail(message);
    }
}
