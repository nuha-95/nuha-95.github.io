import React, { useEffect, useState } from 'react';

const TechShowcase: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🎯' },
    { name: 'React', icon: '⚛️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📚' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 800);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, [isVisible, techStack.length]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'fadeIn 0.5s ease-in-out'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #374151, #4b5563)',
        borderRadius: '20px',
        padding: '3rem',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        animation: 'popUp 0.6s ease-out'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          animation: 'bounce 0.8s ease-in-out'
        }}>
          {techStack[currentTech].icon}
        </div>
        <h3 style={{
          color: '#ffffff',
          fontSize: '2rem',
          fontWeight: '700',
          margin: 0
        }}>
          {techStack[currentTech].name}
        </h3>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes popUp {
          0% { transform: scale(0.5) translateY(50px); opacity: 0; }
          50% { transform: scale(1.1) translateY(-10px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default TechShowcase;