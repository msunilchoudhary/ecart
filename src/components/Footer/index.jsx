import React from 'react'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa6';
import PaymentImg from '../../assets/images/icons/payments.jpg';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-box">
                        <h3>TOP CATEGORIES</h3>
                        <ul>
                            <li><Link to="/">Fashion & Apparel</Link></li>
                            <li><Link to="/">Electronics</Link></li>
                            <li><Link to="/">Home & Kitchen</Link></li>
                            <li><Link to="/">Beauty & Care</Link></li>
                            <li><Link to="/">Food & Beverage</Link></li>
                            <li><Link to="/">Health & Wellness</Link></li>
                            <li><Link to="/">Toys & Hobbies</Link></li>
                            <li><Link to="/">Sports & Outdoors</Link></li>
                            <li><Link to="/">Books & Magazines</Link></li>
                            <li><Link to="/">Jewellery</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-box">
                        <h3>STORE AND SITES</h3>
                        <ul>
                            <li><Link to="/">ABOUT US</Link></li>
                            <li><Link to="/">CONTACT US</Link></li>
                            <li><Link to="/">CORPORATE SITE</Link></li>
                            <li><Link to="/">STORE LOCATOR</Link></li>
                            <li><Link to="/">CAREERS</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Track Orders</Link></li>
                            <li><Link to="/">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-box">
                        <h3>POLICIES</h3>
                        <ul>
                            <li><Link to="/">TERMS OF USE</Link></li>
                            <li><Link to="/">PRIVACY</Link></li>
                            <li><Link to="/">DELIVERY POLICY</Link></li>
                            <li><Link to="/">EXCHANGE & RETURN</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-box">
                        <h3>KEEP IN TOUCH</h3>
                        <p>
                            <strong>eCart</strong> Enterprises Private Limited.<br />
                            D-71, 2nd Floor, Ghazipur Village, Near Anand Vihar Railway Station, Delhi-110096.<br />
                            Phone: +91 98995 98942<br />
                            Email: care@ecartent.com
                        </p>
                        <p>
                            <strong>SOCIAL</strong><br />
                            <span className='social'>
                                <Link to="/"><FaFacebookF /></Link>
                                <Link to="/"><FaLinkedinIn /></Link>
                                <Link to="/"><FaYoutube /></Link>
                                <Link to="/"><FaInstagram /></Link>
                                <Link to="/"><FaPinterestP /></Link>
                            </span>                            
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="copyright">
                            &copy;Copyright 2025. <strong>eCart</strong> All Right Reseved.
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="payments d-flex justify-content-end">
                            <img src={PaymentImg} alt="Payment" height="40" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer