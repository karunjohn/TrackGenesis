// import React from 'react';
import './Style.css';
import StarRating from './StarRating';

const Carousel = ({ products, onProductClick }) => {
  const cardsPerSlide = 4; // Number of cards to display per slide

  // Splitting the products into groups of cards
  const cardGroups = [];
  for (let i = 0; i < products.length; i += cardsPerSlide) {
    const cardGroup = products.slice(i, i + cardsPerSlide);
    cardGroups.push(cardGroup);
  }

  return (
    // Carousel container
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Loop through card groups */}
        {cardGroups.map((cardGroup, groupIndex) => (
          <div
            className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}
            key={`group-${groupIndex}`}
          >
            {/* Card group container */}
            <div className="card-group">
              {/* Loop through products in the card group */}
              {cardGroup.map((product, index) => (
                <div className="card card-wrapper" key={product.id} style={{ border: 'none', boxShadow: '5px 5px 4px rgba(0, 0, 0, f)', backgroundColor:'#ECF2FF' }} onClick={() => onProductClick(product)} >
                  {/* Product image */}
                  <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px', margin: "0 auto" }} />
                  {/* Product title */}
                  <h6 style={{ margin: "0 auto" }}>{product.title}</h6>
                  <div className="card-body">
                    {/* Product rating */}
                    <p className="card-text" style={{ margin: "0 auto", textAlign: 'center' }}>
                      <StarRating rating={product.rating.rate} color="gold" /> ({product.rating.count} reviews)
                    </p>
                    {/* Product price */}
                    <h5 className="card-text" style={{ textAlign: 'center' }}>Price: {product.price}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Carousel control buttons */}
      <button className="carousel-control-prev"
        style={{ color: 'black' }}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        style={{ color: 'black' }}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {/* Inline style for carousel control icons */}
      <style>
        {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: invert(100%);
          }

          .card-wrapper:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
