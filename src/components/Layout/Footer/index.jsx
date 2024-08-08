import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faSkype, faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
    <div className="container py-5">
      <div className="row justify-content-between">
        <div className="col-md-3 mb-4">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo2_footer.png" alt="Logo" />
          <p className="text-secondary mt-4">Lorem ip, consectetur  elit sed do eiusmod tempor incididunt ut labore consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="col-md-2 mb-4">
          <h3>Quick Links</h3>
          <div className="mt-4">
            <p className="mt-3 text-secondary">About</p>
            <p className="mt-3 text-secondary">Offers & Discounts</p>
            <p className="mt-3 text-secondary">Get Coupon</p>
            <p className="mt-3 text-secondary">Contact Us</p>
          </div>
        </div>
        <div className="col-md-2 mb-4">
          <h3>Products</h3>
          <div className="mt-4">
            <p className="mt-3 text-secondary">Woman Cloth</p>
            <p className="mt-3 text-secondary">Fashion Accessories</p>
            <p className="mt-3 text-secondary">Man Accessories</p>
            <p className="mt-3 text-secondary">Rubber made Toys</p>
          </div>
        </div>
        <div className="col-md-2 mb-4">
          <h3>Support</h3>
          <div className="mt-4">
            <p className="mt-3 text-secondary">Frequently Questions</p>
            <p className="mt-3 text-secondary">Terms & Conditions</p>
            <p className="mt-3 text-secondary">Privacy Policy</p>
            <p className="mt-3 text-secondary">Report a Payment Issue</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-3">
      <div className="py-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary">
        <p className="mb-3 mb-md-0">All Rights Reserved. This template is made with <FontAwesomeIcon className="text-primary" icon={faHeart} /> by <span className="text-primary">Colorlib</span></p>
        <div>
          <FontAwesomeIcon className="me-3 icon" icon={faFacebookF} />
          <FontAwesomeIcon className="me-3 icon" icon={faTwitter} />
          <FontAwesomeIcon className="me-3 icon" icon={faInstagram} />
          <FontAwesomeIcon className="me-3 icon" icon={faSkype} />
          <FontAwesomeIcon className="icon" icon={faPinterest} />
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer