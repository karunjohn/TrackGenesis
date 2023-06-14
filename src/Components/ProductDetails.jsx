import React from 'react';

// ProductDetails component
const ProductDetails = ({ price, rating }) => {
  // Generate the rating string
  const ratingString = `${rating.rate} (${rating.count} reviews)`;

  return (
    // Container for the product details
    <div className="product-details">
      {/* Rating */}
      <p>Rating: {ratingString}</p>
      {/* Price */}
      <h5>Price: {price}</h5>
    </div>
  );
};

export default ProductDetails;

