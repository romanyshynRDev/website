 "use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';
import Link from "next/link";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.navbar}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>
            <Link href="/">
              <img src="/images/logo_5.png" alt="Logo" className={styles.logoImage}/>
            </Link>
        </div>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#projects" className={styles.navLink}>Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
