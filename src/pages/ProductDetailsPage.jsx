// Import necessary modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <h2>{product.title}</h2>
      <img src={product.image} alt="Product" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <Link to="/">
        <button type="button"> BACK</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
