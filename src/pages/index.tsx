import React from "react";

import "../layouts/index.css";
import GlobalStyles from "../layouts/global";

import Header from "../components/Header";
import Home from "./Home";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Header />
      <Home />
    </React.StrictMode>
  );
}

export default App;
