import { useEffect, useState } from "react";
import { fetchRestaurants } from "./constants";

const useFetchRestaurants = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterListOfRes, setFilterListOfRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(fetchRestaurants);
    const data = await response.json();
    const restaurantCard = data.data.cards.find(
      (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];
    setListOfRes(restaurants);
    setFilterListOfRes(restaurants);
  };

  return { listOfRes, filterListOfRes };
};

export default useFetchRestaurants;
