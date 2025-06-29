import React, { useEffect } from "react";
import Softskill from "./Softskill";

function ComponentPage() {
  return (
    <>
      <div className=" container-fluid my-5 m-0 p-0">
        {/* Description Page  */}
        <div className=" container newsreader">
          <div className=" rounded bg-opacity-10 bg-secondary p-2 d-flex justify-content-between flex-column flex-lg-row">
            <div className="box_1 w-100 w-lg-0 w-100 my-lg-0 my-3">
              <div className="col-lg-6">
                <img
                  src="vy.png"
                  className=" w-lg-50 h-lg-auto w-100 mx- m-lg-0 object-fit-cover mx-lg-5 rounded border border-2 border-primary-subtle"
                  alt="data loading"
                />
              </div>
              <h1 className=" my-lg-4 mx-lg-5 f-lg-2 fs-4 my-3">
                Hello Sir or Madam
              </h1>
              <h2 className=" my-lg-4 mx-lg-5 fs-4">I'm VUTH VY</h2>
              <p className="px-lg-0 px-3 f-3">
                I am a passionate and detail-oriented web developer with a
                strong foundation in front-end technologies like HTML, CSS,
                JavaScript, and modern frameworks such as React. I enjoy
                creating responsive, user-friendly websites and web applications
                that offer smooth and engaging user experiences. With a focus on
                clean code and continuous learning, I aim to build scalable and
                efficient digital solutions that meet real-world needs.
              </p>
            </div>
            <div className="box_2 w-lg-0 col-lg-6">
              <h2 className=" text-capitalize text-lg-center my-lg-5 me-lg-4 mx-lg-0 mx-3">
                here my job's description
              </h2>
              <h5 className=" fw-lighter">
                I am a skilled and enthusiastic web developer with hands-on
                experience in building responsive and interactive websites. My
                core strengths lie in HTML, CSS, and JavaScript, which I use to
                create clean, accessible, and well-structured web pages. I’m
                proficient in popular UI frameworks like Bootstrap and Tailwind
                CSS, which help me design modern, responsive interfaces quickly
                and efficiently. For building dynamic front-end applications, I
                use React, leveraging its component-based architecture to
                develop scalable and maintainable projects. I work with Vite as
                my development environment for its fast build times and modern
                tooling support. Throughout my journey, I’ve worked on several
                projects that demonstrate my skills. I built a personal
                portfolio website to showcase my work and skills, using React
                and Tailwind CSS for a sleek and fast design. Another project
                includes a to-do list app with React and local storage
                integration, allowing users to manage tasks efficiently. I’ve
                also developed a responsive landing page for a fictional product
                using Bootstrap, focusing on layout, mobile responsiveness, and
                smooth animations. Each project has helped me grow as a
                developer, enhancing my problem-solving skills and attention to
                detail. I continuously learn new tools and best practices to
                stay current in the ever-evolving web development landscape.
              </h5>
            </div>
          </div>
        </div>
        {/* Development skill  */}
        <div className=" mt-5 newsreader  ">
          <h2 className=" text-capitalize fs-5 skill text-center text-decoration-underline  ">
            | development skill |
          </h2>
          <h2 className=" text-capitalize mx-2 fs-6">
            ** development language used **
          </h2>
          <div className="d-skill d-lg-flex  justify-content-between">
            <div className="skill_1 py-5 px-5 w-lg-0 w-100">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row g-4 ">
                    <div className="col-4 text-center">
                      <img className="img_skill" src="html.png" alt="HTML" />
                    </div>
                    <div className="col-4 text-center">
                      <img className="img_skill" src="css.png" alt="CSS" />
                    </div>
                    <div className="col-4 text-center">
                      <img
                        className="img_skill"
                        src="js.png"
                        alt="JavaScript"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <img
                        className="img_skill"
                        src="jquery.png"
                        alt="jQuery again"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <img className="img_skill" src="react.png" alt="React" />
                    </div>
                    <div className="col-4 text-center">
                      <img
                        className="img_skill"
                        src="tailwind.png"
                        alt="Tailwind"
                      />
                    </div>
                    <div className="col-4 text-center">
                      <img
                        className="img_skill"
                        src="bootstrap.png"
                        alt="Bootstrap"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill_2 newsreader w-lg-0 w-100">
              <h1 className=" text-capitalize text-center fs-5 m-0 my-3 text-primary text-decoration-underline">
                <sup>|**</sup>
                General information
                <sup>**|</sup>
              </h1>
              <center className=" w-lg-0 w-100" style={{ width: "95%" }}>
                <p className="  my-lg-2 fs-5">
                  2024 has been completed successfull in web application
                  development
                </p>
                <p className=" my-2 fs-5 me-5">
                  2024 has been completed successfull in advance JS & React js
                </p>
                <p className=" d-flex justify-content-around my-2 fs-5 me-5">
                  <li className=" me-5">
                    Have created a lot of project course including web
                    application development and Advance JS & React js
                  </li>
                </p>
              </center>
              <p className=" text-center my-3">
                <b className=" text-danger fw-semibold">Alumni student</b>{" "}
                &copy; ETECT CENTER
              </p>
            </div>
          </div>
          <div className=" d-lg-block d-none">
            <h3 className=" text-capitalize text-center fs-5 my-5">
              || certificate of achievment ||
            </h3>
            <div>
              <div>
                <img
                  className=" w-100 h-auto object-fit-cover overflow-hidden"
                  src="frame.png"
                  alt="frame loading"
                />
              </div>
              <div className="parent_pic">
                <div className="pic_1">
                  <img
                    className=" w-100 h-auto object-fit-cover"
                    src="pic_1.png"
                    alt="pic_1 loading"
                  />
                </div>
                <div className="pic_2">
                  <img
                    className=" w-100 h-auto object-fit-cover"
                    src="pic_2.png"
                    alt="pic_1 loading"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Softskill  */}
        <Softskill />
      </div>
    </>
  );
}

export default ComponentPage;
