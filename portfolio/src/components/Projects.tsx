import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Maveric - Cellular Network Optimization Platform',
      description: 'Open-source contributor to Meta project under LF Connectivity. Developed PPO-based Reinforcement Learning pipeline for Mobility Robustness Optimization (MRO), enabling automated tuning of handover parameters.',
      technologies: ['Python', 'Reinforcement Learning', 'PPO', 'REST APIs', 'Stable-Baselines3'],
      features: ['Automated handover parameter tuning', 'Modular RL pipeline architecture', 'REST API endpoints for remote execution'],
      githubUrl: 'https://github.com/nuha-95/maveric'
    },
    {
      title: 'ISPToolbox - Infrastructure Business Planning Suite',
      description: 'Open-source contributor to Meta project under LF Connectivity. Worked on Docker-based self-hosting and AWS S3 integration. Developed backend modules using Django and PostGIS for GIS data management.',
      technologies: ['Django', 'PostGIS', 'Docker', 'AWS S3', 'Celery', 'Flower', 'PostgreSQL'],
      features: ['GIS data management', 'DSM generation from LiDAR', 'Asynchronous task processing', 'Scalable deployment'],
      githubUrl: 'https://github.com/tanzim10/ISPToolbox'
    },
    {
      title: 'Time Series Forecasting',
      description: 'End-to-end forecasting pipeline using statistical, machine learning, and deep learning models to predict Tesla stock prices with comprehensive unit testing.',
      technologies: ['Prophet', 'SARIMAX', 'LSTM', 'XGBoost', 'PyTest'],
      features: ['Multi-model comparison', 'Statistical and ML approaches', 'Unit testing framework'],
      githubUrl: 'https://github.com/nuha-95/Time-Series-Forecasting'
    },
    {
      title: 'Finance Policy Chatbot',
      description: 'AI-powered chatbot that parses financial policy PDFs into semantic chunks using sentence-transformers and ChromaDB for intelligent document retrieval.',
      technologies: ['Python', 'Streamlit', 'ChromaDB', 'Sentence-Transformers'],
      features: ['PDF semantic parsing', 'Vector embeddings', 'Interactive UI', 'Conversational memory'],
      githubUrl: 'https://github.com/nuha-95/financial-policy-chatbot'
    },
    {
      title: 'ExpenseSplittr',
      description: 'MERN stack website for bachelors to simplify shared living. Features include finding nearby homes, expense tracking, and debt management.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      features: ['Home finder', 'Expense tracking', 'Debt management', 'User authentication'],
      githubUrl: 'https://github.com/nuha-95/CSE470-Software-Engineering'
    },
    {
      title: 'Signboard Detection',
      description: 'Object detection project using YOLOv5 integrated with PyTorch for robust and efficient signboard detection and classification.',
      technologies: ['YOLOv5', 'PyTorch', 'OpenCV', 'Computer Vision'],
      features: ['Real-time object detection', 'Custom dataset training', 'High accuracy classification'],
      githubUrl: 'https://www.kaggle.com/code/nusratjahannuha/sec2-group5-signboard-detection'
    },
    {
      title: 'Disaster Classification from Tweets',
      description: 'NLP classification using Bi-LSTM model with GloVe embeddings to classify disaster-related tweets with comprehensive data preprocessing.',
      technologies: ['TensorFlow', 'Bi-LSTM', 'GloVe', 'NLP', 'Python'],
      features: ['Bidirectional LSTM architecture', 'Pre-trained embeddings', 'Text preprocessing pipeline'],
      githubUrl: 'https://github.com/nuha-95/CSE440-Project/blob/main/Disaster_classification.ipynb'
    },
    {
      title: 'QuizApp Backend',
      description: 'FastAPI-based backend for quiz management with PostgreSQL database and SQLAlchemy ORM, featuring interactive terminal documentation.',
      technologies: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'REST API'],
      features: ['RESTful CRUD operations', 'Interactive API documentation', 'Database ORM integration'],
      githubUrl: 'https://github.com/nuha-95/learn-fastapi-quizapp'
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>{project.title}</h3>
            <p style={{ marginBottom: '1.5rem', color: '#9ca3af', lineHeight: '1.6' }}>{project.description}</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>Key Features:</h4>
              <ul style={{ paddingLeft: '1.2rem', color: '#9ca3af' }}>
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{ marginBottom: '0.3rem', fontSize: '0.9rem' }}>{feature}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                <Github size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;