import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} isAdmin={false} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;