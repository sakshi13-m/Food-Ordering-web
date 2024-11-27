import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../components/card";

const Consumables = () => {
  const { menuList: list, extras } = useSelector((state) => state.menuReducer);
  const Cutlery = list.filter((item) => item.category === "Consumables");
  return (
    <div>
      <h2> consumables page </h2>
      {extras && (
        <img
          style={{ width: "95%" }}
          alt="img"
          src={extras["categories"].Consumables.bannerImage}
        />
      )}
      {Cutlery.map((item) => (
        <CardComponent key={item.foodname} item={item} />
      ))}
    </div>
  );
};
export default Consumables;
