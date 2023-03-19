import { Schema, SchemaTypes, Types, model } from 'mongoose';
import { IGame, IQuest } from './game.d.js'
import userModel from '../user/index.js';
import { FeatureCollection } from './geojson.js';

const QuestSchema = new Schema<IQuest>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['guesser', 'point', 'crossword']
  },
  geoObjects: {
    type: FeatureCollection,
    required: true
  }
});

const GameSchema = new Schema<IGame>({
  title: {
    type: String,
    required: true
  },
  creator: {
    type: SchemaTypes.ObjectId,
    required: true,
    validate: {
      validator: async function (userId: Types.ObjectId): Promise<boolean> {
        const user = await userModel.findOne({
          _id: userId
        }, {
          activated: 1
        });

        return user ? (user.activated ? user.activated : false) : false;
      },
      message: 'Необходима авторизация и активированный аккаунт'
    }
  },
  created: {
    type: Date,
    required: true,
    default: new Date()
  },
  description: {
    type: String,
    required: true
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false
  },
  quests: {
    type: [QuestSchema],
    required: true,
    default: []
  }
});

export const gameModel = model('games', GameSchema);