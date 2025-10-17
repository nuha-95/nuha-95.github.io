import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#9ca3af' }}>
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to discuss projects or just connect!
        </p>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Mail size={20} style={{ color: '#e5e7eb' }} />
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: '600' }}>Email</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>nuha95nusratjahan@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={20} style={{ color: '#e5e7eb' }} />
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: '600' }}>Location</h4>
                    <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Phone size={20} style={{ color: '#e5e7eb' }} />
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: '600' }}>Phone</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>+8801312171533</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/nuha-95" target="_blank" className="social-link">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/nusrat-jahan-nuha/" target="_blank" className="social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;