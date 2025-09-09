import React from 'react';

const Header = () => {
  return (
    <header className="header fade-in-up">
      <div className="container">
        <div className="header-content">
          <h1>This is my software development portfolio</h1>
          <h2>Graduate Student in Computer Information Technology</h2>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          padding: 4rem 0;
          text-align: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--accent-1) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23C4D7F2" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        .header h1 {
          color: var(--dark);
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .header h2 {
          color: var(--accent-2);
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        @media (max-width: 768px) {
          .header {
            padding: 3rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
