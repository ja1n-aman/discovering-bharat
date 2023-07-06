import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a place</h1>
      <div className={styles.items}>
        <Link href="/travelto/ladakh" className={styles.item}>
          <span className={styles.title}>Ladakh</span>
        </Link>
        <Link href="/travelto/rajasthan" className={styles.item}>
          <span className={styles.title}>Rajasthan</span>
        </Link>
        <Link href="/travelto/sikkim" className={styles.item}>
          <span className={styles.title}>Sikkim</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
