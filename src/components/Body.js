import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRestaurants from "../utils/useFetchRestaurants";

const Body = () => {
  const [searchRes, setSearchRes] = useState("");
  const [filterListOfRes, setFilterListOfRes] = useState([]);
  const { listOfRes } = useFetchRestaurants();

  useEffect(() => {
    setFilterListOfRes(listOfRes);
  }, [listOfRes]);

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
      <div className="flex flex-wrap justify-center p-2 m-2">
        {filterListOfRes.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            <RestaurantCard resdata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
