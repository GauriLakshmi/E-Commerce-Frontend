import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService"; // default import
import "../styles/forms.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await authService.login({ email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);

    // Redirect based on role
    if (data.role === "admin") {
      navigate("/admin"); // admin goes to /admin
    } else {
      navigate("/dashboard"); // regular user goes to /dashboard
    }
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
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