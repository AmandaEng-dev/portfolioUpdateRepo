import React from 'react';

const ResumeButton = () => {
  const handleResumeClick = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="resume-section">
      <div className="container">
        <div className="resume-content fade-in-up">
          <h2>Ready to Learn More?</h2>
          <p>Download my resume to see my complete experience and qualifications</p>
          <button 
            className="resume-button hover-lift"
            onClick={handleResumeClick}
            aria-label="View Resume"
          >
            <span className="button-text">View My Resume</span>
            <span className="button-icon">↓</span>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .resume-section {
          padding: 4rem 0;
          background: var(--white);
          text-align: center;
          position: relative;
        }
        
        .resume-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-1), transparent);
        }
        
        .resume-content h2 {
          color: var(--dark);
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }
        
        .resume-content p {
          color: var(--text-secondary);
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .resume-button {
          background: var(--dark);
          color: var(--white);
          border: none;
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .resume-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .resume-button:hover::before {
          left: 100%;
        }
        
        .resume-button:hover {
          background: var(--white);
          color: var(--dark);
          border: 2px solid var(--dark);
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(33, 2, 3, 0.2);
        }
        
        .resume-button:active {
          transform: translateY(-1px);
        }
        
        .button-text {
          position: relative;
          z-index: 1;
        }
        
        .button-icon {
          position: relative;
          z-index: 1;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .resume-button:hover .button-icon {
          transform: translateY(2px);
        }
        
        @media (max-width: 768px) {
          .resume-content h2 {
            font-size: 2rem;
          }
          
          .resume-content p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
          
          .resume-button {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .resume-button {
            padding: 0.9rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ResumeButton;
