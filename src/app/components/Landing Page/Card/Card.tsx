import React from 'react';
import Link from 'next/link';
import styles from './Card.module.css';

const topics = [
  { title: 'Podcast', icon: '🎙️', link: '/podcast' },
  { title: 'Digital Marketing', icon: '💻', link: '/digitalmarketing' },
  { title: 'Investment Banking/VC', icon: '💼', link: '/investmentbanking' },
  { title: 'Business Acceleration', icon: '🚀', link: '/businessacceleration' },
  { title: 'Mentorship', icon: '👥', link: '/mentorship' },
  { title: 'Client Acquisition', icon: '🤝', link: '/clientacquisition' },
  { title: 'Networking and Events', icon: '🌐', link: '/networkingevents' }
];

export default function Cards() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.cardContainer}>
        {topics.map((topic, index) => (
          <Link href={topic.link} key={index} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.icon}>{topic.icon}</div>
              <h3 className={styles.title}>{topic.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
