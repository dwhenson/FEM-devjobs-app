"use client";
import React from "react";
import * as Switch from "@radix-ui/react-switch";
import Cookie from "js-cookie";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";
import styles from "./Banner.module.css";

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          className="styles.Label"
          htmlFor="toggle-color-theme"
          style={{ paddingRight: 15 }}>
          Toggle Colour Theme
        </label>
        <Switch.Root
          className={styles.SwitchRoot}
          id="toggle-color-theme"
          onCheckedChange={handleToggleTheme}>
          <Switch.Thumb className={styles.SwitchThumb} />
        </Switch.Root>
      </div>
      <p>Current theme is {theme}.</p>
    </>
  );
}

export default Banner;
