import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mt-4 ml-[5rem] sm:ml-[10rem]  w-fit">
      <Link to="/recipe-app">
        <GiKnifeFork className="text-5xl  " />
      </Link>
    </div>
  );
}

export default Header;
