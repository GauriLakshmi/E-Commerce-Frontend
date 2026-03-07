// src/components/CustomerCard.jsx
import "../styles/card.css";

const CustomerCard = ({ user }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default CustomerCard;