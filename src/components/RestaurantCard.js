import React from "react";
import { imageUrl } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  return (
    <div className="flex flex-wrap p-1 m-2 w-50  border bg-zinc-200 hover:bg-zinc-500 rounded-lg">
    <div className="m-1">
      <img className = "rounded-lg" src={imageUrl + "/" + resdata.info.cloudinaryImageId}></img>
      <h1 className="pb-4 font-bold">{resdata.info.name}</h1>
      <h2>{resdata.info.sla.slaString}</h2>
      <h4>{resdata.info.avgRating} rating</h4>
    </div>
    </div>
  );
};
 
export default RestaurantCard;
