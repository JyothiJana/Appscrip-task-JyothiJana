import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-top-container'>
      <div className='footer-top-left-container'>
        <h2 className='footer-top-left-head'>Be the first to know</h2>
        <p className='footer-top-left-description'>
          Sign up for updates from mettā muse.
        </p>
        <div className='enter-email-container'>
          <input
            type='text'
            placeholder='Enter your email...'
            className='input-container'
          />
          <button type='button' className='button'>
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className='footer-top-right-container'>
        <h2 className='footer-top-left-head'>CONTACT US</h2>
        <p className='footer-top-left-description'>+44 221 133 5360</p>
        <p className='footer-top-left-description'>
          customercare@mettamuse.com
        </p>

        <h2 className='footer-top-left-head'>Currency</h2>
        <p className='footer-top-left-description'>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
    <hr className='horizontal-line' />
    <div className='footer-botom-container'>
      <div className='footer-bottom-left-container'>
        <h2 className='footer-top-left-head'>mettā muse</h2>
        <ul className='footer-list-container'>
          <li className='footer-top-left-description list-items'>About Us</li>
          <li className='footer-top-left-description list-items'>Stories</li>
          <li className='footer-top-left-description list-items'>Artisans</li>
          <li className='footer-top-left-description list-items'>Boutiques</li>
          <li className='footer-top-left-description list-items'>Contact Us</li>
          <li className='footer-top-left-description list-items'>
            EU Compliances Docs
          </li>
        </ul>
      </div>
      <div className='footer-bottom-center-container'>
        <h2 className='footer-top-left-head'>Quick Links</h2>
        <ul className='footer-list-container'>
          <li className='footer-top-left-description list-items'>
            Orders & Shipping
          </li>
          <li className='footer-top-left-description list-items'>
            Join/Login as a Seller
          </li>
          <li className='footer-top-left-description list-items'>
            Payment & Pricing
          </li>
          <li className='footer-top-left-description list-items'>
            Return & Refunds
          </li>
          <li className='footer-top-left-description list-items'>FAQs</li>
          <li className='footer-top-left-description list-items'>
            Privacy Policy
          </li>
          <li className='footer-top-left-description list-items'>
            Terms & Conditions
          </li>
        </ul>
      </div>
      <div className='footer-bottom-right-container'>
        <h2 className='footer-top-left-head'>Follow Us</h2>
        <div className='social-icons-container'>
          <img
            src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762008598/Insta_rlx9ex.png'
            className='icons list-items'
            alt='Instagram'
          />
          <img
            src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762008719/a_wficsr.png'
            alt='LinkedIn'
            className='icons list-items'
          />
        </div>
        <h2 className='footer-top-left-head'>mettā muse Accepts</h2>
        <ul className='footer-list-container-bottom'>
          <li className='footer-top-left-description list-items'>
            <img
              src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762009756/Group_136188_gykbxv.png'
              className='image'
              alt='paying apps'
            />
          </li>
          <li className='footer-top-left-description list-items'>
            <img
              src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762009205/Group_136190_fugait.png'
              className='image'
              alt='paying apps'
            />
          </li>
          <li className='footer-top-left-description list-items'>
            <img
              src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762009326/Group_136192_txhyym.png'
              className='image'
              alt='paying apps'
            />
          </li>
          <li className='footer-top-left-description list-items'>
            <img
              src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762009398/Group_136193_wbdw2g.png'
              className='image'
              alt='paying apps'
            />
          </li>
          <li className='footer-top-left-description list-items'>
            <img
              src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762009513/Group_136194_ucbqto.png'
              className='image'
              alt='paying apps'
            />
          </li>
          <li className='footer-top-left-description list-items'>
            <img
              src='https://res.cloudinary.com/dd6dkllbq/image/upload/v1762009573/Group_136195_k1ruly.png'
              className='image'
              alt='paying apps'
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
