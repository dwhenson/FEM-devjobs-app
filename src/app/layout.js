import "./reset.css";
import "./abstracts.css";
import "./global.css";
import "./composition.css";

import Banner from "@/components/Banner/Banner.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Banner />
        </header>
        {children}
      </body>
    </html>
  );
}
