"use client";

import React from "react";
import Image from "next/image";
import styles from "./BannerImage.module.css";

interface BannerImageProps {
  altText: string;
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ altText, className }) => {
  return (
    <div className={`${styles.bannerContainer} ${className || ""}`}>
      <Image
        src="/assets/images/handshake.png" // Update to the correct path of your image
        alt={altText}
        width={1920} // Set a default width for the image
        height={1080} // Set a default height for the image
        className={styles.bannerImage}
      />
    </div>
  );
};

export default BannerImage;
