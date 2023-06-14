import React from 'react';

// ProductImage component
const ProductImage = ({ image, title }) => {
  return (
    // Container for the product image and title
    <div className="product-image">
      {/* Product image */}
      <img src={image} alt={title} style={{ width: '350px' }} />
      {/* Product title */}
      <h2>{title}</h2>
    </div>
  );
};

export default ProductImage;
