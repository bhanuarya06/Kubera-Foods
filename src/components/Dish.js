import React from "react";
import { dishImageId } from "../utils/constants";

const Dish = ({ dish }) => {
  const { name, ratings, price, imageId } = dish?.card?.info;
  const imageurl = dishImageId + imageId;
  return (
    <div className="p-4 border-slate-200 border-b-1 font-bold text-m flex justify-between">
      <div className="w-9/12">
        <div className="m-2 p-2 ">
          <div>{name}</div>
          <div>₹ {price / 100}</div>
        </div>
        <div className="pl-5">⭐ {ratings?.aggregatedRating?.rating}</div>
      </div>
      <div className="w-3/12">
        <label className="absolute ml-6 w-30 text-center bg-white text-green-600 rounded-lg">
          ADD
        </label>
        <img src={imageurl}></img>
      </div>
    </div>
  );
};

export default Dish;
