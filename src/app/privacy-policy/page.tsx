import React from "react";
import styles from "./PrivacyPolicy.module.css"; // Create a CSS module for this

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicyContainer}>
      <h1 className={styles.privacyPolicyTitle}>Privacy Policy</h1>

      <h2 className={styles.sectionTitle}>1. Introduction</h2>
      <p className={styles.paragraph}>
        Welcome to my website. This Privacy Policy outlines how I collect, use,
        and protect your personal information when you use my website.
      </p>

      <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
      <p className={styles.paragraph}>
        I may collect the following types of information:
      </p>
      <ul className={styles.list}>
        <li>
          <strong>Personal Information:</strong> Such as your name, email
          address, and any other information you provide when you contact me
          through the website.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you use the
          website, including your IP address, browser type, pages visited, and
          the time and date of your visit.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
      <p className={styles.paragraph}>
        I may use your information for the following purposes:
      </p>
      <ul className={styles.list}>
        <li>
          To respond to your inquiries and provide you with the information or
          services you request.
        </li>
        <li>To improve and optimize the website.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className={styles.sectionTitle}>4. Sharing Your Information</h2>
      <p className={styles.paragraph}>
        I will not share your personal information with third parties except in
        the following circumstances:
      </p>
      <ul className={styles.list}>
        <li>With your consent.</li>
        <li>
          With service providers who assist me in operating the website (e.g.,
          hosting providers).
        </li>
        <li>When required by law.</li>
      </ul>

      <h2 className={styles.sectionTitle}>5. Data Security</h2>
      <p className={styles.paragraph}>
        I take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, please note that no
        method of transmitting information over the internet is completely
        secure.
      </p>

      <h2 className={styles.sectionTitle}>6. Your Rights</h2>
      <p className={styles.paragraph}>You may have the right to:</p>
      <ul className={styles.list}>
        <li>Access the personal information I hold about you.</li>
        <li>
          Request the correction of any inaccurate or incomplete information.
        </li>
        <li>Request the deletion of your personal information.</li>
      </ul>
      <p className={styles.paragraph}>
        To exercise these rights, please contact me using the contact
        information provided on the website.
      </p>

      <h2 className={styles.sectionTitle}>7. Changes to This Privacy Policy</h2>
      <p className={styles.paragraph}>
        I may update this Privacy Policy from time to time. I will notify you of
        any significant changes by posting the updated policy on the website.
      </p>

      <h2 className={styles.sectionTitle}>8. Contact Me</h2>
      <p className={styles.paragraph}>
        If you have any questions about this Privacy Policy, please contact me.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
