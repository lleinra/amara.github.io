import styles from './styles/App.module.css'
import Navbar from './layouts/Navbar'
import Hero from './features/Hero'
import Experience from './features/Experience'
import Skills from './features/Skills'
import Education from './features/Education'
import Contact from './features/Contact'
import Footer from './layouts/Footer'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  return (
    <div className={styles.root}>
      <div className={styles.grain} aria-hidden />
      <Navbar onScrollTo={scrollTo} />
      <Hero onScrollTo={scrollTo} />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
