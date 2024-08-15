import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import AddressGuide from "./components/AddressGuide/AddressGuide.jsx";
// import DressUpWidget from "./components/DressUpWidget/DressUpWidget.jsx";
// import ProductsList from "./components/ProductsList/ProductsList.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import products from "./data/products.json";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState("Select A Category");
  // const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // const filteredProducts = products.filter((product) => {
  //   return (
  //     (selectedCategory && selectedCategory !== "Select A Category"
  //       ? product.category === selectedCategory
  //       : true) &&
  //     (selectedSubcategory ? product.subcategory === selectedSubcategory : true)
  //   );
  // });

  return (
    <>
      <Header />
      <AddressGuide />
      <MainPage />
      {/* <div className="side-by-side">
        <DressUpWidget
          products={products}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
        />
        <ProductsList filteredProducts={filteredProducts || []} />
      </div> */}

      <Footer />
    </>
  );
}

export default App;
