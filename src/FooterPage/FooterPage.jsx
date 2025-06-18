import React, { useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

function FooterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div className=" container-fluid w-100 h-100 bg-secondary bg-opacity-25 p-1 newsreader ">
          <div className=" my-3">
            <h4 className=" d-flex mx-5 text-capitalize">
              ||** has been designed & developed:{" "}
              <p className=" mx-2 text-uppercase text-danger text-bolder">
                {" "}
                &copy; vuthvy 👨‍💻
              </p>
            </h4>
            <p className=" text-capitalize fs-5 mx-5">
              ||** i am a programmer who can building with the skills had showed
              of in the decription above. 👨‍💻😊
            </p>
            <p className=" text-capitalize fs-5 mx-5">
              ||** you can contact us throught: <BsTelephone />
            </p>
            <ul>
              <li className=" fs-5 mx-5">
                <FaFacebook className=" fs-3 my-2 mb-3 text-primary" /> VY DEV
                <a
                  className=" mx-2 text-decoration-none"
                  href="https://web.facebook.com/agency007V/"
                >
                  Click Here{""}👨‍💻
                </a>
              </li>
              <li className=" fs-5 mx-5">
                <FaFacebookMessenger className=" fs-3 my-2 mb-3 text-primary" />{" "}
                VY DEV
                <a
                  className=" mx-2 text-decoration-none"
                  href="https://web.facebook.com/?_rdc=1&_rdr#"
                >
                  Click Here{""}👨‍💻
                </a>
              </li>
              <li className=" fs-5 mx-5">
                <FaTiktok className=" fs-3 my-2 mb-3 text-danger" /> VY_DEV
                <a
                  className=" mx-2 text-decoration-none"
                  href="https://www.tiktok.com/@uservydev"
                >
                  Click Here{""}👨‍💻
                </a>
              </li>
              <li className=" fs-5 mx-5 Hanuman">
                <FaTelegram className=" fs-3 my-2 mb-3 text-primary" /> វុទ្ធ
                {""}វី
                <a
                  className=" mx-2 text-decoration-none"
                  href="https://t.me/Webfront_developer"
                >
                  Click Here{""}👨‍💻
                </a>
              </li>
            </ul>
            <p className=" text-center fs-6 fw-semibold p-0 m-0 text-danger text-decoration-underline">
              &copy;2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterPage;
