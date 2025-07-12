import { useEffect, useState } from "react";
import { resMenuId } from "./constants";

const useFetchResMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resMenuId + id);
    const jsonData = await data.json();
    setMenuData(jsonData.data);
  };

  return menuData;
};

export default useFetchResMenu;
