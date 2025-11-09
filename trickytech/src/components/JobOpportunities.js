import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/JobOpportunities.css';
import HowItWorks from './HowItWorks';
import Blog from './Blog';
import JobPortalIntro from './JobPortalIntro';

const JobOpportunities = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Accordion toggle logic
  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="job-opportunities-page">
      {/* Banner */}
     <header
    className="inner-banner-one position-relative hero-overlay2"
>
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">Job Opportunities</h1>
            <p className="banner-sub">Discover curated IT roles &amp; fast-track your career with TrickyTech</p>
          </div>
        </div>
      </header>

      {/* Top Job Opportunities Section */}
      <section className="hero-banner-two position-relative pt-30">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-image">
              <img src="/images/img_39.jpg" alt="Top Job Opportunities" loading="lazy" />
            </div>
            <div className="hero-content">
              <h2 className="fs-45 section-title-job">Top Job Opportunities</h2>
              <p className="text-md lead">
                Explore a vast network of IT career opportunities with TrickyTech Solutions. Our expert-driven
                platform connects skilled professionals with leading companies, ensuring the perfect job match for
                your expertise. Take the next step in your career today! 🚀
              </p>
              <div className="hero-cta">
                <Link to="/jobs" className="btn btn-primary">Browse Jobs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Matched Jobs Banner - Updated as per reference */}
      <section className="fancy-banner-one py-5">
        <div className="matched-banner">
          <div className="container">
            <div className="matched-wrapper">
              <div className="matched-content">
                <h2>
                  Get your <span className="highlight">Matched Jobs</span> in a few minutes.
                </h2>
                <p>
                  Connect with top companies and secure your dream IT job effortlessly. 
                  Stand out with expert resume building and job support. 
                  Upload your CV now to fast-track your career.
                </p>
              </div>
              <div className="matched-media">
                <img src="/images/img_39.jpg" alt="Team Meeting" className="matched-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Land Your Dream Job Section - CLONED as per reference */}
      <section className="text-feature-one pt-50">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-media">
              <img src="/images/img_10.png" alt="Dream Job" loading="lazy" />
            </div>
            <div className="feature-text">
              <h2 className="fw-600 fs-45" style={{ color: "#1d4636", marginBottom: "12px" }}>
                Land your dream job<br /> <span style={{ color: "#2e7c4e" }}>fast.</span>
              </h2>
              <p className="mt-20 text-md" style={{ color: "#444", marginBottom: "18px" }}>
                Secure your dream job in no time with our efficient placement process, designed to connect you with
                top employers and fast-track your career success.
              </p>
              <ul className="benefits">
                <li>Streamlined Application Process</li>
                <li>Personalized Career Guidance</li>
                <li>Access to Exclusive Job Opportunities</li>
              </ul>
              <Link to="/about" className="btn btn-outline mt-20">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - CLONED as per reference */}
      <section className="faq-section">
        <div className="container">
          <div className="title-center">
            <h2>Questions &amp; Answers</h2>
            <p className="muted">Common queries about our hiring and trial process</p>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion" id="accordionTwo">
              {faqData.map(faq => (
                <div className="accordion-item" key={faq.id}>
                  <button
                    className={`accordion-header ${activeFAQ === `Fcollapse${faq.id}` ? 'open' : ''}`}
                    onClick={() => toggleFAQ(`Fcollapse${faq.id}`)}
                    aria-expanded={activeFAQ === `Fcollapse${faq.id}`}
                    aria-controls={`Fcollapse${faq.id}`}
                    id={`Fheading${faq.id}`}
                    type="button"
                  >
                    <span className="q-text">{faq.question}</span>
                    <span className="chev">{activeFAQ === `Fcollapse${faq.id}` ? '-' : '+'}</span>
                  </button>
                  <div
                    id={`Fcollapse${faq.id}`}
                    className={`accordion-body ${activeFAQ === `Fcollapse${faq.id}` ? 'show' : ''}`}
                    aria-labelledby={`Fheading${faq.id}`}
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Footer */}
      <Blog />
      <JobPortalIntro />
    </div>
  );
};

const faqData = [
  { id: 'One', question: 'How does the free trial work?', answer: 'A free trial allows you to access a service or product for a limited time without charge, after which you may be automatically billed unless you cancel beforehand.' },
  { id: 'Two', question: 'How do you find different criteria in your process?', answer: 'We evaluate different criteria through a systematic process of analysis, feedback, and continuous improvement to ensure optimal outcomes.' },
  { id: 'Three', question: 'What do you look for in a founding team?', answer: 'We look for a founding team with complementary skills, a shared vision, strong leadership, and the ability to adapt and execute.' },
  { id: 'Four', question: 'Do you recommend Pay as you go or Pre pay?', answer: 'We recommend choosing between Pay-as-you-go or Pre-pay based on your usage patterns and budget flexibility, with Pay-as-you-go for variable needs and Pre-pay for cost predictability.' },
  { id: 'Five', question: 'What do I get for $0 with my plan?', answer: 'With your $0 plan, you get limited access to basic features, allowing you to explore the service before upgrading to a paid plan.' }
];

export default JobOpportunities;
