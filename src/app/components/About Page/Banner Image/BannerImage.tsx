import React from 'react';
import styles from './BannerImage.module.css';

interface BannerImageProps {
  altText: string;
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ altText, className }) => {
  return (
    <div className={styles.bannerContainer}>
      <img
        src="/assets/images/handshake.png"
        alt={altText}
        className={`${styles.bannerImage} ${className || ''}`}
      />
    </div>
  );
};

export default BannerImage;
