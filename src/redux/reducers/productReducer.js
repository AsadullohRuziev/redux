import { ActionType } from "../contants/action-type";

const initialState = {
  product: [
      {
          id : 1,
          title : "Asadulloh",
          category : "Frontend developer"
      }
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
