"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';

const topics = [
  { title: 'Podcast', icon: '🎙️', link: '/podcast' },
  { title: 'Digital Marketing', icon: '💻', link: '/digitalmarketing' },
  { title: 'Investment Banking/VC', icon: '💼', link: '/investmentbanking' },
  { title: 'Business Acceleration', icon: '🚀', link: '/businessacceleration' },
  { title: 'Mentorship', icon: '👥', link: '/mentorship' },
  { title: 'Client Acquisition', icon: '🤝', link: '/clientacquisition' },
  { title: 'Networking and Events', icon: '🌐', link: '/networkingevents' }
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/assets/images/logo_1.png" 
            alt="V2V Network Logo" 
            className={styles.logoImage}
          />
        </Link>

        <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>Home</Link>
          <div 
            className={styles.servicesDropdown}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className={`${styles.navLink} ${styles.servicesLink}`}>Services</span>
            {isServicesOpen && (
              <div className={styles.dropdownContent}>
                {topics.map((topic, index) => (
                  <Link key={index} href={topic.link} className={styles.dropdownItem} onClick={closeMobileMenu}>
                    <span className={styles.topicIcon}>{topic.icon}</span>
                    {topic.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className={styles.navLink} onClick={closeMobileMenu}>About Us</Link>
          <Link href="/contact" className={styles.navLink} onClick={closeMobileMenu}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
