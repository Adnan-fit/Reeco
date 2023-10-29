import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_ORDERS_REQUEST,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from './orderAction';

function* fetchOrders() {
  try {
    const response = yield call(axios.get, 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
    yield put(fetchOrdersSuccess(response.data));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}

export function* watchFetchOrders() {
  yield takeLatest(FETCH_ORDERS_REQUEST, fetchOrders);
}
