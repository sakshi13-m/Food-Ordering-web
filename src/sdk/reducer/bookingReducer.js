import ACTION_TYPES from "../types";

const initialState = {
  userDetails: null,
  cartSummary: [],
  paymentInfo: null
};

const bookingState = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    case ACTION_TYPES.SET_PAYMENT_INFO:
      return {
        ...state,
        paymentInfo: action.payload
      };
    case ACTION_TYPES.SET_CART:
      return {
        ...state,
        cartSummary: action.payload
      };
    default:
      return state;
  }
};

export default bookingState;
