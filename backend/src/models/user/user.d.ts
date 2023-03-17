import ConfirmationCode from './confirmation.js';
import UserPassword from './password.js';

export default interface IUser {
  email?: string;
  username?: string;
  telegram?: number;
  role?: string;
  registerFinished?: boolean;
  joinDate?: Date;
  password?: UserPassword;
  confirmationCode?: ConfirmationCode;
}