import React from 'react';
import '../style/Services.css';

const servicesData = [
    {
        logoSrc: "/images/1.png",
        alt: "IT Job Placement",
        title: "IT Job Placement",
        description: "Our IT job placement services connect top-tier talent with leading companies in the tech industry. We specialize in matching skilled professionals with the right roles, ensuring both clients and candidates find the perfect fit.",
        bgSrc: "/images/workingPeople.jpg"
    },
    {
        logoSrc: "/images/2.png",
        alt: "Career Guidance",
        title: "Career Guidance",
        description: "Our career guidance services are designed to help IT professionals navigate their career paths with confidence. We provide personalized advice on skill development, certifications, and industry trends.",
        bgSrc: "/images/s-2.avif"
    },
    {
        logoSrc: "/images/3.png",
        alt: "Tailored Job Support",
        title: "Tailored Job Support",
        description: "We offer personalized guidance on resume building, interview preparation, job search strategies, and networking opportunities to assist IT professionals in achieving their career goals.",
        bgSrc: "/images/s-4.jpg"
    }
];

const Services = () => {
    return (
        <section className="services-section">
            <div className="container">
                <div className="title-one text-center mb-5">
                    <div className="sub-title">What We Do</div>
                    <h2 className="fw-600">Our Core Offerings</h2>
                    <p className="fs-18 mt-3">We provide comprehensive support to help you succeed in your IT career.</p>
                </div>

                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="main">
                                <div className="service">
                                    <div className="service-bg" style={{ backgroundImage: `url(${service.bgSrc})` }}></div>
                                    <div className="service-overlay"></div>
                                    <div className="service-content">
                                        <div className="service-logo">
                                            <img src={service.logoSrc} width="70px" alt={service.alt} />
                                        </div>
                                        <h4 className="fw-bold">{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;