export default interface IUser {
  email?: string;
  username?: string;
  telegram?: number;
  role?: string;
  joinDate?: Date;
  password?: {
    hash: string;
    salt: string
  };
  confirmationCode?: {
    value: number;
    until: Date;
    active: boolean;
  };
  activated?: boolean;
  image?: string;

  genCode(): Promise<number>;
  changePassword(pwd: string): Promise<void>;
  comparePassword(pwd: string): boolean;
  changeEmail(email: string): Promise<void>;
  activateCode(code: number): Promise<boolean>;
  createPassword(password: string): [string, string];
  verifyPassword(password: string): boolean;
}