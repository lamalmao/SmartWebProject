import { Types } from "mongoose";

export interface IVerifyDataRequest {
  userId: Types.ObjectId;
  code: number;
  activate?: boolean;
}

export interface IVerifyDataResponse {
  success: boolean;
  message?: string;
}