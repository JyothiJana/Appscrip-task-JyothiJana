import React, { useState } from 'react';
import './ProductCard.css';

import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

const ProductCard = ({ product }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const onClickHeart = () => {
    setLikedProducts((prev) => {
      if (prev.includes(product.id)) {
        return prev.filter((id) => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  const isLiked = likedProducts.includes(product.id);

  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title} className='product-image' />
      <div className='product-details-container'>
        <div className='product-data'>
          <h3 className='product-title'>{product.title}</h3>
          <p className='sign-in'>
            <span className='sign'>Sign in</span> or Create an account to see
            pricing
          </p>
        </div>
        {isLiked ? (
          <IoMdHeart className='header-icons liked' onClick={onClickHeart} />
        ) : (
          <IoMdHeartEmpty className='header-icons' onClick={onClickHeart} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
