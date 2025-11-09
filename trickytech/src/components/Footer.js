import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import { contactInfo, socialLinks } from '../config';

const Footer = () => {
    return (
        <div className="footer-one bg-white">
            <div className="container">
                <div className="inner-wrapper pt-80">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-3 footer-intro mb-15">
                            <Link to="/" className="logo d-flex align-items-center">
                                <img src="/images/transparent-logo.svg" alt="Tricky Tech" />
                            </Link>
                            <p className="py-4">Discover opportunities, connect with talent, and grow your career with Tricky Tech's trusted platform!</p>
                        </div>
                        
                        <div className="col-lg-2 col-sm-4 mb-20">
                            <h5 className="footer-title">Useful Links</h5>
                            <ul className="footer-nav-link style-none">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about-us">About us</Link></li>
                                <li><a href="/#services-section">Services</a></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 mb-20">
                            <h5 className="footer-title">Support</h5>
                            <ul className="footer-nav-link style-none">
                                <li><Link to="/terms-of-use">Terms of use</Link></li>
                                <li><Link to="/terms-conditions">Terms & conditions</Link></li>
                                <li><Link to="/privacy-policy">Privacy</Link></li>
                                <li><Link to="/cookie-policy">Cookie policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-4 mb-20">
                            <h5 className="footer-title">Get in Touch</h5>
                            <ul className="footer-nav-link style-none contact-info">
                                <li><a href={`mailto:${contactInfo.email}`}><img src="/images/icons/envelope.svg" alt="Email" className="contact-icon" /> {contactInfo.email}</a></li>
                                <li><a href={`tel:${contactInfo.phone}`}><img src="/images/icons/telephone.svg" alt="Phone" className="contact-icon" /> {contactInfo.phone}</a></li>
                                <li className="address-line">
                                    <img src="/images/icons/location.svg" alt="Address" className="contact-icon" />
                                    <span>{contactInfo.address}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container">
                    <div className="row align-items-center gy-2">
                        <div className="col-md-6 order-md-last text-center text-md-end">
                            <ul className="style-none d-inline-flex social-icon-bottom">
                                <li><a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><img src="/images/icons/linkedin.svg" alt="LinkedIn" /></a></li>
                                <li><a href={socialLinks.facebook} target="_blank" rel="noreferrer"><img src="/images/icons/facebook.png" alt="facebook" /></a></li>
                                <li><a href={socialLinks.instagram} target="_blank" rel="noreferrer"><img src="/images/icons/instagram.svg" alt="Instagram" /></a></li>
                                <li><a href={socialLinks.whatsapp} target="_blank" rel="noreferrer"><img src="/images/icons/whatsapp.svg" alt="WhatsApp" /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 order-md-first text-center text-md-start">
                            <p className="text-white m-0">© {new Date().getFullYear()} Tricky Tech inc. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
