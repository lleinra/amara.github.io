import styles from '../styles/App.module.css'

export default function Hero({ onScrollTo }) {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.heroNoise} aria-hidden />
      <div className={styles.heroBg} aria-hidden />

      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>
          <span className={styles.dot} />Junior Software Developer
        </p>
        <h1 className={styles.heroName}>
          Arniell Mike Audbenj R.<br />
          <em>Aglibot</em>
        </h1>
        <p className={styles.heroSummary}>
          Building clean, performant software with C# and .NET — from legacy modernization
          to optimized backend systems. Based in Quezon City, PH.
        </p>
        <div className={styles.heroCtas}>
          <button className={styles.ctaPrimary} onClick={() => onScrollTo('experience')}>
            View Work
          </button>
          <button className={styles.ctaGhost} onClick={() => onScrollTo('contact')}>
            Get in Touch
          </button>
        </div>
      </div>

      <div className={styles.heroDecor} aria-hidden>
        <div className={styles.heroCircle} />
        <div className={styles.heroLine} />
      </div>

      <div className={styles.scrollHint} aria-hidden>scroll ↓</div>
    </section>
  )
}
