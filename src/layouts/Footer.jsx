import { SOCIAL_LINKS } from '../utils/constants'
import styles from '../styles/App.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <span>© 2026 Arniell Mike Aglibot</span>
        <div className={styles.footerSocials}>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <span className={styles.footerMono}>Built with React + Vite</span>
    </footer>
  )
}
