import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import CustomerCard from "../components/CustomerCard";
import axios from "../api/api";
import "../styles/dashboard.css";
import "../styles/forms.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const token = localStorage.getItem("token");

  // Fetch products
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

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Handle add product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/products", newProduct, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Product added successfully!");
      setNewProduct({ name: "", description: "", price: "", quantity: "" });
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  return (
    <>

      <div className="dashboard">
        <h2>Add New Product</h2>
        <form className="form-container" onSubmit={handleAddProduct}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newProduct.quantity}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Product</button>
        </form>

        <h2>Products</h2>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} admin />
        ))}

        <h2>Customers</h2>
        {users.map((user) => (
          <CustomerCard key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;