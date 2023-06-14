import React from 'react';

// ProductCard component
const ProductCard = ({ product }) => {
  return (
    // Container for the product card
    <div className="product-container">
      {/* Product card */}
      <div className="product-card">
        {/* Product image */}
        <img
          src={product.image}
          alt={product.title}
        />
        {/* Product title */}
        <h3>{product.title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;

