import { Types } from 'mongoose';

export interface IAuthCheckRequest {
  userId: Types.ObjectId;
}

export interface IAuthCheckResponse {
  message?: string;
}