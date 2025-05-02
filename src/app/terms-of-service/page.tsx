import React from 'react';
import styles from './TermsOfService.module.css'; 

const TermsOfServicePage = () => {
  return (
    <div className={styles.termsOfServiceContainer}>
      <h1 className={styles.termsOfServiceTitle}>Terms of Service</h1>

      <section>
        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p className={styles.paragraph}>
          By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>2. Description of Service</h2>
        <p className={styles.paragraph}>
          Our website provides [description of services, e.g., information about our products/services, a platform for users to interact, etc.]. We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>3. User Conduct</h2>
        <ul className={styles.list}>
          <li>You agree not to use the website for any unlawful purpose.</li>
          <li>You agree not to upload or transmit any harmful or disruptive content.</li>
          <li>You are responsible for maintaining the confidentiality of your account information.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
        <p className={styles.paragraph}>
          The content on this website, including text, graphics, logos, and images, is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>5. Disclaimer of Warranties</h2>
        <p className={styles.paragraph}>
          The website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the website's operation or content.
        </p>
      </section>

        <section>
            <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
            <p className={styles.paragraph}>
            In no event shall [Your Company Name] be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the website.
            </p>
        </section>

        <section>
            <h2 className={styles.sectionTitle}>7. Governing Law</h2>
            <p className={styles.paragraph}>
            These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
        </section>

        <section>
            <h2 className={styles.sectionTitle}>8. Changes to Terms of Service</h2>
            <p className={styles.paragraph}>
            We reserve the right to update or modify these Terms of Service at any time. Any changes will be effective immediately upon posting the revised terms on the website. Your continued use of the website after the posting of changes constitutes your acceptance of such changes.
            </p>
        </section>

        <section>
              <h2 className={styles.sectionTitle}>9. Contact Us</h2>
              <p className={styles.paragraph}>
                If you have any questions about these Terms of Service, please contact us at [Your Contact Information, e.g., email address].
              </p>
        </section>
    </div>
  );
};

export default TermsOfServicePage;
