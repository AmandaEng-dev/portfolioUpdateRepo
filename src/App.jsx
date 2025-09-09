import React, { useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import ResumeButton from './components/ResumeButton'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Add scroll animation functionality
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left');
    animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Projects />
      <About />
      <ResumeButton />
      <Footer />
    </div>
  )
}

export default App
