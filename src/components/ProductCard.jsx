import React from "react";

const ProductCard = ({ product, isAdmin, onDelete }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Qty: {product.quantity}</p>
      {isAdmin && <button onClick={() => onDelete(product._id)}>Delete</button>}
    </div>
  );
};

export default ProductCard;