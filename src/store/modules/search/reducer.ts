import produce from 'immer';

import { SearchState, Types } from './types';
import { ReducerAction } from '../types';
import { convertToOptions } from 'utils';

export const INITIAL_STATE: SearchState = {
  type: 1,
  makes: [],
  models: [],
  versions: [],
  years: [
    { id: 2020, text: '2020' },
    { id: 2019, text: '2019' },
    { id: 2018, text: '2018' },
    { id: 2017, text: '2017' },
  ],
  prices: [
    { id: 100000, text: 'R$ 100.000' },
    { id: 75000, text: 'R$ 75.000' },
    { id: 50000, text: 'R$ 50.000' },
    { id: 25000, text: 'R$ 25.000' },
  ],
  loading: false,
};

export default function search(state = INITIAL_STATE, action: ReducerAction): SearchState {
  return produce(state, draft => {
    switch (action.type) {
      case Types.MAKES_REQUEST_SUCCESS: {
        draft.makes = convertToOptions(action.payload, 'ID', 'Name');
        break;
      }
      case Types.MODELS_REQUEST_SUCCESS: {
        draft.models = convertToOptions(action.payload, 'ID', 'Name');
        break;
      }
      case Types.VERSIONS_REQUEST_SUCCESS: {
        draft.versions = convertToOptions(action.payload, 'ID', 'Name');
        break;
      }
      case Types.SET_TYPE_SEARCH: {
        draft.type = action.payload;
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
