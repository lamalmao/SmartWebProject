export interface IAuthRequest {
  login: string;
  password: string;
}

export interface IAuthResponse {
  success: boolean;
  message?: string;
}