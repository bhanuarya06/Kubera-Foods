import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex w-30 pl-2">
        <Link to="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/8538f0166998985.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.gif"
            alt="logo"
            className="h-20"
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
      </div>
    </div>
  );
};

export default Header;
