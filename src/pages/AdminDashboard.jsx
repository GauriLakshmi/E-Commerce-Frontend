import React, { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct } from "../services/productService";
import ProductCard from "../components/ProductCard";
import API from "../api/api";
import CustomerCard from "../components/CustomerCard";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const fetchCustomers = async () => {
    const res = await API.get("/auth/users"); // you'll need a route for getting all users
    setCustomers(res.data);
  };

  const handleAddProduct = async () => {
    const name = prompt("Product name");
    const price = prompt("Price");
    const description = prompt("Description");
    const quantity = prompt("Quantity");
    await createProduct({ name, price, description, quantity });
    fetchProducts();
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Delete this product?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleAddProduct}>Add Product</button>
      <h3>Products</h3>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} isAdmin={true} onDelete={handleDeleteProduct} />
        ))}
      </div>

      <h3>Customers</h3>
      <div className="customer-list">
        {customers.map((c) => (
          <CustomerCard key={c._id} customer={c} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;