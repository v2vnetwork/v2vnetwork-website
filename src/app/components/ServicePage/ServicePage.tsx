"use client";

import React from "react";
import Image from "next/image";
import styles from "./ServicePage.module.css";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServicePage({ title, subtitle, description, imageSrc, imageAlt }: ServicePageProps) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <section className={styles.serviceSection}>
          <div className={styles.imageContainer}>
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.subTitle}>{subtitle}</h3>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
