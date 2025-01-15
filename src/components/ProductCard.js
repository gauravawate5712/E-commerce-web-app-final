import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>View Product Details</Link>
    </div>
  );
};

export default ProductCard;
