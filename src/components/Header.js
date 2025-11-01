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
        <button type='button' className='nav-item'>
          SHOP
        </button>
        <button type='button' className='nav-item'>
          SKILLS
        </button>
        <button type='button' className='nav-item'>
          STORIES
        </button>
        <button type='button' className='nav-item'>
          ABOUT
        </button>
        <button type='button' className='nav-item'>
          CONTACT US
        </button>
      </nav>
      {menuOpen && (
        <div className='dropdown-menu'>
          <button type='button' className='dropdown-item'>
            SHOP
          </button>
          <button type='button' className='dropdown-item'>
            SKILLS
          </button>
          <button type='button' className='dropdown-item'>
            STORIES
          </button>
          <button type='button' className='dropdown-item'>
            ABOUT
          </button>
          <button type='button' className='dropdown-item'>
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
