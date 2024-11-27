import ACTION_TYPES from "../types";

const setUserDetails = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_USER_DETAILS,
    payload: data
  });
};

const setCartSummary = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_CART,
    payload: data
  });
};

const setPaymentInfo = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_PAYMENT_INFO,
    payload: data
  });
};

export default {
  setUserDetails,
  setPaymentInfo,
  setCartSummary
};
