import React from "react";
import { useState, useEffect } from "react";
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

  const handleDeleteCart = async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/cart/${productId}`);
      console.log("delete cart item", response.data);
      setCartProducts((prevCartProducts) =>
        prevCartProducts.filter((product) => product.id !== productId)
      );
    } catch (err) {
      console.error("Error deleting item from cart:", err);
    }
  };

  const totalCost = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  console.log(totalCost);
  const formattedTotalCost = totalCost.toFixed(2);

  const SALES_TAX = 0.05; //Alberta sales tax...
  const salesTax = totalCost * SALES_TAX;
  const totalWithTax = totalCost + salesTax;
  const formattedSalesTax = salesTax.toFixed(2);
  const formattedTotalWithTax = totalWithTax.toFixed(2);

  return (
    <div className="shoppingcart-page">
      <div className="cart-container">
        <h1 className="shoppingcart-page__title">Your Shopping Cart</h1>
        {cartProducts.map((product) => (
          <div className="cart-list" key={product.id}>
            <div className="cart-card">
              <div className="cart-image-container">
                <img
                  className="cart-image-container__img"
                  src={`${BASE_URL}/${product.image_url}`}
                  alt={`image of ${product.product_name}`}
                />
              </div>

              <p>Quantity: {product.quantity}</p>
              <div className="cart-description">
                <h4 className="cart-description__title">
                  {product.product_name}
                </h4>

                <p className="cart-description__price">
                  Price: ${product.price}
                </p>
              </div>
              <button
                onClick={() => handleDeleteCart(product.id)}
                className="product-cart__remove"
              >
                remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-info">
        <h2 className="cart-info__total">Total Price</h2>
        <h4 className="cart-info__cost">Subtotal: ${formattedTotalCost}</h4>
        <h4 className="cart-info__tax">+ Sales Tax ${formattedSalesTax}</h4>
        <h4 className="cart-info__total-tax">${formattedTotalWithTax}</h4>
        <button className="cart-info__btn">Check Out</button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
