import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import orderReducer from './orderReducer';
import { watchFetchOrders } from './orderSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(orderReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchOrders);

export default store;
