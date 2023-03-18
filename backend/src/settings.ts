import fs from 'fs';
import path from 'path';
import { IMailAuthData } from './mail.js';

interface ISettings {
  mailer: IMailAuthData;
  bot: {
    apiKey: string;
    name: string;
  };
  db: string;
}

const settings: ISettings = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'settings.json')).toString());

export default settings;