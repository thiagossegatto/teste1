import { Types } from './types';
import store from 'store';

export function setLoading(status: boolean) {
  store.dispatch({
    type: Types.SET_LOADING,
    payload: status,
  });
}
