import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../style/Testimonials.css';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const testimonials = [
        {
            review: "Impressive!",
            stars: 5,
            quote: "“The resume building service was a game-changer! Tricky Tech made my profile stand out and boosted my confidence for interviews. Highly recommend!”",
            authorImg: "/images/img_14.jpg",
            authorName: "David L",
            authorTitle: "Data Analyst"
        },
        {
            review: "Nice work!",
            stars: 5,
            quote: "\"Thanks to Tricky Tech, I had a professional resume and a strong online profile that attracted recruiters. Their interview preparation was the key to my success”",
            authorImg: "/images/img_15.jpg",
            authorName: "Mark T",
            authorTitle: "Software Engineer"
        },
        {
            review: "Impressive!",
            stars: 5,
            quote: "“Tricky Tech helped me craft the perfect resume and market my profile to the right employers. Thanks to their interview prep, I nailed my interview and got the job! ”",
            authorImg: "/images/img_14.jpg",
            authorName: "Raj P",
            authorTitle: "Frontend Developer"
        },
        {
            review: "Nice work!",
            stars: 5,
            quote: "\"I was stuck in my job search until Tricky Tech helped me optimize my resume and profile. Their expert interview coaching gave me the edge I needed to land my dream role”",
            authorImg: "/images/img_15.jpg",
            authorName: "Sarah M",
            authorTitle: "Frontend Developer"
        }
    ];

    return (
        <section className="feedback-section-two position-relative lg-pt-20 mt-100 xl-mt-150 md-mt-30 testimonials-section">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="title-one mt-50">
                            <div className="sub-title">TESTIMONIAL</div>
                            <h2 className="fw-600 fs-45">What Our Clients Say</h2>
                        </div>
                        <div className="fw-500 rating-title mt-50 lg-mt-40 mb-5 fs-35 new-cus-color">A+ Rating</div>
                        <p className="fs-16">Hear from our satisfied clients who have transformed their careers with Tricky Tech expert resume building and job support services!.</p>
                    </div>

                    <div className="col-lg-8 ms-auto">
                        <div className="slider-wrapper ms-lg-5">
                            <Slider {...settings}>
                                {testimonials.map((testimonial, index) => (
                                    <div className="item" key={index}>
                                        <div className="feedback-block-two">
                                            <div className="review fw-500 fs-24 new-cus-color">{testimonial.review}</div>
                                            <ul className="style-none d-flex rating">
                                                {[...Array(testimonial.stars)].map((e, i) => <li key={i}><a href="#!" onClick={(e) => e.preventDefault()}><i className="bi bi-star-fill"></i></a></li>)}
                                            </ul>
                                            <blockquote className="mt-40 lg-mt-20 mb-50 lg-mb-30 text-md text-dark fs-18">{testimonial.quote}</blockquote>
                                            <div className="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-20">
                                                <div className="d-flex align-items-center">
                                                    <img src={testimonial.authorImg} alt={testimonial.authorName} className="author-img rounded-circle" />
                                                    <div className="ms-3">
                                                        <div className="name fw-500 text-dark">{testimonial.authorName}</div>
                                                        <span className="opacity-50">{testimonial.authorTitle}</span>
                                                    </div>
                                                </div>
                                                <img src="/images/shape_26.svg" alt="" className="quote-icon" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;