export interface IFeatureCollection {
  type: string; // Always 'FeatureCollection'
  features: Array<IFeature>
}

export interface IFeature {
  type: string; // Always 'Feature'
  properties: Object;
  geometry: {
    coordinates: Array<[number, number]>;
    type: string;
    id: number
  };
}