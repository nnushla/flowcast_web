import { useFadeIn } from '../hooks/useFadeIn'
import styles from './About.module.css'

const ETHICS = [
  {
    color: 'var(--pink-d)',
    titleColor: 'var(--pink-d)',
    title: 'Not medical advice',
    text: 'FlowCast is a productivity tool, not a clinical instrument. Always consult a healthcare provider for medical concerns.',
  },
  {
    color: 'var(--lav-dd)',
    titleColor: 'var(--lav-dd)',
    title: 'Your data, your control',
    text: 'FlowCast does not store or share personal data. All predictions are computed locally in your browser.',
  },
  {
    color: 'var(--blue-dd)',
    titleColor: 'var(--blue-dd)',
    title: 'Bias & fairness',
    text: 'Cycle patterns vary widely. FlowCast encourages users to override predictions based on personal experience.',
  },
]

export default function About() {
  const headerRef = useFadeIn()
  const cardsRef  = useFadeIn()

  return (
    <main>
      <section>
        <div className="container">
          <div ref={headerRef} className="fade-in">
            <span className="section-tag blue">Science &amp; ethics</span>
            <h2>About FlowCast</h2>
          </div>

          <div ref={cardsRef} className={`${styles.grid} fade-in`}>
            {/* How it works */}
            <div className={styles.card}>
              <h3>How FlowCast works</h3>
              <p>
                FlowCast asks you four simple questions each day — your cycle phase, how you slept,
                how stressed you feel, and how intense your symptoms are. It uses these signals to
                forecast whether today is better suited for deep focus or gentle rest. Think of it
                as a weather forecast, but for your mind and energy.
              </p>
            </div>

            {/* About the model */}
            <div className={styles.card}>
              <h3>About the model</h3>
              <div className={styles.modelBadge}>⟁ ML-powered</div>
              <p>
                FlowCast uses a gradient-boosted classifier trained on anonymized self-reported
                cycle and productivity data. The model learns phase-specific patterns and weighs
                behavioral inputs to produce a daily focus prediction with a confidence score.
              </p>
            </div>

            {/* Ethics */}
            <div className={styles.card}>
              <h3>Ethics &amp; privacy</h3>
              <div className={styles.ethicsList}>
                {ETHICS.map(({ color, titleColor, title, text }) => (
                  <div key={title} className={styles.ethicItem}>
                    <div className={styles.ethicDot} style={{ background: color }} />
                    <p>
                      <strong style={{ color: titleColor }}>{title}</strong> — {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
