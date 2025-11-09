import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/CareerCoaching.css';
import '../style/FAQ.css';
import Testimonials from './Testimonials';
import Blog from './Blog';
import JobPortalIntro from './JobPortalIntro';


const services = [
  {
    icon: '/images/icons/icon_12.svg',
    title: 'Resume Building & Optimization',
    description: 'We craft impactful resumes tailored to industry standards, ensuring your skills and experience stand out to recruiters.',
  },
  {
    icon: '/images/icons/icon_13.svg',
    title: 'Profile Marketing',
    description: 'We enhance your online presence on LinkedIn and job portals, boosting visibility and increasing your chances of getting noticed by top employers.',
  },
  {
    icon: '/images/icons/icon_14.svg',
    title: 'Interview Coaching',
    description: 'Through mock interviews and expert feedback, we help you build confidence and master the art of presenting yourself effectively.',
  },
  {
    icon: '/images/icons/icon_15.svg',
    title: 'Career Guidance',
    description: 'Personalized one-on-one sessions to assess your goals, refine your career strategy, and create a roadmap for professional success.',
  },
  {
    icon: '/images/icons/icon_16.svg',
    title: 'Job Search Support',
    description: 'We equip you with effective strategies, networking techniques, and recruiter connections to secure your ideal job faster.',
  },
  {
    icon: '/images/icons/icon_17.svg',
    title: 'Ongoing Support & Mentorship',
    description: 'Continuous career guidance, skill enhancement, and professional networking to help you achieve long-term success.',
  },
];

const achievements = [
  {
    number: '01',
    title: 'Client Success Stories',
    description: 'Our coaching programs have empowered numerous clients to successfully transition into new roles, advance their careers, and achieve their professional aspirations.',
  },
  {
    number: '02',
    title: 'High Satisfaction Rates',
    description: 'With a 95% satisfaction rate, our career coaching services are praised for their personalized guidance and actionable advice.',
  },
  {
    number: '03',
    title: 'Proven Impact',
    description: 'Over 80% of our clients have seen significant improvements in their job search strategies, interview skills, and overall career growth within coaching sessions.',
  },
];

const faqs = [
  {
    id: 'faqOne',
    headingId: 'headingOne',
    question: 'What does your career coaching program include?',
    answer: 'Our program covers resume building, interview preparation, job search strategies, career growth planning, and personalized coaching sessions.',
    collapsed: true,
  },
  {
    id: 'faqTwo',
    headingId: 'headingTwo',
    question: 'Who can benefit from your career coaching services?',
    answer: 'Our coaching is ideal for job seekers, professionals looking for career growth, and individuals transitioning to new roles or industries.',
    collapsed: true,
  },
  {
    id: 'faqThree',
    headingId: 'headingThree',
    question: 'How long does it take to see results?',
    answer: 'Most clients experience significant career improvements within three months of completing our coaching sessions.',
    collapsed: false,
  },
  {
    id: 'faqFour',
    headingId: 'headingFour',
    question: 'Do you offer one-on-one coaching?',
    answer: 'Yes, we provide personalized one-on-one coaching tailored to your career goals and challenges.',
    collapsed: true,
  },
  {
    id: 'faqFive',
    headingId: 'headingFive',
    question: 'How can I get started with your career coaching?',
    answer: 'You can sign up through our website, schedule a consultation, and begin your career transformation with our expert guidance.',
    collapsed: true,
  },
];


const CareerCoaching = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="career-page">
      {/* Banner */}
      <section className="career-banner" role="banner" aria-label="Career Coaching Banner">
        <div className="banner-content">
          <h2 tabIndex="0">Career Coaching</h2>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="career-intro" aria-labelledby="career-intro-title">
        <div className="intro-images">
          <img src="/images/01.jpg" alt="Professional man working on career development" loading="lazy" />
          <img src="/images/02.jpg" alt="Professional woman working on career development" loading="lazy" />
        </div>
        <div className="intro-text">
          <p className="subtitle">Career Coaching Services</p>
          <h3 id="career-intro-title">Unlock Your Career Potential with TrickyTech Solutions</h3>
          <p>
            At TrickyTech Solutions, we empower professionals with personalized career coaching designed to refine job search strategies, boost confidence, and accelerate career growth. Whether you're a recent graduate, mid-career professional, or considering a career change, our tailored coaching ensures you stand out in today's competitive market.
          </p>
          <Link to="/about-us" className="btn btn-primary" aria-label="Learn more about TrickyTech Solutions career coaching">Learn More</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="career-services" aria-labelledby="services-title">
        <h2 id="services-title" className="section-title">What We Offer</h2>
        <p className="section-subtitle">Empowering Careers with Expert Coaching, Tailored Strategies, and Proven Solutions</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card wow fadeInUp" style={{animationDelay: `${index * 0.1}s`}} tabIndex="0" aria-label={service.title}>
              <div className="service-icon">
                <img src={service.icon} alt={`${service.title} icon`} loading="lazy" />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="career-detailed" aria-labelledby="detailed-services-title">
        <div className="detailed-text">
          <h2 id="detailed-services-title">Our Career Coaching Services Include:</h2>
          <p>Take the next step in your career with TrickyTech Solutions. Let’s work together to unlock new opportunities and accelerate your professional growth!</p>
          <ul>
            <li><i className="fas fa-check-circle"></i> Personalized Career Guidance</li>
            <li><i className="fas fa-check-circle"></i> Resume Building & Optimization</li>
            <li><i className="fas fa-check-circle"></i> Profile Marketing</li>
            <li><i className="fas fa-check-circle"></i> Job Search Strategies</li>
            <li><i className="fas fa-check-circle"></i> Skill Development Advice</li>
          </ul>
          <Link to="/contact" className="btn btn-outline-primary" aria-label="Get in touch with TrickyTech Solutions for career coaching">Get in touch with us today!</Link>
        </div>
        <div className="detailed-image">
          <img src="/images/b-3.jpg" alt="Career coaching detailed visual" loading="lazy" />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="career-achievements" aria-labelledby="achievements-title">
        <h2 id="achievements-title" className="section-title">Our Achievements</h2>
        <p className="section-subtitle">We take pride in our achievements, demonstrating our dedication to excellence and client success in career coaching.</p>
        <div className="achievements-grid">
          {achievements.map((ach, index) => (
            <div key={index} className="achievement-card wow fadeInUp" style={{animationDelay: `${index * 0.1}s`}} tabIndex="0" aria-label={ach.title}>
              <div className="achievement-number">{ach.number}</div>
              <h4>{ach.title}</h4>
              <p>{ach.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
      {/* Blog & Job Portal Intro */}
      <Blog />

      {/* FAQ Section */}
      <section id="faq" className="faq-section" aria-label="Frequently Asked Questions">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JobPortalIntro />
    </div>
  );
};

export default CareerCoaching;
