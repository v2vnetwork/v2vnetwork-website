import React from "react";
import { Metadata } from 'next';
import styles from "./page.module.css";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import Founder, { teamMembers } from "../components/About Page/Founder/Founder";
import MissionText from "../components/About Page/Mission Text/MissionText";
import BannerImage from "../components/About Page/Banner Image/BannerImage";

export const generateMetadata = (): Metadata => {
  return {
    title: 'About Us',
    description: 'About Us Pagw',
  };
};

export default function AboutUs() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <BannerImage altText="Handshake" />
        <MissionText />
        <section className={styles.aboutUs}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <Founder key={index} {...member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
