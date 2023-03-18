import nodemailer from 'nodemailer';
import IUser from './models/user/user.js';

export interface IMailAuthData {
  mail: string;
  password: string;
}

export default class ApiMailer {
  private transport: nodemailer.Transporter;
  private auth: IMailAuthData;

  public constructor(auth: IMailAuthData) {
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

  public async sendCode(user: IUser, code: number): Promise<void> {
    if (!user.email) {
      throw new Error('email unknown');
    }

    const message: nodemailer.SendMailOptions = {
      from: this.auth.mail,
      to: user.email,
      subject: 'Подтверждение регистрации',
      html: `Здравствуйте, <b>${user.username}!</b>\n\nВаш код для подтвеждения регистрации: <b>${code}</b>`
    };

    return this.transport.sendMail(message);
  }
}