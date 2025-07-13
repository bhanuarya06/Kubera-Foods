import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex h-20 mb-2 justify-between rounded-b-md bg-rose-400">
      <div className="flex w-30 p-1 items-center">
        <Link to="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/8538f0166998985.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.gif"
            alt="logo"
            className="h-15 w-30 rounded-2xl"
          />
        </Link>
      </div>
      <div className="flex m-2 items-center">
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
