
import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/banner_5.avif"
        alt="Roman Romanyshyn"
        fill
        priority
        className={styles.backgroundImage}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Senior Full Stack Developer</h1>

        <p className={styles.tagline}>
          “Great products connect people — code is just how we get there.”
        </p>
        <Link href="#contact" passHref>
          <button className={styles.contactButton}>Contact Me</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
