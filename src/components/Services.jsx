import React from 'react';
import {
  FiCpu, FiCode, FiGlobe, FiMessageSquare, FiPenTool, FiSmartphone,
  FiArrowRight, FiZap
} from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: <FiCpu />,
    title: 'AI-Based Services',
    color: '#6c63ff',
    description: 'Custom AI & ML solutions including predictive analytics, NLP models, computer vision, and intelligent automation pipelines tailored to your business needs.',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Automation'],
    tag: 'Most Popular'
  },
  {
    icon: <FiCode />,
    title: 'Software Development',
    color: '#00d4ff',
    description: 'Full-cycle software development from architecture to deployment. Enterprise-grade applications built with Java, Spring Boot, microservices, and cloud-native patterns.',
    features: ['Enterprise Applications', 'Microservices', 'API Development', 'Cloud Integration'],
    tag: null
  },
  {
    icon: <FiGlobe />,
    title: 'Website Development',
    color: '#ff6584',
    description: 'Modern, blazing-fast websites and web apps built with React, Next.js, and Node.js. SEO-optimized, mobile-first, and performance-driven digital experiences.',
    features: ['React / Next.js Apps', 'E-Commerce Platforms', 'CMS Integration', 'Performance Optimization'],
    tag: null
  },
  {
    icon: <FiPenTool />,
    title: 'Web Page Design',
    color: '#ffb347',
    description: 'Stunning UI/UX designs with Glassmorphism, motion design, and modern aesthetics. Figma-to-code pixel-perfect implementations that impress.',
    features: ['UI/UX Design', 'Figma Prototypes', 'Design Systems', 'Responsive Design'],
    tag: null
  },
  {
    icon: <FiMessageSquare />,
    title: 'AI Chatbot Development',
    color: '#7bed9f',
    description: 'Intelligent conversational AI chatbots powered by LLMs. Customer support bots, sales assistants, and knowledge-base bots with natural language understanding.',
    features: ['LLM Integration', 'Customer Support Bot', 'Multi-platform Deploy', 'Analytics Dashboard'],
    tag: 'Trending'
  },
  {
    icon: <FiSmartphone />,
    title: 'Logo & Brand Design',
    color: '#a29bfe',
    description: 'Professional logo design and complete brand identity packages. Unique, memorable visual identities that communicate your brand values and stand out.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Social Media Kit'],
    tag: null
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-tag">
          <span className="badge">
            <FiZap size={12} /> Our Services
          </span>
        </div>
        <h2 className="section-title">What We Build For You</h2>
        <p className="section-subtitle">
          From AI-powered systems to beautiful web interfaces — we deliver end-to-end digital 
          solutions that drive real business results.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card">
              {service.tag && (
                <div className="service-tag" style={{ background: `${service.color}22`, color: service.color, borderColor: `${service.color}44` }}>
                  {service.tag}
                </div>
              )}
              <div className="service-icon" style={{ background: `${service.color}18`, color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-dot" style={{ background: service.color }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <a href="#contact" className="service-link" style={{ color: service.color }}>
                  Learn more <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
