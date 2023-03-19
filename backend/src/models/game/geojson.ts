import { Schema } from 'mongoose';
import { IFeature, IFeatureCollection } from './geojson.d.js';

export const Feature = new Schema<IFeature>({
  type: {
    type: String,
    required: true,
    enum: ['Feature'],
    default: 'Feature'
  },
  properties: {
    type: Object,
    required: true,
    default: {}
  },
  geometry: {
    type: {
      coordinates: {
        type: [[Number, Number]],
        required: true
      },
      type: {
        type: String,
        required: true,
        enum: ['Point', 'LineString', 'Polygon'],
      }
    }
  },
  id: {
    type: Number,
    required: true
  }
});

export const FeatureCollection = new Schema<IFeatureCollection>({
  type: {
    type: String,
    required: true,
    enum: ['FeatureCollection'],
    default: 'FeatureCollection'
  },
  features: {
    type: [Feature],
    required: true,
    default: []
  }
});