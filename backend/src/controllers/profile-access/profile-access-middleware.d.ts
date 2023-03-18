import { Types } from 'mongoose';

export interface IProfileAccessRequest {
  userId: Types.ObjectId;
}

export interface IProfileAccessResponse {
  message?: string;
}