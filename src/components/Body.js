import { useState, useEffect } from "react";
import resdata from "../../restaurantData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [filterListOfRes, setfilterListOfRes] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rawData = resdata.data.feedItems;
    const response = await fetch(
      "https://raw.githubusercontent.com/bhanuarya06/Kubera-Foods/main/resData.json"
    );
    console.log(response);
    debugger;
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Failed to fetch:", response.status);
    }
    const values = Object.values(rawData);
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
