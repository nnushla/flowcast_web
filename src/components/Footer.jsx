import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <strong>FlowCast</strong> — Understand your rhythm. Work with your energy, not against it.
      <span>Built for college students · Not medical advice · Data stays on your device</span>
    </footer>
  )
}
