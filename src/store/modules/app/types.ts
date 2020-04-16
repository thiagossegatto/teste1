export enum Types {
  SET_LOADING = '@app/SET_LOADING',
  SET_REF = '@app/SET_REF',
}

export interface AppState {
  loading: boolean;
}
