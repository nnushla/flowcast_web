import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import styles from './Home.module.css'

const STEPS = [
  {
    num: 1,
    cls: styles.sn1,
    title: 'Enter your inputs',
    desc: "Share your cycle phase, last night's sleep, stress level, and any symptoms you're feeling today.",
  },
  {
    num: 2,
    cls: styles.sn2,
    title: 'Model analyzes patterns',
    desc: 'Our ML model weighs your inputs against cycle-phase productivity patterns to assess your focus potential.',
  },
  {
    num: 3,
    cls: styles.sn3,
    title: 'Get your forecast',
    desc: 'Receive a personalized High Focus or Rest-Oriented recommendation with a confidence score and context.',
  },
]

export default function Home() {
  const heroRef  = useFadeIn()
  const stepsRef = useFadeIn()

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div ref={heroRef} className={`${styles.heroInner} fade-in`}>
          <span className="section-tag">Cycle-aware productivity</span>
          <h1>Flow<em className={styles.em}>Cast</em></h1>
          <p>Understand your rhythm. Work with your energy, not against it.</p>
          <Link to="/predict" className="btn-primary">Try FlowCast</Link>
          <div className={styles.pills}>
            <div className={`${styles.pill} ${styles.pillBlue}`}>
              ✦ High Focus Day — deep work, creativity
            </div>
            <div className={`${styles.pill} ${styles.pillLav}`}>
              ◎ Rest-Oriented Day — restore &amp; recover
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.howSection}>
        <div className="container">
          <div ref={stepsRef} className="fade-in">
            <span className="section-tag">Simple process</span>
            <h2>How FlowCast works</h2>
            <div className={styles.stepsGrid}>
              {STEPS.map(({ num, cls, title, desc }) => (
                <div key={num} className={styles.stepCard}>
                  <div className={`${styles.stepNum} ${cls}`}>{num}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
