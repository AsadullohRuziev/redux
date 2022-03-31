import { ActionType } from "../contants/action-type";

const initialState = {
  product: []
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return {...state, product : payload}; //qancha malumot kelishini bilmaganligimiz uchun spreed operatoridan fodalanamiz
    default:
      return state;
  }
};


export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return {...state, ...payload}; //qancha malumot kelishini bilmaganligimiz uchun spreed operatoridan fodalanamiz
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {}
      default:
      return state;
  }
}