import styles from '../styles/App.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>Education</h2>
        </div>
        <div className={styles.eduCard}>
          <div className={styles.eduYear}>2023</div>
          <div className={styles.eduBody}>
            <h3 className={styles.eduDegree}>Bachelor of Science in Computer Engineering</h3>
            <p className={styles.eduSchool}>Polytechnic University of the Philippines</p>
            <p className={styles.eduLocation}>Santa Maria, Bulacan · Graduated October 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}
