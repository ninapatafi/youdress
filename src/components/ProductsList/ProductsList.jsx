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
    return;
  }
  if (filteredProducts.length === 0) {
    <div>No products of this type currently avaliable</div>;
    return;
  }
  return (
    <div className="products-container">
      {filteredProducts.slice(0, visibleProducts).map((product) => (
        <div className="product-list" key={product.id}>
          <div className="product-card">
            <div className="image-container">
              <img
                className="image-container__img"
                src={`http://localhost:5050/${product.image_url}`}
              />
            </div>
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
