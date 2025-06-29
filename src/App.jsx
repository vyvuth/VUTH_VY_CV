import React from "react";
import HeaderPages from "./HeaderPage/HeaderPages";
import ComponentPage from "./Component/ComponentPage";
import FooterPage from "./FooterPage/FooterPage";

function App() {
  return (
    <>
      <header>
        <HeaderPages />
      </header>
      <ComponentPage />
      <footer>
        <FooterPage />
      </footer>
    </>
  );
}

export default App;
