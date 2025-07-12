import React from "react";
import { imageUrl } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  return (
    <div className="flex flex-col m-2 w-70 h-70 border-0 hover:bg-zinc-300 rounded-lg">
      <img
        className=" h-40 rounded-lg"
        src={imageUrl + "/" + resdata.info.cloudinaryImageId}
      ></img>
      <div className="m-2 h-20">
        <h1 className=" font-bold text-lg">{resdata.info.name}</h1>
        <div className="flex flex-wrap">
          <h4 className="pr-4">⭐ {resdata.info.avgRating} </h4>
          <h2> 🛵    {resdata.info.sla.slaString}</h2>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
