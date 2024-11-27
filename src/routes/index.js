import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../pages";
import DefaultPage from "../pages/defaultPage";
import Payment from "../pages/Payment";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/payment" exact component={Payment} />
      <Route path="/" component={DefaultPage} />
    </Switch>
  );
};
export default Routes;
