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
            <p>My new app </p>
          </header>
        </div>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
