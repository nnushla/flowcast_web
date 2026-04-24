import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  PointElement, LineElement,
  Filler, Tooltip, Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useFadeIn } from '../hooks/useFadeIn'
import styles from './Insights.module.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const STATS = [
  { val: '14',   color: 'var(--pink-d)',  label: 'High Focus days' },
  { val: '76%',  color: 'var(--lav-dd)', label: 'Avg confidence' },
  { val: '7.2h', color: 'var(--blue-dd)', label: 'Avg sleep' },
  { val: '4.1',  color: '#c4688c',        label: 'Avg stress level' },
]

const HEATMAP = [
  'rest','rest','rest','rest','focus','focus','focus',
  'focus','focus','focus','focus','focus','focus','focus',
  'focus','focus','focus','focus','mid','focus','mid',
  'rest','rest','rest','rest','mid','mid','rest',
]
const HM_COLORS = { focus: '#D6ECFF', mid: '#E6D6FF', rest: '#F8C8DC' }

const INSIGHTS = [
  { bold: 'Peak focus', text: ' — You tend to perform best during your follicular phase. Consider scheduling exams and presentations here.' },
  { bold: 'Stress impact', text: ' — Stress above 7/10 reduces your focus probability by an estimated 38%. Prioritize rest when stress is high.' },
  { bold: 'Sleep matters', text: ' — Days with 7+ hours of sleep show a 2.3× higher chance of high focus, regardless of cycle phase.' },
]

const chartData = {
  labels: ['Menstrual', 'Follicular', 'Ovulation', 'Luteal'],
  datasets: [
    {
      label: 'Productivity',
      data: [42, 78, 85, 55],
      borderColor: '#d4789c',
      backgroundColor: 'rgba(248,200,220,0.25)',
      borderWidth: 2.5,
      fill: true,
      tension: 0.45,
      pointBackgroundColor: '#d4789c',
      pointRadius: 5,
    },
    {
      label: 'Focus probability',
      data: [35, 72, 80, 48],
      borderColor: '#b899e8',
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderDash: [5, 3],
      tension: 0.45,
      pointBackgroundColor: '#b899e8',
      pointRadius: 4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      min: 20, max: 100,
      grid: { color: '#F8C8DC55' },
      ticks: { color: '#9a9ab8', font: { size: 11 }, stepSize: 20 },
    },
    x: {
      grid: { display: false },
      ticks: { color: '#9a9ab8', font: { size: 11 } },
    },
  },
}

export default function Insights() {
  const headerRef   = useFadeIn()
  const statsRef    = useFadeIn()
  const chartsRef   = useFadeIn()
  const insightRef  = useFadeIn()

  return (
    <main>
      <section className={styles.section}>
        <div className="container">
          <div ref={headerRef} className="fade-in">
            <span className="section-tag lav">Dashboard</span>
            <h2>Your insights</h2>
          </div>

          {/* Stats */}
          <div ref={statsRef} className={`${styles.statsRow} fade-in`}>
            {STATS.map(({ val, color, label }) => (
              <div key={label} className={styles.statCard}>
                <div className={styles.statVal} style={{ color }}>{val}</div>
                <div className={styles.statLbl}>{label}</div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div ref={chartsRef} className={`${styles.chartsGrid} fade-in`}>
            <div className={styles.chartCard}>
              <div className={styles.chartTitle}>Productivity by cycle phase</div>
              <div style={{ position: 'relative', height: '200px' }}>
                <Line data={chartData} options={chartOptions} />
              </div>
              <div className={styles.legend}>
                <span><span className={styles.dot} style={{ background: '#d4789c' }} />Productivity score</span>
                <span><span className={styles.dot} style={{ background: '#b899e8' }} />Focus probability</span>
              </div>
            </div>

            <div className={styles.chartCard}>
              <div className={styles.chartTitle}>Focus pattern — last 28 days</div>
              <div className={styles.heatmap}>
                {HEATMAP.map((p, i) => (
                  <div key={i} className={styles.hmCell} style={{ background: HM_COLORS[p] }} />
                ))}
              </div>
              <div className={styles.legend}>
                <span><span className={styles.dot} style={{ background: '#D6ECFF', border: '1px solid #82bfe888' }} />High focus</span>
                <span><span className={styles.dot} style={{ background: '#E6D6FF', border: '1px solid #b899e888' }} />Moderate</span>
                <span><span className={styles.dot} style={{ background: '#F8C8DC', border: '1px solid #F8C8DC88' }} />Rest day</span>
              </div>
            </div>
          </div>

          {/* Insight cards */}
          <div ref={insightRef} className={`${styles.insightList} fade-in`}>
            {INSIGHTS.map(({ bold, text }) => (
              <div key={bold} className={styles.insightItem}>
                <strong>{bold}</strong>{text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
