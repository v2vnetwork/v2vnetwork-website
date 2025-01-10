"use client";
import React from "react";
import styles from "./page.module.css";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

export default function ContactUs() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.contactUs}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.contactGrid}>
            <div className={styles.imageSection}>
              <img src="/assets/images/contactus.jpg" alt="Contact Us" className={styles.contactImage} />
            </div>
            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              <p>We'd love to hear from you. Please use our contact information below.</p>
              <div className={styles.contactDetails}>
                <p><b>Email:</b> v2vnetwork@protonmail.com</p>
                <p><b>Phone:</b> +1 (647) 354-2369</p>
                <p><b>Address:</b> 325 Front Street West, 4th Floor, Toronto, ON, M5V 2Y1</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
