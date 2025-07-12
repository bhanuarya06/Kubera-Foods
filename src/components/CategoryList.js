import { useState } from "react";
import Dish from "./Dish";

const CategoryList = ({ item }) => {
  const { itemCards, title } = item?.card?.card;
  const [showDishes, setShowDishes] = useState(false);

  return (
    <div className="m-auto p-2 w-6/12 shadow-lg border-slate-100 border-b-15">
      <div className="flex justify-between" onClick={()=>setShowDishes(!showDishes)}>
        <span className="font-bold text-lg ">
          {title}({itemCards.length})
        </span>
        <span>▼</span>
      </div>
      <div className="text-left p-2">
        {showDishes && itemCards.map((card) => (
          <Dish key={card?.card?.info?.id} dish={card}></Dish>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
