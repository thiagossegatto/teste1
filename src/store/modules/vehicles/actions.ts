import { Types } from './types';
import store from 'store';

export function requestVehicles() {
  return {
    type: Types.VEHICLES_REQUEST,
  };
}
export function requestVehiclesSuccess(data: object) {
  return {
    type: Types.VEHICLES_REQUEST_SUCCESS,
    payload: data,
  };
}
export function requestVehiclesFailed() {
  return {
    type: Types.VEHICLES_REQUEST_FAILED,
  };
}

export function setLoading(status: boolean) {
  store.dispatch({
    type: Types.SET_LOADING,
    payload: status,
  });
}
