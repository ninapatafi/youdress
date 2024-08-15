import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import AddressGuide from "./components/AddressGuide/AddressGuide.jsx";
// import DressUpWidget from "./components/DressUpWidget/DressUpWidget.jsx";
// import ProductsList from "./components/ProductsList/ProductsList.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import productsData from "./data/products.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const products = productsData;
  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory && selectedCategory !== ""
        ? product.category === selectedCategory
        : true) &&
      (selectedSubcategory ? product.subcategory === selectedSubcategory : true)
    );
  });

  return (
    <BrowserRouter>
      <div>placeholder for a banner</div>
      <Header />
      <AddressGuide />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSubcategory={selectedSubcategory}
              setSelectedSubcategory={setSelectedSubcategory}
              products={products}
              filteredProducts={filteredProducts}
            />
          }
        />
        <Route
          path="/:category"
          element={
            <MainPage
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSubcategory={selectedSubcategory}
              setSelectedSubcategory={setSelectedSubcategory}
              products={products}
              filteredProducts={filteredProducts}
            />
          }
        />
        <Route
          path="/:category/:subcategory"
          element={
            <MainPage
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSubcategory={selectedSubcategory}
              setSelectedSubcategory={setSelectedSubcategory}
              products={products}
              filteredProducts={filteredProducts}
            />
          }
        />
        <Route path="/cart" element={<ShoppingCartPage />} />

        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
