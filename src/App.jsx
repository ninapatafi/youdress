import { useState, useParams, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import AddressGuide from "./components/AddressGuide/AddressGuide.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsResponse = await axios.get(`${BASE_URL}/products`);
        // console.log("products response", productsResponse.data);
        setFilteredProducts(productsResponse.data);
        setProducts(productsResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <BrowserRouter>
      {/* <div>placeholder for a banner</div> */}
      <Header />
      {/* <AddressGuide /> */}
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
              setFilteredProducts={setFilteredProducts}
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
              setFilteredProducts={setFilteredProducts}
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
              setFilteredProducts={setFilteredProducts}
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
