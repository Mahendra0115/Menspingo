import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpeg';
import './Footer.css';

const Footer = () => {
  const services = ['AI-Based Services', 'Software Development', 'Website Development', 'Web Page Design', 'AI Chatbot', 'Logo Design'];
  const technologies = ['React JS', 'Next JS', 'Spring Boot', 'Java + Hibernate', 'Node.js', 'Nest JS'];
  const company = ['About Us', 'Portfolio', 'Blog', 'Careers', 'Privacy Policy', 'Terms of Service'];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Menspingo" className="footer-logo-img" />
              </div>
              <p className="footer-tagline">
                Building intelligent software solutions for the future. AI-powered. Scalable. Beautiful.
              </p>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <FiMail size={14} />
                  <a href="mailto:info@menspingo.in" className="footer-contact-link">info@menspingo.in</a>
                </div>
                <div className="footer-contact-item">
                  <FiMail size={14} />
                  <a href="mailto:contact@menspingo.in" className="footer-contact-link">contact@menspingo.in</a>
                </div>
                <div className="footer-contact-item">
                  <FiMail size={14} />
                  <a href="mailto:hr@menspingo.in" className="footer-contact-link">hr@menspingo.in <span className="footer-contact-badge">Careers</span></a>
                </div>
                <div className="footer-contact-item">
                  <FiPhone size={14} />
                  <a href="tel:+919106140115" className="footer-contact-link">+91 91061 40115</a>
                </div>
                <div className="footer-contact-item">
                  <FiMapPin size={14} />
                  <span>India · Remote Worldwide</span>
                </div>
              </div>
              <div className="footer-social">
                <a href="https://www.linkedin.com/company/mensapingo-tech/posts/?viewAsMember=true" target="_blank" rel="noreferrer" className="footer-social-btn" title="LinkedIn"><FiLinkedin /></a>
                <a href="https://github.com/MensPingo" target="_blank" rel="noreferrer" className="footer-social-btn" title="GitHub"><FiGithub /></a>
                <a href="mailto:info@menspingo.in" className="footer-social-btn" title="Email"><FiMail /></a>
              </div>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                {services.map((s, i) => (
                  <li key={i}><a href="#services">{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="footer-col">
              <h4 className="footer-col-title">Technologies</h4>
              <ul className="footer-links">
                {technologies.map((t, i) => (
                  <li key={i}><a href="#technologies">{t}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                {company.map((c, i) => (
                  <li key={i}><a href="#about">{c}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} <strong>Menspingo</strong>. All rights reserved. Built with ❤️ in India.
            </p>
            <Link to="hero" smooth={true} duration={800} className="back-to-top" title="Back to top">
              <FiArrowUp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
