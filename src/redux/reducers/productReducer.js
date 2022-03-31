import { ActionType } from "../contants/action-type";

const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return {...state, product : payload}; //qancha malumot kelishini bilmaganligimiz uchun spreed operatoridan fodalanamiz
    default:
      return state;
  }
};
