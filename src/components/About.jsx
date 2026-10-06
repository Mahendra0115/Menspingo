import React from 'react';
import { FiUsers, FiTarget, FiAward, FiTrendingUp, FiCheckCircle, FiInfo } from 'react-icons/fi';
import './About.css';

const values = [
  { icon: <FiTarget />, title: 'Mission-Driven', desc: 'We build with purpose, ensuring every line of code serves your business goals.' },
  { icon: <FiUsers />, title: 'Client-Centric', desc: 'Your success is our metric. We listen, adapt, and deliver beyond expectations.' },
  { icon: <FiAward />, title: 'Excellence First', desc: 'Top-tier code quality, robust architecture, and pixel-perfect design every time.' },
  { icon: <FiTrendingUp />, title: 'Innovation Always', desc: 'We stay ahead of the curve, embracing the latest AI and web technologies.' },
];

const achievements = [
  'ISO-certified quality processes',
  '100% project delivery rate',
  'Agile and Scrum methodology',
  '24/7 post-launch support',
  'Dedicated project manager',
  'Secure and scalable architecture',
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-tag" style={{ textAlign: 'left' }}>
              <span className="badge"><FiInfo size={12} /> About Us</span>
            </div>
            <h2 className="about-title">
              We Are <span className="text-gradient">Menspingo</span>
              <br />Your Tech Growth Partner
            </h2>
            <p className="about-desc">
              Menspingo is a forward-thinking software startup dedicated to building intelligent,
              scalable, and beautiful digital solutions. We combine deep technical expertise with
              creative design thinking to deliver products that truly make a difference.
            </p>
            <p className="about-desc">
              Founded by passionate engineers and designers, we specialize in AI-driven applications,
              enterprise backends with Java and Spring Boot, and stunning React-based frontends.
            </p>
            <div className="achievements-list">
              {achievements.map((item, i) => (
                <div key={i} className="achievement-item">
                  <FiCheckCircle className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="values-grid">
              {values.map((val, i) => (
                <div key={i} className="value-card glass-card">
                  <div className="value-icon">{val.icon}</div>
                  <h4 className="value-title">{val.title}</h4>
                  <p className="value-desc">{val.desc}</p>
                </div>
              ))}
            </div>
            <div className="about-banner glass-card">
              <div className="banner-content">
                <div className="banner-stat">
                  <span className="banner-number">5+</span>
                  <span className="banner-label">Years Building</span>
                </div>
                <div className="banner-divider"></div>
                <div className="banner-stat">
                  <span className="banner-number">50+</span>
                  <span className="banner-label">Projects</span>
                </div>
                <div className="banner-divider"></div>
                <div className="banner-stat">
                  <span className="banner-number">30+</span>
                  <span className="banner-label">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
