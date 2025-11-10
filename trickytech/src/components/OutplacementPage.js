import React, { useState } from 'react';
import '../style/OutplacementPage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Blog from './Blog';
import JobPortalIntro from './JobPortalIntro';
import CountUp from 'react-countup';





const clientLogos = [
  { src: "/images/clients/Tia.png", alt: "TIAA" },
  { src: "/images/clients/hum.png", alt: "Humana" },
  { src: "/images/clients/tcs.png", alt: "TCS" },
  { src: "/images/clients/ama.png", alt: "Amazon" },
  { src: "/images/clients/cent.png", alt: "Centene" },
  { src: "/images/clients/com.png", alt: "Comcast" },
  { src: "/images/clients/gold.png", alt: "GoldmanSach" },
  { src: "/images/clients/google.png", alt: "Google" },
  { src: "/images/clients/micross.png", alt: "Microsoft" },
];

const OutplacementPage = () => {
  const [activeTab, setActiveTab] = useState('career');

  const processSteps = [
    { number: '01', title: 'Initial Consultation', desc: 'In-depth discussion to understand your career goals and challenges.' },
    { number: '02', title: 'Personalized Planning', desc: 'Develop a tailored strategy for your career transition journey.' },
    { number: '03', title: 'Skills Enhancement', desc: 'Targeted training and development of crucial professional skills.' },
    { number: '04', title: 'Market Positioning', desc: 'Strategic personal branding and market exposure tactics.' }
  ];

  const benefitsData = {
    career: {
      title: 'Career Development',
      points: [
        'Personalized career coaching sessions',
        'Skills assessment and enhancement',
        'Industry-specific training modules',
        'Leadership development programs'
      ]
    },
    support: {
      title: 'Transition Support',
      points: [
        'Resume and LinkedIn optimization',
        'Interview preparation workshops',
        'Networking strategy development',
        'Salary negotiation guidance'
      ]
    },
    resources: {
      title: 'Premium Resources',
      points: [
        'Access to exclusive job boards',
        'Industry research reports',
        'Career development tools',
        'Professional network access'
      ]
    }
  };

  return (
    <div className="outplacement-page">
      {/* Existing Hero Banner Section */}
      <header className="hero-banner">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>OutPlacement Services</h1>
            <p className="hero-subtitle">Navigate Your Next Career Move with Confidence and Professional Support</p>
          </div>
          <div className="hero-image">
            <img src="/images/workingPeople.jpg" alt="Professional Support" />
          </div>
        </div>
      </header>

      {/* Enhanced Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <span className="section-tag">Why Choose Us</span>
              <h2>Your Trusted Partner in Career Transition</h2>
              <p>Navigating a career change can be challenging. At Outplacement Services, we provide comprehensive support to guide you through every step of your transition. Our expert coaches offer personalized strategies, from refining your resume to mastering interviews, ensuring you land your next role with confidence. We are committed to turning career challenges into opportunities for growth and success.</p>
              <div className="trust-indicators">
                <div className="trust-item">
                  <span className="trust-number">97%</span>
                  <p>Success Rate</p>
                </div>
                <div className="trust-item">
                  <span className="trust-number">2000+</span>
                  <p>Careers Transformed</p>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img src="/images/new.jpg" alt="Career Support" />
              <div className="experience-badge">
                <span>15+</span>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="process-section">
        <div className="container">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">How We Transform Careers</h2>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <span className="section-tag">What You Get</span>
          <h2 className="section-title">Comprehensive Career Support</h2>
          <div className="benefits-tabs">
            <div className="tab-headers">
              {Object.keys(benefitsData).map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {benefitsData[tab].title}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <ul className="benefits-list">
                {benefitsData[activeTab].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">Real Career Transformations</h2>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-image">
                <img src="/images/sucess1.jpg" alt="Success Story 1" />
              </div>
              <div className="story-content">
                <h3>From Finance to Tech Leadership</h3>
                <p>"TrickyTech helped me pivot my career successfully into tech management."</p>
                <span className="transition-time">3 Month Transition</span>
              </div>
            </div>
            {/* Add more story cards */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/sucess2.jpg" alt="Success Story 2" />
              </div>
              <div className="story-content">
                <h3>From Finance to Tech Leadership</h3>
                <p>"TrickyTech helped me pivot my career successfully into tech management."</p>
                <span className="transition-time">6 Month Transition</span>
              </div>
            </div><div className="story-card">
              <div className="story-image">
                <img src="/images/sucess3.jpg" alt="Success Story 1" />
              </div>
              <div className="story-content">
                <h3>From Finance to Tech Leadership</h3>
                <p>"TrickyTech helped me pivot my career successfully into tech management."</p>
                <span className="transition-time">3 Month Transition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Sections with Enhanced Styling */}
    <section className="achievements-section section-padding container text-center">
        <h3>Our Achievements at TrickyTech Solutions</h3>
        <div className="row mt-5">
          <div className="col-md-4 achievement-item">
            <h2 className="achievement-number">
              <CountUp end={8} duration={3} suffix="M+" enableScrollSpy scrollSpyOnce />
            </h2>
            <p className="achievement-label">Trust and Reliability</p>
          </div>
          <div className="col-md-4 achievement-item">
            <h2 className="achievement-number">
              <CountUp end={40} duration={3} suffix="K+" enableScrollSpy scrollSpyOnce />
            </h2>
            <p className="achievement-label">Global Reach</p>
          </div>
          <div className="col-md-4 achievement-item">
            <h2 className="achievement-number">
              <CountUp end={15} duration={3} suffix="B+" enableScrollSpy scrollSpyOnce />
            </h2>
            <p className="achievement-label">Economic Impact</p>
          </div>
        </div>
      </section>
    
      <Testimonials />
       <section className="clients-section section-padding container-fluid text-center">
        <h3 className="mb-5">Trusted by Leading Companies</h3>
        <Slider {...{
          dots: false,
          infinite: true,
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false,
          responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } }
          ]
        }}>
          {clientLogos.map((logo, index) => (
            <div key={index} className="client-logo">
              <img src={logo.src} alt={logo.alt} className="img-fluid" />
            </div>
          ))}
        </Slider>
      </section>   
      <FAQ />
      <Blog />
      {/* Call-to-Action Section */}
        <JobPortalIntro />

    </div>
  );
};

export default OutplacementPage;
