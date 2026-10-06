import React from 'react';
import { FiLayers } from 'react-icons/fi';
import './Technologies.css';

const techStack = [
  {
    category: 'Frontend', color: '#61dafb',
    techs: [
      { name: 'React JS', icon: '⚛️', level: 95 },
      { name: 'Next JS', icon: '▲', level: 90 },
      { name: 'JavaScript', icon: 'JS', level: 95 },
      { name: 'TypeScript', icon: 'TS', level: 85 },
    ]
  },
  {
    category: 'Backend', color: '#6db33f',
    techs: [
      { name: 'Spring Boot', icon: '🌿', level: 95 },
      { name: 'Java', icon: '☕', level: 95 },
      { name: 'Hibernate', icon: '🗄️', level: 88 },
      { name: 'Node.js', icon: '🟢', level: 85 },
    ]
  },
  {
    category: 'Frameworks', color: '#e0234e',
    techs: [
      { name: 'Nest JS', icon: '🐦', level: 82 },
      { name: 'Express', icon: '⚡', level: 88 },
      { name: 'REST APIs', icon: '🔗', level: 95 },
      { name: 'GraphQL', icon: '◉', level: 75 },
    ]
  },
  {
    category: 'AI and Cloud', color: '#ff6584',
    techs: [
      { name: 'Python AI', icon: '🐍', level: 88 },
      { name: 'TensorFlow', icon: '🧠', level: 80 },
      { name: 'AWS', icon: '☁️', level: 82 },
      { name: 'Docker', icon: '🐳', level: 85 },
    ]
  },
  {
    category: 'Database', color: '#00d4ff',
    techs: [
      { name: 'PostgreSQL', icon: '🐘', level: 90 },
      { name: 'MySQL', icon: '🐬', level: 90 },
      { name: 'MongoDB', icon: '🍃', level: 85 },
      { name: 'Redis', icon: '🔴', level: 78 },
    ]
  },
  {
    category: 'DevOps', color: '#ffd700',
    techs: [
      { name: 'Git / GitHub', icon: '🐙', level: 92 },
      { name: 'CI/CD', icon: '🔄', level: 80 },
      { name: 'Kubernetes', icon: '⚙️', level: 72 },
      { name: 'Linux', icon: '🐧', level: 85 },
    ]
  },
];

const marqueeItems = ['React', 'Next.js', 'Spring Boot', 'Java', 'Node.js', 'Nest.js', 'Hibernate', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'MongoDB'];

const Technologies = () => {
  return (
    <section id="technologies" className="tech-section">
      <div className="container">
        <div className="section-tag">
          <span className="badge"><FiLayers size={12} /> Tech Stack</span>
        </div>
        <h2 className="section-title">Technologies We Master</h2>
        <p className="section-subtitle">
          We leverage the most powerful and modern technologies to build robust, scalable,
          and high-performance solutions for every project.
        </p>

        <div className="tech-grid">
          {techStack.map((stack, index) => (
            <div key={index} className="tech-card glass-card">
              <div className="tech-category-header">
                <div className="category-dot" style={{ background: stack.color }}></div>
                <h3 className="category-name">{stack.category}</h3>
              </div>
              <div className="tech-items">
                {stack.techs.map((tech, i) => (
                  <div key={i} className="tech-item">
                    <div className="tech-info">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-level">{tech.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${tech.level}%`, background: `linear-gradient(90deg, ${stack.color}80, ${stack.color})` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-marquee-section">
          <p className="marquee-label">Trusted by teams using</p>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((t, i) => (
                <span key={i} className="marquee-item">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
