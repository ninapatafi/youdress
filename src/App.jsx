import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import AddressGuide from "./components/AddressGuide/AddressGuide.jsx";
import DressUpWidget from "./components/DressUpWidget/DressUpWidget.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <AddressGuide />
      <div>
        <DressUpWidget />
      </div>
      {/* <ProductsList /> */}
      <Footer />
    </>
  );
}

export default App;
