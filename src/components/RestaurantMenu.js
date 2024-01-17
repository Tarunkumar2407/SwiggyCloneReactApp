import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { REST_MENU_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId)

  const restInfo = useRestaurantMenu(resId)

  if (restInfo === null) {
    return <h2>Loading...</h2>;
  }

  const { name, cuisines, areaName } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  const restMenuList =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
 console.log(restMenuList)

  return (
    <div style={{ margin: "20px" }}>
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <h2 style={{ marginTop: "20px" }}>Menu</h2>
      <ul style={{ marginLeft: "20px" }}>
      {restMenuList.map((restMenu) => (
          <li key={restMenu?.card?.info?.id}>{restMenu?.card?.info?.name} - Price: {restMenu?.card?.info?.price/100}</li>
      ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
