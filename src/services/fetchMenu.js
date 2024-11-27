// import menuApi from "../api/menuApi";
import store from "../sdk/store";
import menuAction from "../sdk/action";
import { data } from "../data";

const fetchMenu = async () => {
  // const data = await menuApi();
  console.log(data);
  const { menu, paymentMethods, submenu, extras } = data;
  store.dispatch(menuAction.setMenuList(menu));
  store.dispatch(menuAction.setPaymentModes(paymentMethods));
  store.dispatch(menuAction.setSubMenuList(submenu));
  store.dispatch(menuAction.setExtras(extras));
};

export default fetchMenu;
