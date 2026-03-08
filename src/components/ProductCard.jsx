// src/components/ProductCard.jsx
import "../styles/card.css";
import cabbage from "../assets/cabbage.jpg";
import spinach from "../assets/spinach.jpg";
import carToy from "../assets/car-toy.jpg";
import notebook from "../assets/notebook.jpg";

const ProductCard = ({ product, admin }) => {

  // Map product names to images
  const productImages = {
    Cabbage: cabbage,
    Spinach: spinach,
    "Car Toys": carToy,
    "Note Book": notebook
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch(
        `https://e-commerce-backend-78el.onrender.com/api/products/${product._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Product deleted");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <img
        src={productImages[product.name]}
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
