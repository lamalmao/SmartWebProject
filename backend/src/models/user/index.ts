import { Schema, model } from 'mongoose';
import IUser from './user.js'
import crypto from 'crypto';

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user'
}

const TimeShift = 60 * 60 * 1000;
const Range = 9999 - 1000;

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    sparse: true,
    validate: {
      validator: function(username: string) {
        return /^[a-zA-Z0-9\!\@\#\$\%\[\]\=\+\-\)\(\.\<\>\_]{5,15}$/.test(username);
      },
      message: 'Имя пользователя может состоять из букв латинского алфавита, цифр и символов "!@#$%=+-_/\\<>[]", и быть в промежутке от 5 до 15 символов'
    }
  },
  email: {
    type: String,
    sparse: true,
    validate: {
      validator: function(email: string) {
        return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
      },
      message: 'Данная строка не является почтой'
    }
  },
  telegram: {
    type: Number,
    sparse: true
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.USER
  },
  joinDate: {
    type: Date,
    default: new Date()
  },
  password: {
    hash: {
      type: String
    },
    salt: {
      type: String
    }
  },
  confirmationCode: {
    value: {
      type: Number
    },
    until: {
      type: String
    },
    active: {
      type: Boolean
    }
  },
  activated: {
    type: Boolean,
    default: false
  }
}, {
  methods: {
    genCode: async function(): Promise<number> {
      this.confirmationCode = {
        value: crypto.randomInt(Range),
        until: new Date(Date.now() + TimeShift),
        active: true
      }

      await this.save();
      return this.confirmationCode.value;
    },
    changePassword: async function (pwd: string): Promise<void> {
      const newPass = this.createPassword(pwd);

      this.password = {
        salt: newPass[0],
        hash: newPass[1]
      };
      await this.save();
    },
    comparePassword: function (pwd: string): boolean {
      if (!this.password) return false;

      return crypto.pbkdf2Sync(pwd, this.password.salt, 1000, 128, 'sha512').toString('hex') === this.password.hash;
    },
    changeEmail: async function (email: string): Promise<void> {
      this.email = email;
      await this.save();
    },
    createPassword: function (password: string): [string, string] {
      const salt = crypto.randomBytes(32).toString('hex');
      const hash = crypto.pbkdf2Sync(password, salt, 1000, 128, 'sha512').toString('hex');

      return [salt, hash];
    },
    verifyPassword: function(password: string): boolean {
      return (password.length > 6 && password.length < 32 && /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\=\+\\\/\[\]\<\>\,\.\`\~\:\;\'\"\?]{6,32}$/.test(password));
    },
    activateCode: async function(value: number): Promise<boolean> {
      if (!this.confirmationCode || !this.confirmationCode.active || this.confirmationCode.value !== value) return false;

      this.confirmationCode.active = false;
      await this.save();
      return true;
    }
  }
});

userSchema.pre('save', async function(next) {
  await this.validate();
  next();
});

const userModel = model('users', userSchema);

export default userModel;

