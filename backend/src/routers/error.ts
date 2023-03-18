export const Actions = {
  SIGNUP_INIT: 'signup init',
  SIGNUP_VERIFICATION: 'signup verification'
}

export interface IApiError {
  message: string;
  action: string;
}

export class ApiError extends Error implements IApiError {
  message: string;
  action: string;
  code: number;

  public constructor(message: string, action: string, code: number) {
    super();

    this.message = message;
    this.action = action;
    this.code = code;
  }

  public get data() : IApiError {
    return {
      message: this.message,
      action: this.action,
    }
  }
}