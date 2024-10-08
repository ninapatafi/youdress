import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DressUpWidget from "../../components/DressUpWidget/DressUpWidget.jsx";
import ProductsList from "../../components/ProductsList/ProductsList.jsx";
// import products from "../../data/products.json";

function MainPage({
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  products,
  filteredProducts,
  setFilteredProducts,
}) {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  //   const [selectedCategory, setSelectedCategory] = useState("");
  //   const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const didRunRef = useRef(false);
  console.log("subcategory", subcategory);
  console.log("category", category);

  useEffect(() => {
    if (!didRunRef.current) {
      setSelectedCategory(category || "");
      setSelectedSubcategory(subcategory || null);
      didRunRef.current = true;
    }
  }, [category, subcategory]); //query updated

  useEffect(() => {
    if (selectedCategory) {
      if (selectedSubcategory) {
        navigate(`/${selectedCategory}/${selectedSubcategory}`);
        setFilteredProducts(
          products.filter(
            (product) =>
              product.category === selectedCategory &&
              product.subcategory === selectedSubcategory
          )
        );
      } else {
        navigate(`/${selectedCategory}`);
        setFilteredProducts(
          products.filter((product) => product.category === selectedCategory)
        );
      }
    } else {
      navigate(`/`);
    }
  }, [selectedCategory, selectedSubcategory, navigate]);

  // products.filter((product) => {
  //   return (
  //     (selectedCategory ? product.category === selectedCategory : true) &&
  //     (selectedSubcategory ? product.subcategory === selectedSubcategory : true)
  //   );
  // });

  // const filteredProducts = products.filter((product) => {
  //   return (
  //     (selectedCategory && selectedCategory !== ""
  //       ? product.category === selectedCategory
  //       : true) &&
  //     (selectedSubcategory ? product.subcategory === selectedSubcategory : true)
  //   );
  // });

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
