import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
  Select,
  Grid,
  TextField
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookingAction from "../sdk/action/payment";
import SubmenuList from "./submenu";

const useStyles = makeStyles(() => ({
  card: {
    margin: "20px",
    display: "flex",
    "& .MuiCardMedia-img": {
      objectFit: "contain",
      width: "auto"
    },
    "& .MuiCardContent-root": {
      width: "100%"
    }
  }
}));
const CardComponent = ({ item }) => {
  const Styles = useStyles();
  const dispatch = useDispatch();
  const [sub, setSub] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [session, setSession] = useState("BREAKFAST");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const cart = useSelector((state) => state.bookingReducer.cartSummary);
  const [note, setNote] = useState("");
  const subMenu = useSelector((state) => state.menuReducer.subMenuList);

  const handleClick = (item) => {
    if (quantity > 0) {
      console.log(sub);
      const items = {
        id: item.foodid,
        name: item.foodname,
        quantity: quantity,
        SubTotal:
          quantity * item.price +
          (sub[item.foodname] ? calculateSubtotal(item) : 0),
        addOn: sub[item.foodname],
        note: note
      };
      dispatch(bookingAction.setCartSummary([...cart, items]));
    } else {
      alert("quantity is missing");
    }
  };

  const calculateSubtotal = (item) => {
    let sum = 0;
    if (sub && sub[item.foodname]) {
      sub[item.foodname].filter((item) => (sum += subMenu[item].price));
    }
    return sum;
  };

  return (
    <Card key={item?.foodid} className={Styles.card}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img src={item?.imageurl} alt="pizza" style={{ height: "140px" }} />
          </Grid>
          <Grid item xs={9} container justifyContent="space-between">
            <Grid item xs={10} style={{ textAlign: "initial" }}>
              <h3 style={{ margin: "0px" }}>{item?.foodname}</h3>
              {item?.fooddescription !== "" && (
                <Typography>{item?.fooddescription}</Typography>
              )}
              {item.submenu && (
                <Button
                  variant="contained"
                  onClick={() => setShowSubmenu(!showSubmenu)}
                >
                  Add-ons
                </Button>
              )}
            </Grid>
            <Grid item xs={2}>
              <Typography style={{ float: "right" }}>${item?.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        {showSubmenu && (
          <SubmenuList
            sub={sub}
            foodname={item.foodname}
            setSub={setSub}
            rows={item.submenu}
          />
        )}
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={3}>
            <TextField
              label="Quantity"
              name="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <Select
              fullWidth
              name="BREAKFAST"
              value={session}
              label="Session"
              onChange={(e) => setSession(e.target.value)}
            >
              {item?.sessionlist.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="SubTotal"
              value={`$${
                quantity * item.price +
                (sub[item.foodname] ? calculateSubtotal(item) : 0)
              }`}
              name="SubTotal"
              disabled
            />
          </Grid>
        </Grid>
        <hr />
        <Grid item xs={12} container justifyContent="space-between">
          <TextField
            value={note}
            label="Note"
            onChange={(e) => setNote(e.target.value)}
          />
          <Button onClick={() => handleClick(item)}>Add </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CardComponent;
