import { Types } from 'mongoose';
import { IGame } from '../../../models/game/game.d.js';

export interface IGameCreateRequest {
  data: IGame;
}

export interface IGameCreateResponse {
  success: boolean;
  gameId?: Types.ObjectId;
  message?: string;
}