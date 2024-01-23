import React from "react";

const Card = ({ image, title }) => {
  return (
    <div>
      <div className="card">
        <img src={image} alt={title} className="pics"/>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
