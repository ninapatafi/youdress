import "./ProductsList.scss";
// import products from "../../data/products.json";
import { useState } from "react";

function ProductsList({ products }) {
  const [visibleProducts, setVisibleProducts] = useState(9);
  const loadProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 18);
  };
  if (!products) {
    <div>loading products</div>;
  }
  return (
    <div className="products-container">
      {products.slice(0, visibleProducts).map((product) => (
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
      {visibleProducts < products.length && (
        <button onClick={loadProducts}>Load More</button>
      )}
    </div>
  );
}

export default ProductsList;
