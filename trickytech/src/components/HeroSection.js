import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../style/HeroSection.css';

const words = ["Recruitment Hub", "Certified Experts", "Tech Careers"];

const HeroSection = () => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                if (letterIndex > 0) {
                    setText(currentWord.substring(0, letterIndex - 1));
                    setLetterIndex(letterIndex - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % words.length);
                }
            } else {
                if (letterIndex < currentWord.length) {
                    setText(currentWord.substring(0, letterIndex + 1));
                    setLetterIndex(letterIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? 100 : 150);
        return () => clearTimeout(timeout);
    }, [letterIndex, isDeleting, wordIndex]);

    return (
        <section className="py-xl-8 py-6 pt-150 hero-section">
            <div className="container py-xl-6">
                <div className="row align-items-center gy-6 gy-xl-0 py-5">
                    <div className="col-lg-6 col-xxl-5 col-12">
                        <div className="d-flex flex-column gap-5">
                            <div className="d-flex flex-row gap-2 align-items-center">
                                <span>🚀</span>
                                <span className="text-primary fw-semibold">
                                    <h5 style={{fontWeight: 'bolder'}} className="mb-0">Empower Your Learning Journey Today</h5>
                                </span>
                            </div>
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex flex-column gap-2">
                                    <h3 className="mb-0 fs-50 fw-bolder">
                                        The #1 Tech<br />
                                        <span>{text}</span>
                                    </h3>
                                    <p className="mb-0">Hands-on experience and certifications to connect you with top IT opportunities.</p>
                                </div>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                                    <li className="d-flex flex-row gap-2">
                                        <span>✅</span><span>Industry Expert</span>
                                    </li>
                                    <li className="d-flex flex-row gap-2">
                                        <span>✅</span><span>Dedicated Support</span>
                                    </li>
                                    <li className="d-flex flex-row gap-2">
                                        <span>✅</span><span>Top Talent</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-grid d-md-flex flex-row gap-2">
                                <Link to="/contact" className="btn btn-lg btn-join">Join Our Network</Link>
                                <Link to="/job-opportunities" className="btn btn-lg btn-explore">Explore Job Opportunities</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 offset-xxl-1 col-lg-6 col-12 d-flex justify-content-center">
                        <Carousel id="heroImageSlider" interval={3000}>
                            <Carousel.Item>
                                <img src="/images/1_1.png" className="d-block rounded-4 new-f-section" alt="Slide 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/2_1.png" className="d-block rounded-4 new-f-section" alt="Slide 2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/4.png" className="d-block rounded-4 new-f-section" alt="Slide 3" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;