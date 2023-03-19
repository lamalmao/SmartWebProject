export interface IFeatureCollection {
  type: string; // Always 'FeatureCollection'
  features: Array<IFeature>
}

export interface IFeature {
  type: string; // Always 'Feature'
  properties: Object;
  geometry: {
    coordinates: Array<any>;
    type: string;
  };
  id: number
}