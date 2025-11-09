import React from 'react';
import '../style/HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="how-it-works-two position-relative how-it-works-section">
            <div className="container">
                <div className="title-one d-flex align-items-center justify-content-between text-center mb-45 lg-mb-20">
                    <span className="line"></span>
                    <h2 className="fw-600 ps-3 pe-3 fs-45">How does it work?</h2>
                    <span className="line"></span>
                </div>

                <div className="border-bottom border-md0">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 card-hover step-one">
                                <div className="numb fw-600 d-flex align-items-center justify-content-center m-auto"><span>01</span></div>
                                <div className="title fw-600 text-lg text-dark mt-25 mb-10"> Create Your Profile and Get Expert Assistance</div>
                                <p className="fs-16">Sign up on Tricky Tech and complete your profile. Access our expert services, including resume building and profile marketing, to ensure you stand out to potential employers.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 card-hover step-two">
                                <div className="numb fw-600 d-flex align-items-center justify-content-center m-auto"><span>02</span></div>
                                <div className="title fw-600 text-lg text-dark mt-25 mb-10 fs-20">Explore Tailored Job <br />Opportunities.</div>
                                <p className="fs-16"> Browse a wide range of job listings that match your skills and career goals. Our platform makes it easy to search for opportunities across various<br /> industries.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 card-hover step-three">
                                <div className="numb fw-600 d-flex align-items-center justify-content-center m-auto"><span>03</span></div>
                                <div className="title fw-600 text-lg text-dark mt-25 mb-10 fs-20">Apply, Connect, and Get<br /> Hired.</div>
                                <p className="fs-16">Submit applications directly through Tricky Tech. With your professionally crafted resume and optimized profile, you're ready to impress employers and secure your dream job.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;