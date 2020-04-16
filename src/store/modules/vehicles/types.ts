export enum Types {
  VEHICLES_REQUEST = '@vehicle/VEHICLES_REQUEST',
  VEHICLES_REQUEST_SUCCESS = '@vehicle/VEHICLES_REQUEST_SUCCESS',
  VEHICLES_REQUEST_FAILED = '@vehicle/VEHICLES_REQUEST_FAILED',
  SET_LOADING = '@search/SET_LOADING',
}

export interface VehiclesState {
  list: Vehicle[];
  loading: boolean;
  page: number;
}

export interface Vehicle {
  ID: number;
  Make: string;
  Model: string;
  Version: string;
  Image: string;
  KM: number;
  Price: string;
  YearModel: number;
  YearFab: number;
  Color: string;
}
