import React from 'react';
import { Link } from 'react-router-dom';
import '../style/AboutUs.css';

const AboutUs = () => {
    return (
        <section className="text-feature-one position-relative xl-pt-70 lg-pt-70 md-pt-80 pt-150 about-us-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 order-lg-last">
                        <div className="ps-lg-4">
                            <div className="title-one">
                                <p className="fs-18"><strong>About Us</strong></p>
                                <h2 className="fw-600 fs-50">Get the job of your dreams quickly.</h2>
                            </div>
                            <p className="mt-40 md-mt-20 mb-40 md-mb-20 text-md fs-16">Expert Resume Building, Profile Marketing, and Interview Preparation to Help You Land Your Dream Job</p>
                            <ul className="list-style-one style-none">
                                <li>Professional Resume Building</li>
                                <li>Technical Support</li>
                                <li>Strategic Profile Marketing</li>
                                <li>Comprehensive Interview Preparation</li>
                            </ul>
                            <Link to="/about-us" className="btn-five zoom-effect">Know More</Link>
                        </div>
                    </div>
                    <div className="col-lg-7 order-lg-first">
                        <div className="img-data position-relative me-xl-5 md-mt-20">
                            <div className="row align-items-center gx-xl-5">
                                <div className="col-6">
                                    <img src="/images/11.png" alt="About us 1" className="img-fluid br-15 lazy-img mt-35 md-mt-20" />
                                </div>
                                <div className="col-6">
                                    <img src="/images/banner_img_02.jpg" alt="About us 2" className="img-fluid br-15 lazy-img" />
                                    <img src="/images/4.jpg" alt="About us 3" className="img-fluid br-15 lazy-img mt-35 md-mt-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
