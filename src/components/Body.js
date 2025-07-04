import { useState, useEffect } from "react";
import resdata from "../../restaurantData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [filterListOfRes, setfilterListOfRes] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    debugger;
    fetchData();
  }, []);

  const fetchData = async () => {
    const rawData = resdata.data.feedItems;
    const values = Object.values(rawData); // convert numbered keys to array
    const resList = values.filter((res) => res.store);
    setlistOfRes(resList);
    setfilterListOfRes(resList);
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
          onChange={(e) => {
            setSearchRes(e.target.value);
            const filteredRes = listOfRes.filter((res) =>
              res.store?.title?.text
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            );
            setfilterListOfRes(filteredRes);
          }}
        />
      </div>
      <div>
        <div className="flex flex-wrap p-2 m-2">
          {filterListOfRes.map((res) => (
            <RestaurantCard resdata={res} key={res.uuid} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
