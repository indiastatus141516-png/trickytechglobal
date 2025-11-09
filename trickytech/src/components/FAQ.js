import React, { useState } from 'react';
import '../style/FAQ.css';

const faqs = [
  {
    question: 'What does your career coaching program include?',
    answer: 'Our program covers resume building, interview preparation, job search strategies, career growth planning, and personalized coaching sessions.',
  },
  {
    question: 'Who can benefit from your career coaching services?',
    answer: 'Our coaching is ideal for job seekers, professionals looking for career growth, and individuals transitioning to new roles or industries.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients experience significant career improvements within three months of completing our coaching sessions.',
  },
  {
    question: 'Do you offer one-on-one coaching?',
    answer: 'Yes, we provide personalized one-on-one coaching tailored to your career goals and challenges.',
  },
  {
    question: 'How can I get started with your career coaching?',
    answer: 'You can sign up through our website, schedule a consultation, and begin your career transformation with our expert guidance.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
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
  );
};

export default FAQ;
