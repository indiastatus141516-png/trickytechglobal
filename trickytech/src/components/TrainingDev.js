import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/TrainingDev.css';
import Blog from './Blog';
import Testimonials from './Testimonials';
import JobPortalIntro from './JobPortalIntro';
import HowItWorks from './HowItWorks';

const TrainingDev = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="training-dev-page">
      {/* Hero Section */}
      <section className="hero-section1" style={{ backgroundImage: 'url(/images/group_team.jpg)' }}>
        <div className="hero-overlay1">
          <h1 className="hero-title1">Training And Development</h1>
        </div>
      </section>

      {/* Our Training And Development Section */}
      <section className="training-overview-section">
        <div className="container overview-container">
          <div className="overview-image">
            <img src="/images/group.jpg" alt="Our Training And Development" />
          </div>
          <div className="overview-content">
            <h2>Our Training And Development</h2>
            <p>
              Take the next step in your career with TrickyTech Solutions. Let's work together to unlock new opportunities and accelerate your professional growth.
            </p>
            <ul className="overview-list">
              <li>Personalized Career Guidance</li>
              <li>Resume Building & Optimization</li>
              <li>Profile Marketing</li>
              <li>Job Search Strategies</li>
              <li>Skill Development Advice</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Get in touch with us today!</Link>
          </div>
        </div>
      </section>

      {/* Training and Hiring Section */}
      <section className="training-hiring-section">
        <div className="container hiring-container">
          <div className="hiring-content">
            <h2>Training and Hiring the Top 3% of Experts</h2>
            <p>
              Access the largest network of professional talent online and easily explore top experts through our training platform on the TrickyTech Solutions website.
            </p>
          </div>
          <div className="hiring-image">
            <img src="/images/group_team.jpg" alt="Training and Hiring" />
          </div>
        </div>
      </section>

      {/* Training Features Accordion */}
      <section className="training-features-section">
        <div className="container features-container">
          <div className="features-image">
            <img src="/images/workingPeople.jpg" alt="Training Features" />
          </div>
          <div className="features-accordions">
            <div className="accordion-item">
              <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                <h3>Training</h3>
                <span>{activeAccordion === 0 ? '-' : '+'}</span>
              </div>
              {activeAccordion === 0 && (
                <div className="accordion-content">
                  <p>
                    Effective leadership inspires teams, drives innovation, and fosters a culture of growth and collaboration, empowering individuals to reach their full potential and achieve shared goals.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                <h3>Leadership</h3>
                <span>{activeAccordion === 1 ? '-' : '+'}</span>
              </div>
              {activeAccordion === 1 && (
                <div className="accordion-content">
                  <p>
                    Leadership development programs help individuals build skills to lead teams effectively and drive organizational success.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                <h3>Teamwork</h3>
                <span>{activeAccordion === 2 ? '-' : '+'}</span>
              </div>
              {activeAccordion === 2 && (
                <div className="accordion-content">
                  <p>
                    Teamwork fosters collaboration, communication, and trust among team members, leading to higher productivity and job satisfaction.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How does it work Section */}
    <HowItWorks />

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container faq-container">
          <h2>Questions & Answers</h2>
          {[ 
            'How does the free trial work?',
            'How do you find different criteria in your process?',
            'What do you look for in a founding team?',
            'Do you recommend Pay as you go or Pre pay?',
            'What do I get for $0 with my plan?'
          ].map((question, index) => (
            <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeFAQ === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {question}
                <span className="faq-icon">{activeFAQ === index ? '−' : '+'}</span>
              </button>
              {activeFAQ === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>
                    {index === 0 && 'Our free trial allows you to access basic features for 14 days without any commitment.'}
                    {index === 1 && 'We use advanced algorithms to match candidates based on skills, experience, and preferences.'}
                    {index === 2 && 'We look for a founding team with complementary skills, a shared vision, strong leadership, and the ability to adapt and execute.'}
                    {index === 3 && 'It depends on your needs; pay-as-you-go for flexibility, pre-pay for discounts.'}
                    {index === 4 && 'Free plans include basic profile setup and limited job searches.'}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
 <Testimonials />

      {/* Our Blog Section */}
<Blog />
<JobPortalIntro />
     
    </div>
  );
};

export default TrainingDev;
