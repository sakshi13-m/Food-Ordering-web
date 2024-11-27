import { Checkbox, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const subMenuList = {};
const SubmenuList = ({ rows, setSub, foodname }) => {
  const [checked, setChecked] = useState({});
  const subMenu = useSelector((state) => state.menuReducer.subMenuList);
  useEffect(() => {
    let check = {};
    rows.map((item) => (check[item] = false));
    setChecked(check);
  }, []);

  useEffect(() => {
    setSub(subMenuList);
  }, [subMenuList]);

  const handleChange = (item) => {
    setChecked({ ...checked, [item]: !checked[item] });
    if (!checked[item]) {
      if (!subMenuList[foodname]) {
        subMenuList[foodname] = [];
      }
      subMenuList[foodname].push(item);
    } else {
      subMenuList[foodname] = subMenuList[foodname].filter((i) => i !== item);
    }
  };
  return (
    <Grid container>
      {rows.map((item) => (
        <Grid container key={item}>
          <Grid item xs={1}>
            <Checkbox
              checked={checked[item]}
              onChange={() => handleChange(item)}
            />
          </Grid>
          <Grid item xs={1}>
            <img
              src={subMenu[item].imageurl}
              style={{ width: "50px" }}
              alt={item}
            />
          </Grid>
          <Grid item xs={8}>
            {item}
          </Grid>
          <Grid item xs={2}>
            {subMenu[item].price}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
export default SubmenuList;
