import React from "react";

const RestaurantCard = (props) => {
  const { resdata } = props;
  return (
    <div className="p-1 m-2 w-50 h-75 border bg-zinc-200 hover:bg-zinc-500 rounded-lg">
    <div className="m-1">
      <img className = "rounded-lg"src={resdata.store?.image?.items[0].url}></img>
      <h1 className="pb-4 font-bold">{resdata.store?.title?.text}</h1>
      <h2>${resdata.store?.tracking?.metaInfo?.additionalTrackingData?.delivery_fee} delivery fee</h2>
      <h4>{resdata.store?.tracking?.storePayload?.ratingInfo?.storeRatingScore.toFixed(2)} rating</h4>
    </div>
    </div>
  );
};
 
export default RestaurantCard;
