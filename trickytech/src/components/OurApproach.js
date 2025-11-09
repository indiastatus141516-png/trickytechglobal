import React from 'react';
import '../style/OurApproach.css';
import HowItWorks from './HowItWorks';
import OurServices from './OurServices';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Stats from './Stats';
import FAQ from './FAQ';

const coreValues = [
  {
    icon: 'bi bi-people-fill',
    title: 'Client-Centric',
    desc: "We prioritize our clients' needs, ensuring tailored solutions and exceptional service that drive their success."
  },
  {
    icon: 'bi bi-lightbulb-fill',
    title: 'Innovation',
    desc: 'We embrace creativity and cutting-edge solutions to stay ahead in a dynamic industry and deliver the best results.'
  },
  {
    icon: 'bi bi-hand-thumbs-up-fill',
    title: 'Integrity',
    desc: 'We operate with transparency and honesty, building long-term relationships based on trust and respect.'
  },
  {
    icon: 'bi bi-graph-up-arrow',
    title: 'Excellence',
    desc: 'We are committed to the highest standards of quality in everything we do, from candidate placement to client support.'
  }
];

const OurApproach = () => {
  return (
    <div className="our-approach-page">
      {/* Hero Section */}
      <header className="hero-banner">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Our Approach</h1>
            <p className="hero-subtitle">A Partnership for Growth and Success</p>
          </div>
          <div className="hero-image">
            <img src="/images/group_team.jpg" alt="Our Team" />
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content text-center">
            <span className="section-tag">Our Philosophy</span>
            <h2>Dedicated to Empowering Careers</h2>
            <p>At Vyom Vision, we believe in a holistic approach to career development and outplacement services. Our methodology is designed to empower individuals with the skills, knowledge, and confidence they need to navigate their career paths successfully. We are more than just a service provider; we are a dedicated partner in your professional journey.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-6 col-md-10">
              <div className="mission-vision-card">
                <h5>Our Mission</h5>
                <p>“To connect exceptional talent with premier opportunities, cultivating a vibrant ecosystem. We are dedicated to empowering careers by partnering with businesses to build high-performing IT teams that drive innovation and success.”</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="mission-vision-card">
                <h5>Our Vision</h5>
                <p>“To be the leading catalyst in shaping the future of IT careers. We aspire to be the preferred destination for individuals seeking meaningful professional growth and for businesses striving to build dynamic, innovative, and high-caliber IT teams.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <div className="container">
          <span className="section-tag text-center d-block">Our Values</span>
          <h2 className="section-title text-center">What Drives Us</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <FAQ />
    </div>
  );
};

export default OurApproach;