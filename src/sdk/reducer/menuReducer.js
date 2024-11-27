import ACTION_TYPES from "../types";

const initialState = {
  menuList: [],
  subMenuList: [],
  paymentModes: null,
  extras: null
};

const menuState = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_MENU_LIST:
      return {
        ...state,
        menuList: action.payload
      };
    case ACTION_TYPES.SET_SUBMENU_LIST:
      return {
        ...state,
        subMenuList: action.payload
      };
    case ACTION_TYPES.SET_PAYMENT_MODES:
      return {
        ...state,
        paymentModes: action.payload
      };
    case ACTION_TYPES.SET_EXTRAS:
      return {
        ...state,
        extras: action.payload
      };
    default:
      return state;
  }
};

export default menuState;
