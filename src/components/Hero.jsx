import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiArrowRight, FiPlay, FiCode, FiCpu, FiGlobe } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="glow-dot"></span>
            <span>AI-Powered Software Solutions</span>
          </div>

          <h1 className="hero-title">
            Building the
            <span className="highlight-text"> Future </span>
            with
            <br />
            <TypeAnimation
              sequence={[
                'Artificial Intelligence', 2000,
                'Web Development', 2000,
                'Smart Automation', 2000,
                'Digital Innovation', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typed-text"
            />
          </h1>

          <p className="hero-description">
            Menspingo delivers cutting-edge software solutions from AI-powered applications
            to full-stack web platforms. We transform your vision into powerful digital experiences
            using modern technologies.
          </p>

          <div className="hero-actions">
            <Link to="services" smooth={true} duration={600} offset={-80} className="btn-primary">
              Explore Services <FiArrowRight />
            </Link>
            <Link to="portfolio" smooth={true} duration={600} offset={-80} className="btn-outline">
              <FiPlay /> View Portfolio
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card main-card glass-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="card-title">AI Processing</span>
            </div>
            <div className="code-block">
              <div className="code-line"><span className="code-kw">const</span> <span className="code-var"> ai</span> = <span className="code-fn">MenspinoAI</span>()</div>
              <div className="code-line"><span className="code-var">ai</span>.<span className="code-fn">analyze</span>(<span className="code-str">'data'</span>)</div>
              <div className="code-line"><span className="code-var">ai</span>.<span className="code-fn">predict</span>()</div>
              <div className="code-line code-output"><span className="code-comment">Model accuracy: 98.7%</span></div>
            </div>
            <div className="ai-metrics">
              <div className="metric"><FiCpu size={14} /><span>Neural Net Active</span><span className="metric-status">●</span></div>
              <div className="metric"><FiGlobe size={14} /><span>API Response: 45ms</span><span className="metric-status">●</span></div>
              <div className="metric"><FiCode size={14} /><span>Models Deployed: 12</span><span className="metric-status">●</span></div>
            </div>
          </div>
          <div className="floating-badge badge-1 glass-card">
            <FiCpu className="badge-icon" />
            <div><div className="badge-title">AI Models</div><div className="badge-sub">12 Active</div></div>
          </div>
          <div className="floating-badge badge-2 glass-card">
            <FiCode className="badge-icon" />
            <div><div className="badge-title">React + Spring</div><div className="badge-sub">Full Stack</div></div>
          </div>
          <div className="floating-badge badge-3 glass-card">
            <FiGlobe className="badge-icon" />
            <div><div className="badge-title">Global Reach</div><div className="badge-sub">10+ Countries</div></div>
          </div>
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
