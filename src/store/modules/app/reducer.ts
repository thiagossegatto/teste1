import produce from 'immer';

import { AppState, Types } from './types';
import { ReducerAction } from '../types';

export const INITIAL_STATE: AppState = {
  loading: false,
};

export default function app(state = INITIAL_STATE, action: ReducerAction): AppState {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_LOADING: {
        draft.loading = action.payload;
        break;
      }
      default:
    }
  });
}
