import React, { useEffect } from "react";
import { FaFileExcel, FaFilePowerpoint, FaFileWord } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";

function Softskill() {
  return (
    <>
      <div className=" container-fluid newsreader m-0 p-0">
        <h1 className=" text-capitalize text-secondary text-opacity-75 fs-5 my-3 mx-4">
          extra skills 👨‍💻
        </h1>
        <div className=" container">
          <div>
            <ul>
              <li className=" fw-bolder">
                2024-2025
                <p className=" fw-normal text-capitalize fs-5">
                  has completed successfull in english level 12 &copy;Milky Way
                  School V15
                </p>
              </li>
              <li className=" fw-bolder">
                2025-2026
                <p className=" fw-normal text-capitalize fs-5">
                  has completed successfull in Khmer grade 12(BACCII)
                  &copy;Milky Way School V24
                </p>
              </li>
              <li className=" fw-bolder text-uppercase">
                other:
                <p className=" fw-normal text-capitalize fs-5">
                  can use some basics computer (medium): &copy; from socials
                  <li className=" mx-5">
                    word <FaFileWord className=" my-2 mb-3" />
                  </li>
                  <li className=" mx-5">
                    excel <FaFileExcel className=" my-2 mb-3" />
                  </li>
                  <li className=" mx-5">
                    powerPoint <FaFilePowerpoint className=" my-2 mb-3" />
                  </li>
                  <li className=" mx-5">
                    a bit maintenance{" "}
                    <GrHostMaintenance className=" my-2 mb-3" />
                  </li>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Softskill;
