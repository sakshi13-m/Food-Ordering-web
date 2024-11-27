import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../components/card";

const Pizza = () => {
  const { menuList: list, extras } = useSelector((state) => state.menuReducer);
  const Cutlery = list.filter((item) => item.category === "Pizza");
  return (
    <div>
      {extras && (
        <img
          style={{ width: "95%" }}
          alt="img"
          src={extras["categories"].Pizza.bannerImage}
        />
      )}
      {Cutlery.map((item) => (
        <CardComponent key={item.foodname} item={item} />
      ))}
    </div>
  );
};
export default Pizza;
