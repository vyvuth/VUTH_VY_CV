import React from "react";
import { IoHome } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdPersonalInjury } from "react-icons/md";
import { Link } from "react-router";

function ButtomMenu() {
  return (
    <>
      <div className=" m-0 p-0 d-lg-none d-block position-fixed  bottom-0 w-100 bg-secondary bg-opacity-75 rounded rounded-5 m-auto">
        <div className=" mt-2 d-flex justify-content-evenly">
          <Link to="/home">
            <IoHome className="home fs-1 mt-2 mx-3 text-light" />
          </Link>
          <Link to="/skill">
            <GiSkills className="home fs-1 mt-2 mx-3 text-light" />
          </Link>
          <Link to="/personal">
            <MdPersonalInjury className="home fs-1 mt-2 mx-3 text-light" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ButtomMenu;
