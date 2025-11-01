import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => (
  <div className='product-grid'>
    {products.map((item) => (
      <ProductCard key={item.id} product={item} />
    ))}
  </div>
);

export default ProductGrid;
