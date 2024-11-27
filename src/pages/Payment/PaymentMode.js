import {
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  makeStyles,
  Button
} from "@material-ui/core";
import React from "react";
import bookingAction from "../../sdk/action/payment";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  box: {
    padding: "25px",
    margin: "20px 0px",
    height: "500px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column"
  }
}));

const PaymentMode = () => {
  const Styles = useStyles();
  const dispatch = useDispatch();
  const modes = useSelector((state) => state.menuReducer.paymentModes);
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(bookingAction.setPaymentInfo({ mode: event.target.value }));
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
        <Button variant="contained">Make Payment </Button>
      </Paper>
    </div>
  );
};
export default PaymentMode;
