import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-tag">
          <span className="badge">
            <FiMessageCircle size={12} /> Contact Us
          </span>
        </div>
        <h2 className="section-title">Let's Build Something Amazing</h2>
        <p className="section-subtitle">
          Have a project in mind? We'd love to hear about it. Drop us a message and 
          we'll get back to you within 24 hours.
        </p>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info">
            <div className="info-card glass-card">
              <h3 className="info-heading">Get in Touch</h3>
              <p className="info-desc">
                Ready to transform your business with AI and modern web technology? 
                Let's start a conversation.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FiMail />
                  </div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">hello@menspingo.com</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value">+91 98765 43210</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <FiMapPin />
                  </div>
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-value">India (Remote Worldwide)</div>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-btn"><FiLinkedin /></a>
                <a href="#" className="social-btn"><FiGithub /></a>
                <a href="#" className="social-btn"><FiTwitter /></a>
                <a href="#" className="social-btn"><FiMail /></a>
              </div>

              <div className="availability-badge">
                <span className="glow-dot"></span>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-wrap">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              {submitted && (
                <div className="success-msg">
                  ✅ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service...</option>
                  <option>AI-Based Services</option>
                  <option>Software Development</option>
                  <option>Website Development</option>
                  <option>Web Page Design</option>
                  <option>AI Chatbot Development</option>
                  <option>Logo & Brand Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary submit-btn">
                Send Message <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
