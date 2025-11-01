import React, { useState } from 'react';
import './Header.css';
import { CiSearch } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <div className='logo-container'>
        <div className='logo-icons-container'>
          <button type='button' className='hamburger-btn' onClick={toggleMenu}>
            <img
              src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1761964672/solar_hamburger-menu-linear_ykdrpf.png'
              className='hamburger-icon'
              alt='nav items'
            />
          </button>

          <img
            src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1761960738/Logo_ztswki.png'
            alt='logo'
            className='logo'
          />
        </div>
        <h1 className='logo-header-name'>LOGO</h1>
        <ul className='header-icons-container'>
          <li className='seach-icon'>
            <button type='button' className='button-icons'>
              <CiSearch className='header-icons' />
            </button>
          </li>
          <li className='heart-icon'>
            <button type='button' className='button-icons'>
              <IoMdHeartEmpty className='header-icons' />
            </button>
          </li>
          <li className='shopping-bag-icon'>
            <button type='button' className='button-icons'>
              <MdOutlineShoppingBag className='header-icons' />
            </button>
          </li>
          <li className='person-icon'>
            <button type='button' className='button-icons'>
              <BsPerson className='header-icons' />
            </button>
          </li>
          <li className='select-lag-sec'>
            <select className='select-lan'>
              <option>Eng</option>
            </select>
          </li>
        </ul>
      </div>
      <nav className='nav-bar'>
        <a href='#' className='nav-item'>
          SHOP
        </a>
        <a href='#' className='nav-item'>
          SKILLS
        </a>
        <a href='#' className='nav-item'>
          STORIES
        </a>
        <a href='#' className='nav-item'>
          ABOUT
        </a>
        <a href='#' className='nav-item'>
          CONTACT US
        </a>
      </nav>
      {menuOpen && (
        <div className='dropdown-menu'>
          <a href='#' className='dropdown-item'>
            SHOP
          </a>
          <a href='#' className='dropdown-item'>
            SKILLS
          </a>
          <a href='#' className='dropdown-item'>
            STORIES
          </a>
          <a href='#' className='dropdown-item'>
            ABOUT
          </a>
          <a href='#' className='dropdown-item'>
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
