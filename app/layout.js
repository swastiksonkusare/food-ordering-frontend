import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./global.css";

export const metadata = {
  title: "Pizza Restaurent in Mumbai",
  description: "Best Pizzas in town!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Navbar />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
