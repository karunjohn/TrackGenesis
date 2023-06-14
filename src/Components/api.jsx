// api.jsx
const API_URL = 'https://fakestoreapi.com/products';

// Function to fetch products from the API
export const fetchProducts = async () => {
  try {
    // Send a GET request to the API URL
    const response = await fetch(API_URL);

    // Parse the response as JSON
    const data = await response.json();

    // Return the data
    return data;
  } catch (error) {
    // If an error occurs during fetching, log the error
    console.error('Error fetching products:', error);
    
    // Throw the error to be handled by the caller
    throw error;
  }
};

