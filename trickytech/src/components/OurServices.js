import React from 'react';
import { Link } from 'react-router-dom';
import '../style/OurServices.css';

const OurServices = () => {
    const services = [
        {
            imgSrc: "/images/s-1.jpg",
            alt: "Career",
            number: "01",
            title: "Career",
            content: "Career coaching in HR empowers professionals to identify their strengths, set clear goals, and navigate their career paths with confidence and purpose.",
            link: "/career-coaching"
        },
        {
            imgSrc: "/images/s-2.avif",
            alt: "Training",
            number: "02",
            title: "Training",
            content: "Training and development programs are essential for enhancing employees' skills, fostering career growth, and ensuring the overall success of an organization.",
            link: "/training-dev"
        },
        {
            imgSrc: "/images/s-4.jpg",
            alt: "Resume Building",
            number: "03",
            title: "Resume Building",
            content: "Get a tailored, ATS-friendly resume that highlights your skills and boosts your chances of landing your dream job!.",
            link: "/job-opportunities"
        },
        {
            imgSrc: "/images/img_19.jpg",
            alt: "Technical Support",
            number: "04",
            title: "Technical Support",
            content: "Our expert technical support ensures your profile stands out, helping you secure the right job faster! ",
            link: "/outplacement-services"
        }
    ];

    return (
        <section id="services-section" className="our-services-section">
            <div className="container">
                <div className="box-wrapper">
                    <h2 className="fw-600 fs-45 text-center mt-5 py-5">Our Services</h2>
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                                <figure className="shape-box shape-box_half">
                                    <img src={service.imgSrc} alt={service.alt} />
                                    <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                                    <figcaption>
                                        <div className="show-cont">
                                            <h3 className="card-no">{service.number}</h3>
                                            <h4 className="card-main-title">{service.title}</h4>
                                        </div>
                                        <p className="card-content">{service.content}</p>
                                        <Link to={service.link} className="read-more-btn">Read More</Link>
                                    </figcaption>
                                    <span className="after"></span>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;