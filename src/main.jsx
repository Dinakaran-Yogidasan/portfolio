import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// This code should be added to <head>.
// It's used to prevent page load glitches.
/** This Code is Used for dark mode */
const html = document.querySelector("html");
const isLightOrAuto =
  localStorage.getItem("hs_theme") === "light" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    !window.matchMedia("(prefers-color-scheme: dark)").matches);
const isDarkOrAuto =
  localStorage.getItem("hs_theme") === "dark" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

if (isLightOrAuto && html.classList.contains("dark"))
  html.classList.remove("dark");
else if (isDarkOrAuto && html.classList.contains("light"))
  html.classList.remove("light");
else if (isDarkOrAuto && !html.classList.contains("dark"))
  html.classList.add("dark");
else if (isLightOrAuto && !html.classList.contains("light"))
  html.classList.add("light");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
