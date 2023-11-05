import { cookies } from "next/headers";
import Banner from "@/components/Banner/Banner.js";
import "./reset.css";
import "./abstracts.css";
import "./global.css";
import "./composition.css";
import "./utilities.css";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

function RootLayout({ children }) {
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";

  return (
    <html
      lang="en"
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}>
      <title>Dev Jobs Web App</title>
      <meta
        name="description"
        content="A web app developed to improve my skills in React and Next.js. A Frontend Mentor challenge."
      />

      <body className="place-content">
        <header>
          <Banner initialTheme={theme} />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
