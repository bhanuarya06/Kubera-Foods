import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterListOfRes, setFilterListOfRes] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurantCard = data.data.cards.find(
      (card) =>
        card.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRes(restaurants);
    setFilterListOfRes(restaurants);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchRes(value);
    const filtered = listOfRes.filter((res) =>
      res.info?.name?.toLowerCase().includes(value.toLowerCase())
    );
    setFilterListOfRes(filtered);
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <input
          className="border mx-6 rounded-lg"
          value={searchRes}
          placeholder="   Search Restaurant"
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-wrap p-2 m-2">
        {filterListOfRes.map((res) => (
          <RestaurantCard resdata={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
