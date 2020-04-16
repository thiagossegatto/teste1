import { all } from 'redux-saga/effects';

import search from './search/sagas';
import vehicles from './vehicles/sagas';

export default function* rootSaga(): Generator {
  return yield all([search, vehicles]);
}
