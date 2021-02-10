import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import AppStyles from "./App.styled.js";
import GlobalStyles from "./Global.styled.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppStyles>
        <div className="App">
          <header className="App-header">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
            />
            <p>My new app </p>
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
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
