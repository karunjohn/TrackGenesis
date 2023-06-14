import React from 'react';

// ProductDescription component
const ProductDescription = ({ description }) => {
  return (
    // Container for the product description
    <div className="cont" style={{ margin: 'auto' }}>
      {/* Product description */}
      <div className="product-description">
        {/* Description text */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;

