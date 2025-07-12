import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { resMenuId } from "../utils/constants";
import CategoryList from "./CategoryList";

const ResMenu = () => {
  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async ()=> {
      const data = await fetch(
        resMenuId + id
      );
      const jsonData = await data.json();
      setMenuData(jsonData.data);
      console.log(jsonData.data);
    }
    fetchData();
  }, []);
  if (menuData === null) return <Shimmer />
  const {text}= menuData?.cards[0]?.card?.card
  const {avgRating, sla} = menuData?.cards[2]?.card?.card?.info
  const {cards} = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);
  const items = cards.filter(card=> card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  console.log(items);
  return (
    <div className="text-center">
      <div className="m-2 p-2">
        <h1 className="font-bold text-xl">{text}</h1>
        <h3>⭐ {avgRating}</h3>
        <h3>{sla?.slaString}</h3>
      </div>
      <div>
        <h1 className="font-bold text-lg">Menu</h1>
        <div>
            {items.map((item)=>(
                <CategoryList key={item?.card?.card?.title} item={item}></CategoryList>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
