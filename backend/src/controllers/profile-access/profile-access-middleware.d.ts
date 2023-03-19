import { Types } from 'mongoose';

export interface IProfileAccessRequest {
  userId: Types.ObjectId;
  token?: string;
}

export interface IProfileAccessResponse {
  message?: string;
}