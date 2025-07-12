import { useParams } from "react-router";
import CategoryList from "./CategoryList";
import useFetchResMenu from "../utils/useFetchResMenu";
import MenuShimmer from "./MenuShimmer";
import { useState } from "react";

const ResMenu = () => {
  const { id } = useParams();
  const menuData = useFetchResMenu(id);
  const [showIndex,setShowIndex] = useState(null)

  if (menuData === null) return <MenuShimmer />;

  const { text } = menuData?.cards[0]?.card?.card;
  const { avgRating, sla } = menuData?.cards[2]?.card?.card?.info;
  const { cards } = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const items = cards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <div className=" mb-4 p-2 border-0 shadow-2xl rounded-lg bg-slate-100">
        <h1 className="font-bold text-xl">{text}</h1>
        <h3>⭐ {avgRating}</h3>
        <h3>{sla?.slaString}</h3>
      </div>
      <div>
        <h1 className="font-bold text-lg">Menu</h1>
        <div>
          {items.map((item,index) => (
            <CategoryList
              key={item?.card?.card?.title}
              item={item}
              showDishes={index===showIndex ?true:false}
              setShowIndex={()=> index===showIndex?setShowIndex(null): setShowIndex(index)}
            ></CategoryList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
