import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="abstract-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Nusrat Jahan Nuha</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          Computer Science Graduate | AI/ML Specialist | Backend Developer
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://github.com/nuha-95" target="_blank" style={{ 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.2)', 
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nusrat-jahan-nuha/" target="_blank" style={{ 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.2)', 
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Linkedin size={24} />
          </a>
          <a href="mailto:nuha95nusratjahan@gmail.com" style={{ 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.2)', 
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;