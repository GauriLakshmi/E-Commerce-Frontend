import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import axios from "../api/api";
import "../styles/home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
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
      
      <div className="home-container">
        <h1>Our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Home;