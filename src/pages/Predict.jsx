import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import styles from './Predict.module.css'

const PHASES = ['Menstrual', 'Follicular', 'Ovulation', 'Luteal']

const MESSAGES = {
  focus_follicular: 'Your follicular phase and solid sleep set the stage for clarity. Tackle deep work, problem-solving, or creative projects today.',
  focus_ovulation:  'Ovulation energy peaks here — great for collaboration, presentations, or ambitious tasks.',
  focus_luteal:     'Despite the luteal phase, your sleep and stress levels are supporting focus. Use this window wisely.',
  focus_menstrual:  'Your inputs suggest better-than-expected energy today. Light focused work is within reach.',
  rest_luteal:      "Your body is preparing for a new cycle. Gentle tasks and early rest will serve you better than pushing through.",
  rest_menstrual:   "Honor your body's need to restore. Light movement, hydration, and compassionate scheduling today.",
  rest_follicular:  'High stress or poor sleep is dampening an otherwise energetic phase. Recovery first.',
  rest_ovulation:   "Rest is the right call today — high symptoms or stress are overriding your cycle's peak energy.",
}

export default function Predict() {
  const formRef   = useFadeIn()
  const [phase,   setPhase]   = useState('follicular')
  const [sleep,   setSleep]   = useState(7)
  const [stress,  setStress]  = useState(4)
  const [symptom, setSymptom] = useState(3)
  const [result,  setResult]  = useState(null)
  const [loading, setLoading] = useState(false)

  function handlePredict() {
    setLoading(true)

    // Simulate a brief loading moment then show result from local model
    setTimeout(() => {
      let score = 0
      if (phase === 'follicular') score += 30
      else if (phase === 'ovulation') score += 25
      else if (phase === 'luteal') score += 5
      else score -= 5

      score += (parseFloat(sleep) - 5) * 8
      score -= (stress - 5) * 7
      score -= (symptom - 3) * 5

      const isHigh = score >= 20
      const conf   = Math.min(95, Math.max(52, 60 + Math.abs(score) * 0.8))
      const key    = `${isHigh ? 'focus' : 'rest'}_${phase}`

      setResult({
        isHigh,
        conf: Math.round(conf),
        message: MESSAGES[key] || (isHigh
          ? 'Good energy signals today — lean into focused work.'
          : 'Gentle tasks and rest will help you recharge today.'),
      })

      setLoading(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 800)
  }

  function handleOpenModel() {
    window.open("https://flowcast-api.streamlit.app", "_blank")
  }

  return (
    <main>
      <section>
        <div className="container">
          <div ref={formRef} className="fade-in">
            <span className="section-tag">Core feature</span>
            <h2>Predict my day</h2>
          </div>

          <div className={styles.layout}>
            {/* ── FORM ── */}
            <div className={styles.formCard}>
              <div className={styles.field}>
                <label className={styles.label}>Cycle phase</label>
                <div className={styles.pills}>
                  {PHASES.map(p => (
                    <button
                      key={p}
                      className={`${styles.pill} ${phase === p.toLowerCase() ? styles.pillSel : ''}`}
                      onClick={() => setPhase(p.toLowerCase())}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  Sleep last night
                  <span className={styles.val}>{parseFloat(sleep).toFixed(1)} hrs</span>
                </label>
                <input
                  type="range" min="3" max="12" step="0.5"
                  value={sleep}
                  onChange={e => setSleep(e.target.value)}
                  className={styles.slider}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  Stress level
                  <span className={styles.val}>{stress} / 10</span>
                </label>
                <input
                  type="range" min="1" max="10" step="1"
                  value={stress}
                  onChange={e => setStress(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={`${styles.field} ${styles.fieldLast}`}>
                <label className={styles.label}>
                  Symptom severity
                  <span className={styles.val}>{symptom} / 10</span>
                </label>
                <input
                  type="range" min="1" max="10" step="1"
                  value={symptom}
                  onChange={e => setSymptom(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <button
                className={styles.predictBtn}
                onClick={handlePredict}
                disabled={loading}
              >
                {loading ? 'Predicting…' : 'Predict my day'}
              </button>
            </div>

            {/* ── RESULT ── */}
            <div className={styles.resultArea}>
              {!result ? (
                <div className={styles.placeholder}>
                  <div className={styles.placeholderIcon}>🌸</div>
                  Fill in your details and click <strong>Predict my day</strong> to get your personalized forecast.
                </div>
              ) : (
                <div className={`${styles.resultCard} ${result.isHigh ? styles.rcFocus : styles.rcRest}`}>
                  <div className={styles.rcHeader}>
                    <div className={styles.rcIcon}>{result.isHigh ? '✦' : '◎'}</div>
                    <div className={styles.rcTitle}>
                      {result.isHigh ? 'High Focus Day' : 'Rest-Oriented Day'}
                    </div>
                    <div className={styles.rcConf}>{result.conf}% confidence</div>
                  </div>
                  <p className={styles.rcBody}>{result.message}</p>
                  <button
                    onClick={handleOpenModel}
                    style={{
                      marginTop: '1rem',
                      background: 'none',
                      border: '1px solid currentColor',
                      borderRadius: '8px',
                      padding: '0.4rem 1rem',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      opacity: 0.7
                    }}
                  >
                    Run full ML model →
                  </button>
                </div>
              )}

              <div className={styles.tips}>
                <div className={styles.tip}><strong>Tip:</strong> Follicular and ovulation phases typically show the highest focus scores.</div>
                <div className={styles.tip}><strong>Tip:</strong> 7+ hours of sleep increases focus probability by up to 2.3×.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}