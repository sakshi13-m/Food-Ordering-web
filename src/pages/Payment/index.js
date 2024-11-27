import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Cart from "../../components/cart";
import PaymentMode from "./PaymentMode";
import UserDetails from "./UserDetails";

const Payment = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Order Summary</Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid container direction="column" item xs={8}>
          <Grid item>
            <h4 style={{ float: "left", margin: "10px" }}>Event Details</h4>
            <div style={{ padding: "10px" }}>
              <UserDetails />
            </div>
          </Grid>
          <Grid item>
            <h4 style={{ float: "left", margin: "10px" }}>Cart Summary</h4>
            <br />
            <Cart />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <PaymentMode />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Payment;
