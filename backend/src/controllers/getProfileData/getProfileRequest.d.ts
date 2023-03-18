import { Types } from 'mongoose';
import IUser from '../../models/user/user.js';

export interface IProfileGetDataRequest{
  userId: Types.ObjectId
}

export interface IProfileGetDataReponse {
  success: boolean;
  user?: IUser;
  message?: string;
}