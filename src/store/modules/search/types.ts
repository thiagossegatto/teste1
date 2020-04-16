import { OptionsProps } from '../types';

export enum Types {
  MAKES_REQUEST = '@search/MAKES_REQUEST',
  MAKES_REQUEST_SUCCESS = '@search/MAKES_REQUEST_SUCCESS',
  MODELS_REQUEST = '@search/MODELS_REQUEST',
  MODELS_REQUEST_SUCCESS = '@search/MODELS_REQUEST_SUCCESS',
  VERSIONS_REQUEST = '@search/VERSIONS_REQUEST',
  VERSIONS_REQUEST_SUCCESS = '@search/VERSIONS_REQUEST_SUCCESS',
  SET_TYPE_SEARCH = '@search/SET_TYPE_SEARCH',
  SET_LOADING = '@search/SET_LOADING',
}

export interface SearchState {
  type: number;
  makes: OptionsProps[];
  models: OptionsProps[];
  versions: OptionsProps[];
  years: OptionsProps[];
  prices: OptionsProps[];
  loading: boolean;
}

export interface Search {
  new: boolean;
  used: boolean;
  where?: string | null;
  arouund?: number | null;
  make?: number | null;
  model?: number | null;
  year?: {
    from: number | null;
    to: number | null;
  };
  price?: {
    from: number | null;
    to: number | null;
  };
  version?: number | null;
}

export interface Make {
  ID: number;
  Name: string;
}

export interface Model {
  MakeID: number;
  ID: number;
  Name: string;
}

export interface Version {
  ModelID: number;
  ID: number;
  Name: string;
}
