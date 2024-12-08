import {
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  makeStyles,
  Button,
  Input,
} from "@material-ui/core";
import React, { useState } from "react";
import bookingAction from "../../sdk/action/payment";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  box: {
    padding: "25px",
    margin: "20px 0px",
    height: "500px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
}));

const PaymentMode = () => {
  const Styles = useStyles();
  const dispatch = useDispatch();
  const modes = useSelector((state) => state.menuReducer.paymentModes);
  const [value, setValue] = React.useState("cc");
  const history = useHistory();
  const [formdetails, setFormDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const handleFormData = (e, key) => {
    const dta = e.target.value;

    setFormDetails({
      ...formdetails,
      [key]: dta,
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(bookingAction.setPaymentInfo({ mode: event.target.value }));
  };

  const handleSubmit = () => {
    history.push("/");
    alert("Order SuccessFully Placed!!");
    setFormDetails({
      number: "",
      expiry: "",
      cvv: "",
      name: "",
    });
    dispatch(bookingAction.setCartSummary([]));
  };

  return (
    <div style={{ height: "200px" }}>
      <h4 style={{ float: "left", margin: "10px" }}>Select Payment Method</h4>
      <br />
      <Paper elevation={1} className={Styles.box}>
        <RadioGroup value={value} onChange={handleChange}>
          {modes &&
            modes.map((item) => (
              <FormControlLabel
                key={item.value}
                value={item.value}
                label={item.label}
                control={<Radio />}
              />
            ))}
        </RadioGroup>
        <form>
          <label>
            Name:{" "}
            <Input
              value={formdetails["name"]}
              onChange={(e) => handleFormData(e, "name")}
            />
          </label>
          <br />
          <label>
            Card Number:{" "}
            <Input
              placeholder="Card number"
              value={formdetails["number"]}
              onChange={(e) => handleFormData(e, "number")}
            />
          </label>
          <br />
          <label>
            Expire Date:{" "}
            <Input
              value={formdetails["expiry"]}
              onChange={(e) => handleFormData(e, "expiry")}
            />
          </label>
          <br />
          <label>
            CVV:{" "}
            <Input
              value={formdetails["cvv"]}
              onChange={(e) => handleFormData(e, "cvv")}
            />
          </label>
        </form>
        <Button variant="contained" onClick={handleSubmit}>
          Make Payment{" "}
        </Button>
      </Paper>
    </div>
  );
};
export default PaymentMode;
