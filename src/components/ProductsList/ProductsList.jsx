import "./ProductsList.scss";
import { useState } from "react";
import axios from "axios";
import cartSVG from "../../assets/icons/cart.svg";
import heartSVG from "../../assets/icons/heart.svg";

function ProductsList({ filteredProducts }) {
  const BASE_URL = import.meta.env.VITE_SERVER_URL;
  const [visibleProducts, setVisibleProducts] = useState(9);

  const loadProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 18);
  };

  const handleAddToCart = async (product) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-to-cart`, {
        id: product.id,
        product_name: product.product_name,
        price: product.price,
        image_url: product.image_url,
      });
      console.log("response add to cart:", response.data);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  // if (filteredProducts.length === 0) {
  //   <div>No products of this type currently avaliable</div>;
  //   return;
  // }
  return (
    <div className="products-container">
      {filteredProducts.slice(0, visibleProducts).map((product) => (
        <div className="product-list" key={product.id}>
          <div className="product-card">
            <div className="image-container">
              <img
                className="image-container__img"
                src={`${BASE_URL}/${product.image_url}`}
                alt={`image of ${product.product_name}`}
              />
              <button
                onClick={() => handleAddToCart(product)}
                className="product-card__add-cart"
              >
                <img src={cartSVG} width="20"></img>
              </button>
              <button className="product-card__add-fave">
                <img src={heartSVG} width="20"></img>
              </button>
            </div>
            <div className="product-description">
              <h4 className="product-description__title">
                {product.product_name}
              </h4>
              {/* <p>{product.description}</p> */}
              <p className="product-description__price">
                <span className="product-description__price--bold">Price:</span>{" "}
                ${product.price}
              </p>
            </div>
          </div>
        </div>
      ))}
      {visibleProducts < filteredProducts.length && (
        <div className="load-more">
          <button className="load-more__btn" onClick={loadProducts}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
