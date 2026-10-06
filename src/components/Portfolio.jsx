import React, { useState } from 'react';
import { FiBriefcase, FiExternalLink, FiGithub } from 'react-icons/fi';
import './Portfolio.css';

const projects = [
  {
    title: 'AI Business Analytics Platform',
    category: 'AI / ML',
    color: '#6c63ff',
    description: 'Enterprise-grade AI platform for real-time business intelligence with predictive analytics and automated reporting dashboards.',
    tags: ['Python', 'TensorFlow', 'React', 'Spring Boot'],
    emoji: '🧠'
  },
  {
    title: 'E-Commerce Marketplace',
    category: 'Web Development',
    color: '#00d4ff',
    description: 'Full-stack multi-vendor marketplace with AI-powered product recommendations, real-time inventory, and payment gateway integration.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    emoji: '🛒'
  },
  {
    title: 'Smart HR Management System',
    category: 'Enterprise Software',
    color: '#ff6584',
    description: 'Complete HRMS with Java Spring Boot backend, Hibernate ORM, employee onboarding, payroll, and attendance tracking modules.',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'React'],
    emoji: '👥'
  },
  {
    title: 'AI Customer Support Chatbot',
    category: 'AI Chatbot',
    color: '#7bed9f',
    description: 'Intelligent multi-channel chatbot integrated with LLM APIs. Supports WhatsApp, web, and mobile with 24/7 automated resolution.',
    tags: ['NestJS', 'OpenAI API', 'React', 'MongoDB'],
    emoji: '🤖'
  },
  {
    title: 'FinTech Banking Dashboard',
    category: 'Web App',
    color: '#ffd700',
    description: 'Secure banking dashboard with real-time transaction monitoring, fraud detection AI, and responsive design for web and mobile.',
    tags: ['React', 'Java', 'Spring Security', 'MySQL'],
    emoji: '💳'
  },
  {
    title: 'Brand Identity Suite',
    category: 'Logo & Design',
    color: '#a29bfe',
    description: 'Complete brand identity creation — logo design, color palettes, typography, brand guidelines, and social media kit for 10+ brands.',
    tags: ['Figma', 'Adobe XD', 'Illustrator', 'Branding'],
    emoji: '🎨'
  },
];

const categories = ['All', 'AI / ML', 'Web Development', 'Enterprise Software', 'AI Chatbot', 'Web App', 'Logo & Design'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-tag">
          <span className="badge">
            <FiBriefcase size={12} /> Portfolio
          </span>
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A glimpse into what we've built — from AI platforms to enterprise systems and design experiences.
        </p>

        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((project, index) => (
            <div key={index} className="portfolio-card glass-card">
              <div className="portfolio-thumb" style={{ background: `${project.color}15` }}>
                <div className="project-emoji">{project.emoji}</div>
                <div className="project-glow" style={{ background: project.color }}></div>
              </div>
              <div className="portfolio-body">
                <div className="project-category" style={{ color: project.color }}>
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button className="project-btn">
                    <FiExternalLink size={14} /> Live Demo
                  </button>
                  <button className="project-btn outline">
                    <FiGithub size={14} /> Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
