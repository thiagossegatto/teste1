import { takeLatest, all, call } from 'redux-saga/effects';
import { Types } from './types';

import { receiveApi, responseApi } from 'services/api';
import { requestMakesSuccess, requestModelsSuccess, requestVersionsSuccess } from './actions';

function* requestMakes() {
  const response = yield call(receiveApi, 'Make');
  yield call(responseApi, response, () => requestMakesSuccess(response.data));
}

function* requestModels(action: any) {
  const response = yield call(receiveApi, `Model?MakeID=${action.payload}`);
  yield call(responseApi, response, () => requestModelsSuccess(response.data));
}

function* requestVersions(action: any) {
  const response = yield call(receiveApi, `Version?ModelID=${action.payload}`);
  yield call(responseApi, response, () => requestVersionsSuccess(response.data));
}

export default all([
  takeLatest(Types.MAKES_REQUEST, requestMakes),
  takeLatest(Types.MODELS_REQUEST, requestModels),
  takeLatest(Types.VERSIONS_REQUEST, requestVersions),
]);
