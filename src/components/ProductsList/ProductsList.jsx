import "./ProductsList.scss";
// import products from "../../data/products.json";
import { useState } from "react";

function ProductsList({ filteredProducts }) {
  const [visibleProducts, setVisibleProducts] = useState(9);
  const loadProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 18);
  };
  if (!filteredProducts) {
    <div>Loading...</div>;
  }
  if (filteredProducts.length === 0) {
    <div>No products of this type currently avaliable</div>;
  }
  return (
    <div className="products-container">
      {filteredProducts.slice(0, visibleProducts).map((product) => (
        <div className="product-list" key={product.id}>
          <div className="product-card">
            <img src="https://placehold.co/200" />
            <button>cart</button>
            <h4>{product.product_name}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
      {visibleProducts < filteredProducts.length && (
        <button onClick={loadProducts}>Load More</button>
      )}
    </div>
  );
}

export default ProductsList;
