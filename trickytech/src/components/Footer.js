import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import { contactInfo, socialLinks } from '../config';

const Footer = () => {
    return (
        <footer className="footer-one">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col footer-brand">
                        <Link to="/" className="footer-logo" aria-label="Tricky Tech Home">
                            <img src="/images/transparent-logo.svg" alt="Tricky Tech" />
                        </Link>
                        <p>
                            Discover opportunities, connect with talent, and grow your career with Tricky Tech&apos;s trusted platform.
                        </p>
                    </div>

                    <div className="footer-col footer-links-col">
                        <h5 className="footer-title">Useful Links</h5>
                        <ul className="footer-nav-link">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><a href="/#services-section">Services</a></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col footer-support-col">
                        <h5 className="footer-title">Support</h5>
                        <ul className="footer-nav-link">
                            <li><Link to="/terms-of-use">Terms of use</Link></li>
                            <li><Link to="/terms-conditions">Terms & conditions</Link></li>
                            <li><Link to="/privacy-policy">Privacy</Link></li>
                            <li><Link to="/cookie-policy">Cookie policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col footer-contact-col">
                        <h5 className="footer-title">Get in Touch</h5>
                        <ul className="footer-nav-link contact-info">
                            <li>
                                <a href={`mailto:${contactInfo.email}`}>
                                    <img src="/images/icons/envelope.svg" alt="Email" className="contact-icon" />
                                    <span>{contactInfo.email}</span>
                                </a>
                            </li>
                            {contactInfo.contacts?.map((person) => (
                                <li key={person.phone}>
                                    <a href={`tel:${person.phone.replace(/\s/g, '')}`}>
                                        <img src="/images/icons/telephone.svg" alt="Phone" className="contact-icon" />
                                        <span>{person.name}: {person.phone}</span>
                                    </a>
                                </li>
                            ))}
                            <li className="address-line">
                                <a href={contactInfo.mapQueryUrl} target="_blank" rel="noreferrer">
                                    <img src="/images/icons/location.svg" alt="Address" className="contact-icon" />
                                    <span className="address-text"><strong>Address:</strong> {contactInfo.address}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="container bottom-footer-inner">
                    <p className="m-0">&copy; {new Date().getFullYear()} Tricky Tech Inc. All rights reserved</p>
                    <ul className="social-icon-bottom">
                        <li><a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="/images/icons/linkedin.svg" alt="LinkedIn" /></a></li>
                        <li><a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><img src="/images/icons/facebook.png" alt="Facebook" /></a></li>
                        <li><a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><img src="/images/icons/instagram.svg" alt="Instagram" /></a></li>
                        <li><a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src="/images/icons/whatsapp.svg" alt="WhatsApp" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
