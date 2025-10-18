import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Let's Connect</h3>
            <p>Ready to discuss opportunities or collaborate on projects?</p>
            <div className="contact-info">
              <a href="mailto:your.email@example.com" className="contact-link">
                your.email@example.com
              </a>
              <a href="tel:+1234567890" className="contact-link">
                (123) 456-7890
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Graduate Computer Information Technology Student. All rights reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--foter);
          color: var(--white);
          padding: 3rem 0 1rem;
          position: relative;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-1), transparent);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-info h3 {
          color: var(--white);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .footer-info p {
          color: var(--accent-1);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .contact-link {
          color: var(--accent-1);
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .contact-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-1);
          transition: width 0.3s ease;
        }
        
        .contact-link:hover {
          color: var(--white);
        }
        
        .contact-link:hover::before {
          width: 100%;
        }
        
        .footer-links {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
        
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .social-link {
          color: var(--accent-1);
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .social-link::before {
          content: '→';
          position: absolute;
          left: 0;
          transition: transform 0.3s ease;
        }
        
        .social-link:hover {
          color: var(--white);
          transform: translateX(5px);
        }
        
        .social-link:hover::before {
          transform: translateX(5px);
        }
        
        .footer-bottom {
          border-top: 1px solid var(--accent-2);
          padding-top: 1.5rem;
          text-align: center;
        }
        
        .footer-bottom p {
          color: var(--accent-2);
          font-size: 0.9rem;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-links {
            justify-content: center;
          }
          
          .social-links {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .social-link {
            padding-left: 0;
            padding-right: 1.5rem;
          }
          
          .social-link::before {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0 1rem;
          }
          
          .social-links {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
