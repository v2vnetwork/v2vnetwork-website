import React from "react";
import styles from "./Founder.module.css";
import Image from "next/image";

interface TeamMember {
  name: string;
  description: string;
  imageFileName: string;
}

// Export the teamMembers array as a named export
export const teamMembers: TeamMember[] = [
  {
    name: "Rahul Ravinder Malhotra",
    description:
      "Rahul Ravinder Malhotra is a seasoned Investment Banker with over 27+ years of rich experience in the areas of Strategy, Global Business Development, Investment Banking, Financial services, Venture Capital, Private Equity, Wealth management, Channel Management, Team Management, P&L Management, and is on board of several companies.",
    imageFileName: "rahul.jpg",
  },
  {
    name: "Devender Butani",
    description:
      "Devender Butani, with a B.Tech from IIT and an M.Eng from Canada, is a Full-Stack Developer with over 5+ years of experience building dynamic, user-centric websites and applications. Skilled in AI and Blockchain, he combines technical expertise with a deep understanding of business trends to deliver innovative and impactful solutions.",
    imageFileName: "devb.jpeg",
  },
];

const Founder: React.FC<TeamMember> = ({ name, description, imageFileName }) => {
  return (
    <div className={styles.memberSection}>
      <Image
        src={`/assets/images/${imageFileName}`}
        alt={name}
        width={200}
        height={200}
        className={styles.memberImage}
        priority
      />
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Founder;
