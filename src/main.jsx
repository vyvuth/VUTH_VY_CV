import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router";
import HeaderPages from "./HeaderPage/HeaderPages.jsx";
import DevelopmentSkill from "./DevelopmentSkill/DevelopmentSkill.jsx";
import PersonalInformation from "./PersionalInformation.jsx/PersonalInformation.jsx";
import PageNotFound from "./PageNotFound/PageNotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/skill" element={<DevelopmentSkill />} />
        <Route path="/personal" element={<PersonalInformation />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
