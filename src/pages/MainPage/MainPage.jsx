import { useParams } from "react-router-dom";
import { useState } from "react";
import DressUpWidget from "../../components/DressUpWidget/DressUpWidget.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
import products from "../../data/products.json";

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState("Select A Category");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory && selectedCategory !== "Select A Category"
        ? product.category === selectedCategory
        : true) &&
      (selectedSubcategory ? product.subcategory === selectedSubcategory : true)
    );
  });

  return (
    <div className="side-by-side">
      <DressUpWidget
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={setSelectedSubcategory}
      />
      <ProductsList filteredProducts={filteredProducts || []} />
    </div>
  );
}

export default MainPage;
