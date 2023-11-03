import "./reset.css";
import "./abstracts.css";
import "./global.css";
import "./composition.css";
import { cookies } from "next/headers";

import Banner from "@/components/Banner/Banner.js";

import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

export default function RootLayout({ children }) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";

  return (
    <html
      lang="en"
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}>
      <body>
        <header>
          <Banner initialTheme={theme} />
        </header>
        {children}
      </body>
    </html>
  );
}
