import { useInView } from '../hooks/useInView'
import { ACHIEVEMENTS } from '../utils/constants'
import styles from '../styles/App.module.css'

function AchievementCard({ icon, title, desc, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={styles.achieveCard}
      style={{ animationDelay: `${delay}ms` }}
      data-visible={visible}
    >
      <div className={styles.achieveIcon}>{icon}</div>
      <h3 className={styles.achieveTitle}>{title}</h3>
      <p className={styles.achieveDesc}>{desc}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Experience</h2>
        </div>

        <div className={styles.expCard}>
          <div className={styles.expLeft}>
            <div className={styles.expDot} />
            <div className={styles.expLine} />
          </div>
          <div className={styles.expRight}>
            <div className={styles.expMeta}>
              <span className={styles.expDate}>May 2024 — Present</span>
              <span className={styles.expLocation}>Quezon City</span>
            </div>
            <h3 className={styles.expRole}>Junior Software Developer</h3>
            <p className={styles.expCompany}>PowerSolv, Inc.</p>
            <ul className={styles.expList}>
              <li>Maintained ASP.NET WebForms applications using VB.NET and AJAX for responsive user interactions.</li>
              <li>Maintained and extended Embarcadero C++ Builder applications — fixing bugs, improving readability and performance.</li>
              <li>Designed and implemented new C# projects with enhanced UI and optimized backend logic to significantly reduce simulation time.</li>
              <li>Developed custom features for existing applications to enhance user experience.</li>
              <li>Participated in code reviews, ensuring adherence to guidelines and promoting knowledge sharing among team members.</li>
            </ul>
          </div>
        </div>

        <div className={styles.sectionSubHead}>Key Achievements</div>
        <div className={styles.achieveGrid}>
          {ACHIEVEMENTS.map((a, i) => (
            <AchievementCard key={a.title} {...a} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
