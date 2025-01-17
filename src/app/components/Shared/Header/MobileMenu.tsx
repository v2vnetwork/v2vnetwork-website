import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  topics: { title: string; icon: string; link: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, topics }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  if (!isOpen) return null;

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <nav className={styles.mobileMenu}>
        <Link href="/" className={styles.navLink} onClick={onClose}>
          Home
        </Link>
        <div className={styles.servicesDropdown}>
          <span className={styles.servicesLink} onClick={toggleServices}>
            Services
            {isServicesOpen ? (
              <ChevronUp className={styles.arrow} size={18} />
            ) : (
              <ChevronDown className={styles.arrow} size={18} />
            )}
          </span>
          <div className={`${styles.dropdownContent} ${isServicesOpen ? styles.open : ''}`}>
            {topics.map((topic, index) => (
              <Link
              key={index}
              href={topic.link}
              className={styles.dropdownItem}
              onClick={onClose}
            >
              <span className={styles.topicIcon}>{topic.icon}</span>
              <span className={styles.topicTitle}>{topic.title}</span>
            </Link>            
            ))}
          </div>
        </div>
        <Link href="/about" className={styles.navLink} onClick={onClose}>
          About Us
        </Link>
        <Link href="/contact" className={styles.navLink} onClick={onClose}>
          Contact Us
        </Link>
      </nav>
      <div className={styles.backdrop} onClick={onClose}></div>
    </>
  );
};

export default MobileMenu;
