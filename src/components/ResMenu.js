import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import CategoryList from "./CategoryList";
import useFetchResMenu from "../utils/useFetchResMenu";
import MenuShimmer from "./MenuShimmer";

const ResMenu = () => {
  const { id } = useParams();
  const menuData = useFetchResMenu(id);

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
      <div className="m-2 p-2">
        <h1 className="font-bold text-xl">{text}</h1>
        <h3>⭐ {avgRating}</h3>
        <h3>{sla?.slaString}</h3>
      </div>
      <div>
        <h1 className="font-bold text-lg">Menu</h1>
        <div>
          {items.map((item) => (
            <CategoryList
              key={item?.card?.card?.title}
              item={item}
            ></CategoryList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
