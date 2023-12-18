import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ProductDetailsPage from "./ProductDetailsPage";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (response.ok) {
          const productsData = await response.json();
          setProducts(productsData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product) => (
          <Link
            to={`/product/details/${product.id}`}
            key={product.id}
            element={<ProductDetailsPage />}
          >
            <li>
              <img src={product.image} alt="image" />
              {product.title} {product.price} {product.description}
              {product.category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
