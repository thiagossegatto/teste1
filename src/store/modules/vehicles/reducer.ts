import produce, { original } from 'immer';

import { VehiclesState, Types } from './types';
import { ReducerAction } from '../types';

export const INITIAL_STATE: VehiclesState = {
  list: [],
  loading: false,
  page: 1,
};

export default function vehicles(state = INITIAL_STATE, action: ReducerAction): VehiclesState {
  return produce(state, draft => {
    switch (action.type) {
      case Types.VEHICLES_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.VEHICLES_REQUEST_SUCCESS: {
        let aux: any = original(draft);
        draft.list = [...aux.list, ...action.payload];
        if (action.payload.length > 0 && action.payload.length === 10) {
          draft.page = aux.page + 1;
        } else {
          draft.page = -1;
        }
        draft.loading = false;
        break;
      }
      case Types.VEHICLES_REQUEST_FAILED: {
        draft.loading = false;
        break;
      }
      case Types.SET_LOADING: {
        draft.loading = action.payload;
        break;
      }
      default:
    }
  });
}
