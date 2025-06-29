import React from "react";
import "../App.css";
function HeaderPages() {
  return (
    <>
      <div className=" container-fluid newsreader d-lg-block d-none p-0 m-0">
        <menu>
          <ul className=" list-unstyled d-flex justify-content-evenly">
            <li className=" text-capitalize menu fw-bold">home</li>
            <li className="text-capitalize menu fw-bold">development skill</li>
            <li className="text-capitalize menu fw-bold">
              personal information
            </li>
          </ul>
        </menu>
      </div>
    </>
  );
}

export default HeaderPages;
