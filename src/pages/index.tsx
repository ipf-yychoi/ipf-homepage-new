import React from "react";
import logo from "../images/logo.svg";

import "../layouts/index.css";
import GlobalStyles from "../layouts/global";

import colors from "../layouts/colors";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: colors.primary }}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.StrictMode>
  );
}

export default App;
