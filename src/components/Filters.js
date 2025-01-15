import React from 'react';

const Filters = ({ setSearch, setCategory, setSortOrder }) => {
  return (
    <div className="filters">
      <input 
        type="text" 
        placeholder="Search products..." 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="rating-desc">Rating (High to Low)</option>
      </select>
    </div>
  );
};

export default Filters;
