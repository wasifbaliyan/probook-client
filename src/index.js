import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#D9D9D9",
  //   },
  //   secondary: {
  //     main: "#000000",
  //   },
  //   info: {
  //     main: "#242D34",
  //   },
  //   success: {
  //     main: "#1D9BF0",
  //   },
  //   text: {
  //     secondary: "#D9D9D9",
  //     primary: "#000000",
  //   },
  //   action: {},
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
