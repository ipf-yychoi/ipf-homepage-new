import React from "react";

import "../layouts/index.css";
import GlobalStyles from "../layouts/global";

import Home from "./Home";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Home />
    </React.StrictMode>
  );
}

export default App;
