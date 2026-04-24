import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Enter your daily inputs',
    desc: 'Each day, you tell FlowCast four things: your current cycle phase, how many hours you slept, your current stress level on a scale of 1–10, and how severe any physical symptoms feel.',
    color: 'var(--pink-d)',
    bg: 'var(--pink)',
  },
  {
    num: '02',
    title: 'Model analyzes your patterns',
    desc: 'A gradient-boosted ML classifier weighs your inputs against learned phase-specific productivity patterns. It considers how each factor interacts — e.g. high stress in the luteal phase hits differently than in the follicular phase.',
    color: 'var(--lav-dd)',
    bg: 'var(--lav)',
  },
  {
    num: '03',
    title: 'Get your personalized recommendation',
    desc: 'FlowCast outputs either a High Focus Day or Rest-Oriented Day prediction, along with a confidence percentage and a short, human-readable explanation tailored to your specific inputs.',
    color: 'var(--blue-dd)',
    bg: 'var(--blue)',
  },
]

export default function HowItWorks() {
  const headerRef = useFadeIn()
  const stepsRef  = useFadeIn()
  const ctaRef    = useFadeIn()

  return (
    <main>
      <section>
        <div className="container">
          <div ref={headerRef} className="fade-in">
            <span className="section-tag">Process</span>
            <h2>How FlowCast works</h2>
            <p className={styles.subtitle}>
              A simple, three-step process that translates your daily inputs into a personalized productivity forecast.
            </p>
          </div>

          <div ref={stepsRef} className={`${styles.steps} fade-in`}>
            {STEPS.map(({ num, title, desc, color, bg }) => (
              <div key={num} className={styles.step}>
                <div className={styles.stepNum} style={{ background: bg, color }}>{num}</div>
                <div className={styles.stepContent}>
                  <h3 style={{ color }}>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className={`${styles.cta} fade-in`}>
            <p>Ready to try it yourself?</p>
            <Link to="/predict" className="btn-primary">Predict my day</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
