import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/authService";
import "../styles/forms.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      alert("Login successful!");
      navigate(res.data.role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      alert("Invalid credentials");
      console.error(err);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;