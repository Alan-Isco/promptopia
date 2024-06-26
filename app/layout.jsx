// import { Inter } from "next/font/google";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promptopia",
  description: "Discover the best",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
