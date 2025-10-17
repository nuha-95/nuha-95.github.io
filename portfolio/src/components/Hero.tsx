import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            <span style={{ color: '#9ca3af' }}>Hi! I am </span><br />
            <span style={{ color: '#f3f4f6' }}>Nusrat Jahan</span><br />
            <span style={{ color: '#f3f4f6' }}>Nuha</span>
          </h1>
          <p style={{ color: '#9ca3af' }}>I am a Computer Science Graduate specializing in AI/ML and Backend Development.</p>
          <div className="social-links">
            <a href="https://github.com/nuha-95" target="_blank" rel="noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nusrat-jahan-nuha/" target="_blank" rel="noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:nuha95nusratjahan@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-animation">
          <div className="orbit-container">
            <div className="orbit orbit-1">
              <div className="orbit-item orbit-item-1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="40" height="40" />
              </div>
              <div className="orbit-item orbit-item-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40" />
              </div>
              <div className="orbit-item orbit-item-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="40" height="40" />
              </div>
              <div className="orbit-item orbit-item-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="40" height="40" />
              </div>
            </div>
            <div className="orbit orbit-2">
              <div className="orbit-item orbit-item-5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" width="35" height="35" />
              </div>
              <div className="orbit-item orbit-item-6">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="35" height="35" />
              </div>
              <div className="orbit-item orbit-item-7">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" width="35" height="35" />
              </div>
              <div className="orbit-item orbit-item-8">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="35" height="35" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;