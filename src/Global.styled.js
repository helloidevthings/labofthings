import React from "react";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
      }

      body {
        font-family: Montserrat, sans-serif;
        color: #000000;
        line-height: 1.59;
        background: white;
        font-weight: 500;
        text-rendering: optimizeLegibility;
        font-size: calc(
          14px + (20 - 14) *
            ((100vw - 320px) / (2100 - 320))
        );
      }
    `}
  />
);
export default GlobalStyles;
