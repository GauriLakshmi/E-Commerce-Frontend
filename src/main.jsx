import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import all CSS
import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/card.css";
import "./styles/dashboard.css";
import "./styles/forms.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
