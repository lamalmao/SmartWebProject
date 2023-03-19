import { Types } from 'mongoose';
import { IFeatureCollection } from './geojson.d.js';

export interface IGame {
  title: string;
  creator?: Types.ObjectId;
  created?: Date;
  description: string;
  hidden: boolean;
  quests: Array<IQuest>;
}

export interface IQuest {
  title: string;
  description: string;
  type: string;
  geoObjects: IFeatureCollection;
}