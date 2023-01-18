import React from "react";

const Card = (props) => {

  return (
    <div className="card">
      <img src="https://via.placeholder.com/300" alt="placeholder"/>
      <div>CATEGORY</div>
      <h3>Product Name</h3>
      <div>$123</div>
      <div>* * * * *</div>
    </div>
  );
};

export default Card;