import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#9ca3af' }}>
          I am a motivated and driven Computer Science graduate with strong problem-solving skills and a passion for software
          development, testing, machine learning, and data analysis. Currently specializing in building and validating
          robust backend systems and scalable AI-driven solutions.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '600' }}>Education</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}><strong>BRAC University</strong></p>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Bachelor of Science in Computer Science</p>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>CGPA: 3.31/4.00</p>
          </div>
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '600' }}>Specialization</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>AI/ML</p>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Backend Systems</p>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Data Analysis</p>
          </div>
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '600' }}>Research</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>GANs for Medical Images</p>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Deep Learning</p>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Rare Diseases</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;