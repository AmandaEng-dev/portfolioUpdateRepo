import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GrowPoints",
      description: "A full-stack e-commerce application with user authentication, user need, etc.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubLink: "https://github.com",
      demoLink: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Deployment of MongoDB Commerce Database",
      description: "A collaborative task management tool with real-time updates, team collaboration features, and project tracking.",
      techStack: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      githubLink: "https://github.com",
      demoLink: "https://taskmanager-demo.com"
    },
    {
      id: 3,
      title: "Flappy Bird Game",
      description: "Description test.",
      techStack: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      githubLink: "https://github.com",
      demoLink: "https://weather-demo.com"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Explore my recent work in software development and web technologies</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card hover-lift fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-button github">
                    GitHub
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-button demo">
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .projects-section {
          padding: 5rem 0;
          background: var(--white);
          position: relative;
        }
        
        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-1), transparent);
        }
        
        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .projects-header h2 {
          color: var(--dark);
          margin-bottom: 1rem;
        }
        
        .projects-header p {
          font-size: 1.2rem;
          color: var(--accent-2);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        
        .project-card {
          background: var(--bg-primary);
          border: 1px solid var(--accent-1);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-3));
        }
        
        .project-card:hover {
          border-color: var(--accent-3);
          box-shadow: 0 15px 40px rgba(33, 2, 3, 0.1);
        }
        
        .project-content h3 {
          color: var(--dark);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .project-content p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        
        .tech-tag {
          background: var(--accent-1);
          color: var(--dark);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .tech-tag:hover {
          background: var(--accent-3);
          color: var(--white);
          transform: translateY(-2px);
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .link-button {
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .link-button.github {
          background: var(--dark);
          color: var(--white);
        }
        
        .link-button.github:hover {
          background: var(--white);
          color: var(--dark);
          border-color: var(--dark);
        }
        
        .link-button.demo {
          background: transparent;
          color: var(--accent-3);
          border-color: var(--accent-3);
        }
        
        .link-button.demo:hover {
          background: var(--accent-3);
          color: var(--white);
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .project-card {
            padding: 1.5rem;
          }
          
          .project-links {
            flex-direction: column;
          }
          
          .link-button {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
