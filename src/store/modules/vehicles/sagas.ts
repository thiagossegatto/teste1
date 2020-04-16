import { takeLatest, all, call, select } from 'redux-saga/effects';
import { Types } from './types';

import { receiveApi, responseApi } from 'services/api';
import { requestVehiclesSuccess, requestVehiclesFailed } from './actions';

function* requestVehicles() {
  const page = yield select(state => state.vehicles.page);
  const response = yield call(receiveApi, `Vehicles?Page=${page}`);
  yield call(responseApi, response, () => requestVehiclesSuccess(response.data), requestVehiclesFailed());
}

export default all([takeLatest(Types.VEHICLES_REQUEST, requestVehicles)]);
