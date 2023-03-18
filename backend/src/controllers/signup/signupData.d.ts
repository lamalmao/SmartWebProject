import { Types } from "mongoose";

export interface ISignupRequest {
  username: string;
  verificationMethod: string;
  password: string;
  email?: string;
}

export interface ISignupResponse {
  success: boolean;
  verificationLink?: string;
  userId?: Types.ObjectId;
  error?: string;
}