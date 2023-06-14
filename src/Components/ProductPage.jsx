import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import ProductDetails from './ProductDetails';
import Carousel from './Carousel';
import SocialMediaLinks from './SocialMediaLinks';
import Header from './Header';
import Footer from './Footer';

// ProductPage component
const ProductPage = () => {
  // State variables
  const [products, setProducts] = useState([]); // Store the fetched products
  const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product

  // Fetch products from the API
  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  // If products are still being fetched, show a loading message
  if (products.length === 0) {
    return <h6>Loading...</h6>;
  }

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="container-fluid" style={{backgroundColor:'#FFFBEB'}}>
        <br/><br/>
        <div className="row">
          <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7" style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Product image */}
            <img
              src={selectedProduct ? selectedProduct.image : products[0].image}
              alt={selectedProduct ? selectedProduct.title : products[0].title}
              style={{
                width: "350px",
                height: "500px",
                transform: "scale(0.9)",
                transition: "transform 0.5s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1)"; // Enlarge the image on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(0.8)"; // Revert back to original size when not hovering
              }}
            />
          </div>
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
            {selectedProduct ? (
              // Render selected product details if available
              <>
                <br/><br/>
                <h2 style={{padding: '10px 0 10px 10px',backgroundColor:'#FEDEFF',fontFamily:'Oswald'}}>{selectedProduct.title}</h2>
                  <h6  style={{fontFamily:"EB Garamond",fontSize:'17px'}}>{selectedProduct.description}</h6>              
                  <ProductDetails rating={selectedProduct.rating} price={selectedProduct.price} />                              
                <button style={{ marginRight: "8px", marginTop: "15px", borderRadius: "20px", backgroundColor: 'gold', border: 'none', padding: "5px 20px" }}>Add to Cart</button>
                <button style={{ borderRadius: "20px", backgroundColor: 'orangeRed', border: 'none', padding: "5px 20px" }}>Buy Now</button>
              </>
              ) : (
              // Render default product details if no product is selected
              <>
                <br/><br/>
                <h2 style={{ padding: '10px 0 10px 10px',backgroundColor:'#FEDEFF',fontFamily:'Oswald' }}>{products[0].title}</h2>

                  <h6 style={{fontFamily:"EB Garamond",fontSize:'17px'}}>{products[0].description}</h6>            
                
                  <ProductDetails rating={products[0].rating} price={products[0].price} />
                            
                <button style={{ marginRight: "8px", marginTop: "15px", borderRadius: "20px", backgroundColor: 'orange', border: 'none', padding: "5px 20px" }}>Add to Cart</button>
                <button style={{ borderRadius: "20px", backgroundColor: 'orangeRed', border: 'none', padding: "5px 20px" }}>Buy Now</button>
              </>
              )}
          </div>
        </div>
        <br/><br/><br/><br/>
        
        <h4 style={{fontFamily:'Cormorant',backgroundColor:'burlywood',padding:'10px 10px'}}>Recommended Products</h4><br/>
        {/* Carousel displaying similar products */}
        <Carousel products={products} onProductClick={(product) => setSelectedProduct(product)} />
        {/* Set selected product when a product in the carousel is clicked */}

        <br/><hr/>
        {/* Social media links */}
        <SocialMediaLinks />
        <br/>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
