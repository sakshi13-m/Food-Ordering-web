import ACTION_TYPES from "../types";

const setMenuList = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_MENU_LIST,
    payload: data
  });
};

const setSubMenuList = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_SUBMENU_LIST,
    payload: data
  });
};

const setExtras = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_EXTRAS,
    payload: data
  });
};

const setPaymentModes = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_PAYMENT_MODES,
    payload: data
  });
};

export default {
  setMenuList,
  setSubMenuList,
  setExtras,
  setPaymentModes
};
