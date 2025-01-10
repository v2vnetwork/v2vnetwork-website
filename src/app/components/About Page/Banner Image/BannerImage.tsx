import React from 'react';
import styles from './BannerImage.module.css';
import Image from 'next/image';

interface BannerImageProps {
  altText: string;
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ altText, className }) => {
  return (
    <div className={styles.bannerContainer}>
      <Image
        src="/assets/images/handshake.png"
        alt={altText}
        className={`${styles.bannerImage} ${className || ''}`}
      />
    </div>
  );
};

export default BannerImage;
