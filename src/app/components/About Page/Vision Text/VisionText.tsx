import React from 'react';
import styles from './VisionText.module.css';

export default function VisionText() {
  return (
    <section className={styles.visionSection}>
      <h2 className={styles.visionHeading}>Our Vision</h2>
      <p className={styles.visionParagraph}>
        At V2V Network, our long-term vision is to position Canada as a global innovation hub, comparable to the renowned Silicon Valley. We envision a future where Canadian talent is recognized and celebrated worldwide for its groundbreaking contributions to industries like AI, SkinTech, Health Tech, and Climate Tech. With an abundance of skilled professionals already making strides in these fields, our goal is to create an ecosystem that nurtures their growth and amplifies their impact on the global stage.
      </p>
      <p className={styles.visionParagraph}>
        We aim to provide the necessary resources and support to these innovators in an affordable, accessible, and timely manner. By removing barriers to growth, we aspire to empower entrepreneurs, startups, and businesses to scale their ideas into transformative solutions that shape industries and improve lives. Whether it’s through mentorship, digital promotion, investor readiness, or business acceleration, we are committed to equipping Canadian talent with the tools they need to succeed.
      </p>
      <p className={styles.visionParagraph}>
        Our vision goes beyond individual success—it is about fostering a collaborative community where innovation thrives and opportunities abound. By bridging gaps, connecting innovators, and promoting Canadian excellence, we strive to build a future where Canada stands as a beacon of innovation, sustainability, and progress on the global stage.
      </p>
    </section>
  );
}
