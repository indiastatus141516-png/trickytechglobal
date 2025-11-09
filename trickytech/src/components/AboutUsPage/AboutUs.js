import React from 'react';
import '../../style/AboutUs.css';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HowItWorks from '../HowItWorks';
import FAQ from '../FAQ';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', imgSrc: '/images/team/img_20.jpg' },
  { name: 'Jane Smith', role: 'Chief Technology Officer', imgSrc: '/images/team/img_20.jpg' },
  { name: 'Peter Jones', role: 'Lead Recruiter', imgSrc: '/images/team/img_20.jpg' },
  { name: 'Sara Williams', role: 'Head of Marketing', imgSrc: '/images/team/img_20.jpg' },
];

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

const whyChooseUsData = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></svg>,
    title: "Expertise in IT Recruitment",
    description: "Specializing in IT roles ensures you connect with professionals and companies that understand the industry's unique demands."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-window-fullscreen" viewBox="0 0 16 16"><path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/><path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zM1 6h14v8H1z"/></svg>,
    title: "User-Friendly Platform",
    description: "Intuitive design and easy navigation make your experience seamless from start to finish."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16"><path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12.5V6a5 5 0 0 0-5-5"/></svg>,
    title: "Dedicated Support",
    description: "We offer expert resume building, personalized analysis, and targeted profile marketing to boost your job search."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 .5h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255l.653.5c.178.137.283.345.283.565a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5c0-.22.105-.428.283-.565l.653-.5a.905.905 0 0 0 .537-.255L7.5 13.173v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/></svg>,
    title: "Proven Track Record",
    description: "Our success stories speak for themselves. Join a network of professionals who have advanced their careers with us."
  }
];


const AboutUs = () => {
  return (
    <div className="about-page-main-content">
      <section className="about-page-hero text-center">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Driving Careers Forward</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">About us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      

      <section className="about-intro-section section-padding">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <img src="/images/group_team.jpg" alt="Team" className="img-fluid rounded about-intro-image" />
            </div>
            <div className="col-lg-6">
              <div className="p-lg-4 about-intro-text-block">
                <h2>Unlock Your Future with TrickyTech Solutions!</h2>
                <p>
                  At TrickyTech Solutions, we empower IT professionals to land their dream jobs with expert guidance and strategic job placement. From resume building to interview preparation, we provide the tools you need to stand out in today's competitive job market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision-section section-padding container text-center">
        <h3>Supporting the Next Generation of Innovators</h3>
        <div className="row mt-4 justify-content-center g-4">
          <div className="col-xl-5 col-md-8 mission-vision-card d-flex flex-column">
            <h5>Mission</h5>
            <p>
              “At TrickyTech Solutions, we connect exceptional talent with premier opportunities, cultivating a vibrant ecosystem. We are dedicated to empowering careers by partnering with businesses to build high-performing IT teams that drive innovation and success.”
            </p>
          </div>
          <div className="col-xl-5 col-md-8 mission-vision-card d-flex flex-column">
            <h5>Vision</h5>
            <p>
              “Our vision is to be the leading catalyst in shaping the future of IT careers. We aspire to be the preferred destination for individuals seeking meaningful professional growth and for businesses striving to build dynamic, innovative, and high-caliber IT teams.”
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="why-choose-us-page-section text-white text-center section-padding">
        <h3>Why Choose TrickyTech Solutions ?</h3>
        <div className="row mt-5 justify-content-center g-4">
          {whyChooseUsData.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="why-choose-us-item">
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <section className="team-section section-padding container text-center">
        <h3>Meet Our Team</h3>
        <p className="lead text-muted mb-5">The professionals behind our success.</p>
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="team-member-card">
                <img src={member.imgSrc} alt={member.name} className="team-member-img" />
                <div className="team-member-info">
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

    </div>
  );
};

export default AboutUs;
