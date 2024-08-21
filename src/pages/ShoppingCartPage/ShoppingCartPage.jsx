import React from "react";
import { useState, useParams, useEffect } from "react";
import axios from "axios";
import "./ShoppingCartPage.scss";

function ShoppingCartPage() {
  const BASE_URL = import.meta.env.VITE_SERVER_URL;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      try {
        const cartResponse = await axios.get(`${BASE_URL}/cart`);
        setCartProducts(cartResponse.data);
        console.log("cart response", cartResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCart();
  }, []);

  const totalCost = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  console.log(totalCost);

  return (
    <div className="shoppingcart-page">
      <h1 className="shoppingcart-page__title">Your Shopping Cart</h1>
      <div className="cart-container">
        {cartProducts.map((product) => (
          <div className="product-list" key={product.id}>
            <div className="product-card">
              <div className="image-container ">
                <img
                  className="image-container__img"
                  src={`${BASE_URL}/${product.image_url}`}
                  alt={`image of ${product.product_name}`}
                />
                <button>remove from cart</button>
              </div>
              <p>Quantity: {product.quantity}</p>
              <div className="product-description">
                <h4 className="product-description__title">
                  {product.product_name}
                </h4>

                <p className="product-description__price">
                  Price: ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Total Price</h2>
      <h4>${totalCost}</h4>
      <button>Check Out</button>
    </div>
  );
}

export default ShoppingCartPage;
