import styles from "./AboutSection.module.css";

function AboutSection(props: { id: string }) {
  return (
    <section className={styles.about} id={props.id}>
      <div className={styles.plug}></div>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.paragraph}>
        I am a results-driven <strong>Senior Full Stack Developer</strong> with
        a proven track record of building and optimizing high-impact,
        user-centric web applications. With 4+ years of experience, I specialize
        in leveraging cutting-edge technologies like <strong>React.js</strong>,{" "}
        <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
        <strong>Node.js</strong> to deliver exceptional user experiences.
      </p>
      <p className={styles.paragraph}>
        My expertise spans the full development lifecycle, from collaborating
        with cross-functional teams to define project requirements and
        implementing modern UI designs, to optimizing{" "}
        <strong>performance</strong> and{" "}
        <strong>ensuring seamless cross-device compatibility.</strong> I am
        passionate about writing clean, scalable, and maintainable code, with a
        focus on developing reusable components and modular solutions.
      </p>
      <p className={styles.paragraph}>
        In my previous roles, I have successfully contributed to{" "}
        <strong>e-commerce</strong> and <strong>health and care</strong>{" "}
        platforms. I also have experience working on an innovative project
        involving a digital avatar chatbot integrated into e-commerce platforms.
        I am adept at integrating <strong>REST APIs</strong> and{" "}
        <strong>third-party services</strong> to ensure code quality and
        application reliability.
      </p>
      <p className={styles.paragraph}>
        I am a strong team player with excellent communication skills, and I am
        committed to continuous learning and improvement.
      </p>
    </section>
  );
}

export default AboutSection;
