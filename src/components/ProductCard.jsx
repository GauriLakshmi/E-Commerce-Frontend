// src/components/ProductCard.jsx
import "../styles/card.css";

const ProductCard = ({ product, admin }) => {
  const handleDelete = async () => {
    // Call DELETE API (admin only)
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/products/${product._id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Product deleted");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <img
        src="/src/assets/product-placeholder.png"
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
      {admin && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
};

export default ProductCard;