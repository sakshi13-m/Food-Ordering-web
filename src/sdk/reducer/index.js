import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import menuReducer from "./menuReducer";
import bookingReducer from "./bookingReducer";
import history from "../history";

const rootReducer = combineReducers({
  menuReducer,
  bookingReducer,
  router: connectRouter(history)
});

export default rootReducer;
