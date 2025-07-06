import React from "react";
import "../App.css";
import { Link } from "react-router";
function HeaderPages() {
  return (
    <>
      <div className=" container-fluid newsreader d-lg-block d-none p-0 m-0">
        <menu>
          <ul className=" list-unstyled d-flex justify-content-evenly">
            <Link to="/home" className=" text-capitalize menu fw-bold">
              home
            </Link>
            <Link to="/skill" className="text-capitalize menu fw-bold">
              development skill
            </Link>
            <Link to="/personal" className="text-capitalize menu fw-bold">
              personal information
            </Link>
          </ul>
        </menu>
      </div>
    </>
  );
}

export default HeaderPages;
