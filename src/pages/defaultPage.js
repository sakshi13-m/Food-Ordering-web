import { Grid } from "@material-ui/core";
import { Switch, Route } from "react-router";
import Cart from "../components/cart";
import Sidebar from "../components/sidebar";
import Consumables from "./Consumables";
import Decorations from "./Decoration";
import Pizza from "./Pizza";

const DefaultPage = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={7}>
        <Switch>
          <Route path="/consumables" component={Consumables} />
          <Route path="/decorations" component={Decorations} />
          <Route path="/pizza" component={Pizza} />
        </Switch>
      </Grid>
      <Grid item xs={3}>
        <Cart />
      </Grid>
    </Grid>
  );
};
export default DefaultPage;
