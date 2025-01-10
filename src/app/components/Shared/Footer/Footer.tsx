import React from 'react';
import styles from './Footer.module.css';
import { Facebook, Twitter, Instagram, Rss, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.infoColumn}>
            <h3 className={styles.columnTitle}>About Us</h3>
            <p className={styles.columnText}>
              V2V Network helps businesses stand out by boosting their digital presence through social media and podcasts. We refine pitch decks and guide you in presenting to investors and VCs. Our mentorship and business acceleration services ensure effective scaling. With us, your growth is our priority.
            </p>
          </div>
          <div className={styles.infoColumn}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <p className={styles.columnText}>
              Email: v2vnetwork@protonmail.com<br />
              Phone: +1 (647) 354-2369<br />
              Address: 325 Front Street West, 4th Floor, Toronto, ON, M5V 2Y1
            </p>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>&copy; 2025 V2V Network. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/profile.php?id=61571023251374" className={styles.socialLink} aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/PodcastV2v" className={styles.socialLink} aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/v2vnetwork/" className={styles.socialLink} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/@V2VNetwork" className={styles.socialLink} aria-label="Youtube">
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/company/v2vnetwork" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
