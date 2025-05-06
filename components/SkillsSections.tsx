import React from "react";
import { Tag } from "lucide-react";
import styles from "./SkillsSection.module.css";
import Image from "next/image";

const skills = [
  { name: "HTML5", icon: "/images/skills_icons/html5_icon.svg" },
  { name: "CSS3", icon: "/images/skills_icons/css_icon.svg" },
  { name: "React", icon: "/images/skills_icons/react_icon.png" },
  { name: "Redux", icon: "/images/skills_icons/Redux_icon.svg" },
  { name: "Next.js", icon: "/images/skills_icons/next_icon.svg" },
  { name: "TypeScript", icon: "/images/skills_icons/typescript_icon.svg" },
  { name: "Node.js", icon: "/images/skills_icons/node_icon.svg" },
  { name: "Python", icon: "/images/skills_icons/python_icon.svg" },
  { name: "PostgreSQL", icon: "/images/skills_icons/PostgreSQL_icon.png" },
  { name: "MongoDB", icon: "/images/skills_icons/MongoDB_icon.svg" },
  { name: "AWS", icon: "/images/skills_icons/AWS_icon.svg" },
  { name: "Docker", icon: "/images/skills_icons/Docker_icon.svg" },
];

function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>
        <Tag className={styles.titleIcon} />
        Key Technologies
      </h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.iconContainer}>
              <Image src={skill.icon} alt={skill.name} width={40} height={40} />
            </div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
