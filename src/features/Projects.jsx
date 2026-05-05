import { useInView } from '../hooks/useInView'
import { PROJECTS } from '../utils/constants'
import styles from '../styles/App.module.css'

function ProjectCard({ title, tags, desc, link, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={styles.projCard}
      style={{ animationDelay: `${delay}ms` }}
      data-visible={visible}
    >
      <div className={styles.projTags}>
        {tags.map(t => <span key={t} className={styles.projTag}>{t}</span>)}
      </div>
      <h3 className={styles.projTitle}>{title}</h3>
      <p className={styles.projDesc}>{desc}</p>
      {link !== '#' && (
        <a href={link} className={styles.projLink}>View Project →</a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Projects</h2>
        </div>
        <div className={styles.projGrid}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
