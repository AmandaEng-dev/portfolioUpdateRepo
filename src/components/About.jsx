import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content asymmetrical">
          <div className="about-text fade-in-left">
            <h2>About Me</h2>
            <p>
              As a graduate student in Computer Information Technology, I am passionate about 
              creating innovative software solutions that solve real-world problems. My journey 
              in technology began with a curiosity for how things work, which has evolved into 
              a deep understanding of full-stack development, database design, and system architecture.
            </p>
            <p>
              I specialize in modern web technologies including React, Node.js, and cloud platforms, 
              while maintaining a strong foundation in computer science principles. My academic 
              background provides me with both theoretical knowledge and practical skills necessary 
              to excel in software development roles.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying current with industry trends to deliver the best 
              possible solutions.
            </p>
          </div>
          
          <div className="about-visual fade-in-up">
            <div className="visual-element">
              <div className="code-block">
                <div className="code-line">
                  <span className="keyword">const</span> 
                  <span className="variable"> developer</span> = 
                  <span className="string"> "passionate"</span>;
                </div>
                <div className="code-line">
                  <span className="keyword">if</span> 
                  <span className="paren">(</span>
                  <span className="variable">problem</span> === 
                  <span className="string">"complex"</span>
                  <span className="paren">)</span> 
                  <span className="brace">{'{'}</span>
                </div>
                <div className="code-line indent">
                  <span className="keyword">return</span> 
                  <span className="function">solve</span>
                  <span className="paren">()</span>;
                </div>
                <div className="code-line">
                  <span className="brace">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--accent-1) 100%);
          position: relative;
        }
        
        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%236A6B83" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
          opacity: 0.4;
        }
        
        .about-content {
          position: relative;
          z-index: 1;
        }
        
        .about-text h2 {
          color: var(--dark);
          margin-bottom: 2rem;
        }
        
        .about-text p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        
        .about-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        .visual-element {
          background: var(--white);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(33, 2, 3, 0.1);
          border: 1px solid var(--accent-1);
        }
        
        .code-block {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--dark);
        }
        
        .code-line {
          margin-bottom: 0.5rem;
        }
        
        .indent {
          padding-left: 2rem;
        }
        
        .keyword {
          color: var(--accent-3);
          font-weight: 600;
        }
        
        .variable {
          color: var(--accent-2);
          font-weight: 500;
        }
        
        .string {
          color: #22863a;
        }
        
        .function {
          color: #6f42c1;
        }
        
        .paren, .brace {
          color: var(--dark);
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .about-visual {
            padding: 1rem;
          }
          
          .visual-element {
            padding: 1.5rem;
          }
          
          .code-block {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
