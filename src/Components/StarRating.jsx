import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// StarRating component
const StarRating = ({ rating, color }) => {
  const stars = [];

  // Create a loop to generate the star icons based on the rating value
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon icon={fasStar} key={i} style={{ color: color }} />); // Filled star icon
    } else {
      stars.push(<FontAwesomeIcon icon={farStar} key={i} style={{ color: color }} />); // Empty star icon
    }
  }

  // Render the star icons inside a div
  return <div>{stars}</div>;
};

export default StarRating;

