import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../style/WhyChooseUs.css';

const accordionData = [
    {
        eventKey: "0",
        header: "Seamless Search",
        body: "Effortlessly find what you need with our intuitive search, tailored for simplicity and speed."
    },
    {
        eventKey: "1",
        header: "Hire Top Talents",
        body: "Discovering and hiring top talent is the cornerstone of building a successful and innovative team."
    },
    {
        eventKey: "2",
        header: "Protected Payments, Every Time",
        body: "Experience secure and reliable transactions with our robust payment protection system."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="faq-section bg-white position-relative why-choose-us-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-last">
                        <div className="title-one mb-40">
                            <div className="sub-title">Why choose us?</div>
                            <h2 className="main-font fw-600 color-blue fs-45">Limitless talent just a click away.</h2>
                        </div>
                        <div className="accordion-wrapper">
                            <Accordion defaultActiveKey="0" flush>
                                {accordionData.map(item => (
                                    <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                                        <Accordion.Header>{item.header}</Accordion.Header>
                                        <Accordion.Body><p>{item.body}</p></Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-first d-flex align-items-center mb-4 mb-lg-0">
                        <img src="/images/b-3.jpg" className="img-fluid lazy-img img-illustration" alt="Why Choose Us" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;