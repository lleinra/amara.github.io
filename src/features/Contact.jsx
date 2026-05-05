import { SOCIAL_LINKS } from '../utils/constants'
import styles from '../styles/App.module.css'

export default function Contact() {
  return (
    <section id="contact" className={`${styles.section} ${styles.sectionContact}`}>
      <div className={styles.contactNoise} aria-hidden />
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Contact</h2>
        </div>
        <p className={styles.contactIntro}>
          Open to new opportunities and collaborations. Let's build something together.
        </p>
        <div className={styles.contactLinks}>
          <a className={styles.contactLink} href="mailto:arniellmikeaudbenjaglibot@gmail.com">
            <span className={styles.contactIcon}>✉</span>
            <span>arniellmikeaudbenjaglibot@gmail.com</span>
          </a>
          <a className={styles.contactLink} href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <span className={styles.contactIcon}>in</span>
            <span>LinkedIn Profile</span>
          </a>
          <a className={styles.contactLink} href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            <span className={styles.contactIcon}>gh</span>
            <span>GitHub @ama-aglibot</span>
          </a>
          <div className={styles.contactLink}>
            <span className={styles.contactIcon}>📍</span>
            <span>Sta. Maria, Bulacan · Quezon City, PH</span>
          </div>
        </div>
      </div>
    </section>
  )
}
