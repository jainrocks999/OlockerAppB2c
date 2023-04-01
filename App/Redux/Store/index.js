import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from '../Reducers/Reducers';
import authSaga from '../saga/Auth';
const SagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(SagaMiddleware));
SagaMiddleware.run(authSaga);
export default store;
