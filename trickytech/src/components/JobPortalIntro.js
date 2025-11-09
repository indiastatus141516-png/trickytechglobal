import React from 'react';
import { Link } from 'react-router-dom';
import '../style/JobPortalIntro.css';

const JobPortalIntro = () => {
    return (
        <section className="job-portal-intro-section">
            <div className="container">
                <div className="wrapper">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6">
                            <div className="text-center text-lg-start">
                                <h2 className="main-title fw-600">Start Your Journey With Us.</h2>
                                <p>Find your next career move or hire top-tier talent. We connect potential with opportunity.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="btn-group d-flex justify-content-center justify-content-lg-end">
                                <Link to="/job-opportunities" className="btn-one">Looking for a Job?</Link>
                                <Link to="/contact" className="btn-two">Looking to Hire?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobPortalIntro;
