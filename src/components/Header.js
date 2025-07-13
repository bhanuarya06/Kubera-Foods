import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { logoUrl } from "../utils/constants";
import { useSelector } from "react-redux";
import store from "../utils/appStore";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const itemsList = useSelector((store)=>store.cart.items)

  return (
    <div className="flex h-20 mb-2 justify-between rounded-b-md bg-rose-400">
      <div className="flex w-30 p-1 items-center">
        <Link to="/">
          <img
            src={logoUrl}
            alt="logo"
            className="h-15 w-30 rounded-2xl"
          />
        </Link>
      </div>
      <div className="flex m-2 items-center">
        <Link to="/cart" className="font-black text-xl p-4">🛒({itemsList.length})</Link>
        <Link to="/about" className="p-2 font-bold">
          About
        </Link>
        <Link to="/contact" className="p-2 font-bold">
          Contact Us
        </Link>
        <Link to="/login" className="font-bold p-2">
          {loggedInUser}
        </Link>
      </div>
    </div>
  );
};

export default Header;
