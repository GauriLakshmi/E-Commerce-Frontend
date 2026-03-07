// src/pages/UserDashboard.jsx
import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import axios from "../api/api";
import "../styles/dashboard.css";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      
      <div className="dashboard">
        <h2>Available Products</h2>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default UserDashboard;