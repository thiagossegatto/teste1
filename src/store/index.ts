import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { AppState } from './modules/app/types';
import { SearchState } from './modules/search/types';
import { VehiclesState } from './modules/vehicles/types';

export interface ApplicationState {
  app: AppState;
  search: SearchState;
  vehicles: VehiclesState;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
