import { useInView } from '../hooks/useInView'
import { SKILLS } from '../utils/constants'
import styles from '../styles/App.module.css'

function SkillBar({ label, level, category, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={styles.skillItem}
      style={{ animationDelay: `${delay}ms` }}
      data-visible={visible}
    >
      <div className={styles.skillTop}>
        <span className={styles.skillLabel}>{label}</span>
        <span className={styles.skillCategory}>{category}</span>
        <span className={styles.skillPct}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay + 100}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>Skills</h2>
        </div>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <SkillBar key={s.label} {...s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
