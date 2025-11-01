import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';
import { IoIosArrowBack } from 'react-icons/io';
import { LiaGreaterThanSolid } from 'react-icons/lia';

const App = () => {
  const [products, setProducts] = useState([]);
  const [length, setLength] = useState(0);
  const [filterVisibility, setFilterVisibility] = useState(true);
  const [showfilterInMobile, setShowFilterInMobile] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const filtersVisibility = () => {
    setFilterVisibility(!filterVisibility);
  };

  const toggleFilter = () => {
    setShowFilterInMobile(!showfilterInMobile);
  };

  return (
    <div className='app'>
      <Header />
      <hr className='horizontal-line-break' />
      <div className='main-page-data'>
        <h1 className='main-page-text-heading'>DISCOVER OUR PRODUCTS</h1>
        <p className='main-page-decription'>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className='filter-header-container'>
        <h2 className='number-of-items mobile-head' onClick={toggleFilter}>
          FILTER
        </h2>
        <div className='filter-header'>
          <h2 className='number-of-items'>{length} ITEMS</h2>
          <div
            className='show-hide-filter-container'
            onClick={filtersVisibility}
          >
            <button
              type='button'
              className='show-hide-button'
              onClick={filtersVisibility}
            >
              {filterVisibility ? (
                <IoIosArrowBack className='backarrow' />
              ) : (
                <LiaGreaterThanSolid className='backarrow' />
              )}
            </button>

            <p className='hide-show-text'>
              {filterVisibility ? 'HIDE FILTER' : 'SHOW FILTER'}
            </p>
          </div>
        </div>
        <select className='sorting-container'>
          <option>RECOMMENDED</option>
          <option>Newest first</option>
          <option>popular</option>
          <option>Price : high to low</option>
          <option>Price : low to high</option>
        </select>
      </div>
      <div className='main-content'>
        {filterVisibility ? (
          <div className='desktop-filters'>
            <Filters />
          </div>
        ) : null}
        {showfilterInMobile ? (
          <div className='mobile-filters'>
            <Filters />
          </div>
        ) : null}
        <div className='product-container'>
          <ProductGrid products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
