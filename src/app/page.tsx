import Banner from "./components/Landing Page/Banner/Banner";
import Cards from "./components/Landing Page/Card/Card";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import LandingPageText from "./components/Landing Page/LangingPageText/LandingPageText";
import styles from "./page.module.css";
import InformationSection from "./components/Landing Page/InformationSection/InformationSection";

import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Home | V2V Network',
    description: 'Home Page',
  };
};

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <Banner />
        <LandingPageText />
        <Cards />
        <InformationSection />
      </main>
      <Footer />
    </div>
  );
}

