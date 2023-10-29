import {
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
  } from './orderAction';
  
  const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ORDERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: null,
        };
      case FETCH_ORDERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  