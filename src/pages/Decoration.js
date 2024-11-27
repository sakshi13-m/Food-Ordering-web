import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../components/card";

const Decorations = () => {
  const { menuList: list, extras } = useSelector((state) => state.menuReducer);
  const Cutlery = list.filter((item) => item.category === "Decorations");
  return (
    <div>
      <h2> Decorations page </h2>
      {extras && (
        <img
          style={{ width: "100%" }}
          alt="img"
          src={extras["categories"].Decorations.bannerImage}
        />
      )}
      {Cutlery.map((item) => (
        <CardComponent key={item.foodname} item={item} />
      ))}
    </div>
  );
};
export default Decorations;
