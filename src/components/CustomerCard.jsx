import React from "react";

const CustomerCard = ({ customer }) => (
  <div className="customer-card">
    <h3>{customer.name}</h3>
    <p>Email: {customer.email}</p>
    <p>Role: {customer.role}</p>
  </div>
);

export default CustomerCard;