import { Types } from './types';
import store from 'store';

export function requestMakes() {
  return {
    type: Types.MAKES_REQUEST,
  };
}
export function requestMakesSuccess(data: object) {
  return {
    type: Types.MAKES_REQUEST_SUCCESS,
    payload: data,
  };
}

export function requestModels(id: number) {
  return {
    type: Types.MODELS_REQUEST,
    payload: id,
  };
}
export function requestModelsSuccess(data: object) {
  return {
    type: Types.MODELS_REQUEST_SUCCESS,
    payload: data,
  };
}

export function requestVersions(id: number) {
  return {
    type: Types.VERSIONS_REQUEST,
    payload: id,
  };
}
export function requestVersionsSuccess(data: object) {
  return {
    type: Types.VERSIONS_REQUEST_SUCCESS,
    payload: data,
  };
}

export function setTypeSearch(type: number) {
  return {
    type: Types.SET_TYPE_SEARCH,
    payload: type,
  };
}

export function setLoading(status: boolean) {
  store.dispatch({
    type: Types.SET_LOADING,
    payload: status,
  });
}
