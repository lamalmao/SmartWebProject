import { Types } from 'mongoose';
import { IGame } from '../../../models/game/game.js';

export interface IGameGetRequest {
  gameId: Types.ObjectId;
  token?: string;
}

export interface IGameGetResponse {
  success: boolean;
  data?: IGame
  message?: string;
}