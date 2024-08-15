import React from "react";

function ShoppingCartPage() {
  let cartProducts = [
    {
      id: 36,
      product_name: "Canvas Tote Bag",
      description: "Durable canvas tote bag for everyday essentials.",
      price: 12.99,
      category: "Bags & Wallets",
      subcategory: "Bags",
      popularity: 66,
      is_new: true,
      is_sale: false,
      image_url: "images/product36.jpg",
      created_at: "2024-08-14T08:00:00Z",
      updated_at: "2024-08-14T08:00:00Z",
    },
  ];

  const totalCost = cartProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );
  console.log(totalCost);

  return (
    <div>
      <h1>Welcome to your Shopping Cart</h1>
      <div className="products-container">
        {cartProducts.map((product) => (
          <div className="product-list" key={product.id}>
            <div className="product-card">
              <img src="https://placehold.co/200" alt={product.product_name} />
              <button>remove from cart</button>
              <h4>{product.product_name}</h4>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Total Price</h2>
      <h4>${totalCost}</h4>
    </div>
  );
}

export default ShoppingCartPage;
