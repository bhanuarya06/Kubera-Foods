import React from "react";
import { dishImageId } from "../utils/constants";

const Dish = ({ dish }) => {
  const { name, ratings, price, imageId, description, defaultPrice } =
    dish?.card?.info;
  console.log(dish);
  const imageurl = dishImageId + imageId;
  return (
    <div className="p-2 border-slate-200 border-b-1 flex flex-wrap items-center justify-between ">
      <div className="p-2 w-9/12">
        <div className=" ">
          <div className="text-lg">{name}</div>
          <div className="text-s">
            ₹ {price ? price / 100 : defaultPrice / 100}
          </div>
          <div className="text-s">⭐ {ratings?.aggregatedRating?.rating}</div>
        </div>
        <div className="text-xs">{description}</div>
      </div>
      <div className="p-2 w-3/12">
        <button className="absolute ml-15 w-15 text-center hover:cursor-pointer hover:bg-amber-300 bg-white text-green-600 rounded-lg">
          ADD
        </button>
        <img src={imageurl}></img>
      </div>
    </div>
  );
};

export default Dish;
