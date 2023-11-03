"use client";
import React from "react";
import Cookie from "js-cookie";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

function Banner({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    Cookie.set("color-theme", newTheme, {
      expires: 1000,
    });

    const newTokens = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
    const root = document.documentElement;
    root.setAttribute("data-color-theme", newTheme);

    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <>
      <button onClick={handleToggleTheme}>Toggle dark/light theme</button>
      <p>Current theme is {theme}.</p>
    </>
  );
}

export default Banner;
