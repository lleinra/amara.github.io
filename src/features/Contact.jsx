import styles from '../styles/App.module.css'

export default function Contact() {
  return (
    <section id="contact" className={`${styles.section} ${styles.sectionContact}`}>
      <div className={styles.contactNoise} aria-hidden />
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>04</span>
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
          <a className={styles.contactLink} href="tel:+639765738732">
            <span className={styles.contactIcon}>☎</span>
            <span>0976 573 8732</span>
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
