import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  IconButton
} from "@material-ui/core";
import { DeleteIcon } from "@avocadoui/icons/dist";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import AlertDialog from "./DeleteDialog";

const Cart = () => {
  const history = useHistory();
  const cartDetails = useSelector((state) => state.bookingReducer.cartSummary);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const sum = cartDetails
      .map((item) => item.SubTotal)
      .reduce((prev, curr) => prev + curr, 0);
    setTotal(sum);
  }, [cartDetails]);

  const handleClick = () => {
    history.push("/payment");
  };

  const handleDeleteItem = (item) => {
    console.log(item);
  };

  return (
    <Box marginTop={4}>
      <Card>
        <CardHeader
          title="Cart Summary"
          action={
            <>
              <IconButton onClick={() => setOpen(true)}>
                <DeleteIcon />
              </IconButton>
              <AlertDialog open={open} setOpen={setOpen} />
            </>
          }
        />
        <CardContent>
          <Grid container direction="column" spacing={1}>
            <Grid item container spacing={2}>
              <Grid item xs={7}>
                item
              </Grid>
              <Grid item xs={2}>
                Qty
              </Grid>
              <Grid item xs={2}>
                Sub Total
              </Grid>
            </Grid>
            {cartDetails.map((item) => {
              return (
                <Grid item container key={item.name} spacing={2}>
                  <Grid item xs={7}>
                    {item.name}
                    {item.addOn && (
                      <Box>
                        choose Toppings
                        <ul>
                          {item.addOn.map((item) => {
                            return <li> {item} </li>;
                          })}
                        </ul>
                      </Box>
                    )}
                    {item.note.length > 0 && (
                      <Box>
                        Note: <br />
                        {item.note}
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={2}>
                    {item.quantity}
                  </Grid>
                  <Grid item xs={2}>
                    {item.SubTotal}
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton
                      onClick={() => handleDeleteItem(item)}
                      style={{ height: "15px", padding: "0px" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <CardActions style={{ justifyContent: "space-around" }}>
          <Typography variant="body1">Total Amount {total}</Typography>
          <Button onClick={() => handleClick()}>Proceed</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default Cart;
