"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './LandingPageText.module.css';

const LandingPageText: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`${styles.container} ${isInView ? styles.inView : ''}`} 
      ref={sectionRef}
    >
      <h1 className={styles.heading}>Welcome to V2V Network</h1>
      <div className={styles.paragraphContainer}>
        <p className={styles.paragraph}>
          At V2V Network, we are dedicated to empowering entrepreneurs and innovators to turn their visions into thriving realities. Our mission is to create a collaborative ecosystem that drives growth, fosters innovation, and builds lasting success stories.
        </p>
        <p className={styles.paragraph}>
          Fueling your business dreams with unstoppable support and game-changing solutions, we connect you with the right resources, insights, and opportunities to accelerate your journey. Together, we transform bold ideas into extraordinary achievements.
        </p>
      </div>
    </div>
  );
};

export default LandingPageText;
