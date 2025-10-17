import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'C', 'C++', 'Scala']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Django', 'Django REST Framework', 'FastAPI', 'React.js', 'PyTorch', 'TensorFlow']
    },
    {
      title: 'AI/ML & Deep Learning',
      skills: ['Reinforcement Learning', 'PPO', 'Stable-Baselines3', 'CNNs', 'LSTMs', 'Transformers', 'YOLOv5', 'OpenCV']
    },
    {
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'PostGIS']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'EC2', 'S3', 'RDS', 'Lambda']
    },
    {
      title: 'Tools & Integration',
      skills: ['Git', 'GitLab', 'REST API', 'GraphQL', 'Celery', 'Nginx', 'Gunicorn']
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="card">
            <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;