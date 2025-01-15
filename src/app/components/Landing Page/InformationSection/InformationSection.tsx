"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './InformationSection.module.css';
import Image from 'next/image';

const InformationSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const imageUrl = "/assets/images/business.jpg";
  const heading = "Our Mission";
  const paragraph1 = "At V2V Network, we specialize in elevating your company to stand out amidst the competition. Our mission is to support you every step of the way by providing tailored solutions that amplify your digital presence and enhance your investor readiness. We promote your company through our dynamic social media platforms, ensuring your brand reaches a wider audience. Additionally, we offer podcast opportunities to share your story and establish your authority in your industry, creating meaningful connections and impactful narratives.";
  
  const paragraph2 = "Beyond digital promotion, we are committed to your growth with services designed to sharpen your edge in the competitive market. Our team assists in editing and refining your pitch deck, offering actionable insights on how to effectively present your ideas to investors and venture capitalists. Through personalized mentorship and business acceleration strategies, we guide you toward scaling your business and achieving sustainable success. At V2V Network, your growth is our priority, and we work with you to unlock your full potential.";

  return (
    <section 
      className={`${styles.informationSection} ${isInView ? styles.inView : ''}`} 
      ref={sectionRef}
    >
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={imageUrl} 
            alt={heading} 
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.paragraph}>{paragraph1}</p>
        <p className={styles.paragraph}>{paragraph2}</p>
      </div>
    </section>
  );
};

export default InformationSection;
