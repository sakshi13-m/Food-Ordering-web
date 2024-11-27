import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import bookingAction from "../../sdk/action/payment";

const form = {
  name: "",
  contact_number: "",
  event_name: "",
  location: "",
  event_date: "",
  order_type: "dine"
};

const UserDetails = () => {
  const dispatch = useDispatch();
  const [userDtls, setUserDtls] = useState(form);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserDtls({
      ...userDtls,
      [name]: value
    });
  };
  useEffect(() => {
    if (userDtls) {
      dispatch(bookingAction.setUserDetails(userDtls));
    }
  }, [userDtls]);
  return (
    <Grid direction="column" container spacing={1}>
      <Grid item container spacing={1}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            value={userDtls["name"]}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="contact_number"
            label="Contact Number"
            value={userDtls["contact_number"]}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="event_name"
            label="Event Name"
            value={userDtls["event_name"]}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="location"
            label="Event Location"
            value={userDtls["location"]}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="date"
            name="event_date"
            label="Event Date"
            value={userDtls["event_date"]}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Order Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="order_type"
              label="Order Type"
              value={userDtls["order_type"]}
              onChange={(e) => handleChange(e)}
            >
              <option value="dine">Dine In</option>
              <option value="delivery">Delivery</option>
              <option value="take_away">Take Away</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
