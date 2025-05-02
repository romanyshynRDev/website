import Image from "next/image";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.title}>Senior Full Stack Developer</h1>
        <p className={styles.subtitle}>
          Full Stack Developer | Innovator | Problem Solver
        </p>
        <p className={styles.tagline}>
          “Great products connect people — code is just how we get there.”
        </p>
        <button className={styles.contactButton}>Contact Me</button>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.profileImageContainer}>
          <Image
            src="/images/profile.jpg"
            alt="Roman Romanyshyn"
            layout="responsive"
            width={250}
            height={250}
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
