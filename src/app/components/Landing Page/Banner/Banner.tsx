import React from "react";
import styles from "./Banner.module.css";
import Image from 'next/image';

export default function Banner() {
  return (
    <section className={styles.bannerSection}>
      {/* Text Section */}
      <div className={styles.textSection}>
        <h3 className={`${styles.heading} ${styles.animateText}`}>
          We are here to build your business.
        </h3>
        <p className={`${styles.subText} ${styles.animateText}`}>
          Fueling your business dreams with unstoppable support and game-changing solutions!
        </p>
      </div>

      {/* Image Section */}
      <div className={`${styles.imageSection} ${styles.animateImage}`}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/startup.jpg"
            alt="V2V Network"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', borderRadius: '16px' }}
          />
        </div>
      </div>
    </section>
  );
}
