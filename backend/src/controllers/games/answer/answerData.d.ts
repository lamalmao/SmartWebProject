export interface IAnswerRequest {
  gameId: string;
  question: number;
  answer: any;
}

export interface IAnswerResponse {
  success: boolean;
  score?: number;
  message?: string;
}