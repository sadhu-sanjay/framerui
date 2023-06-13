import Image from 'next/image'
import styles from './page.module.css'
import { Hero } from '~/components/widgets/Hero'

export default function Home() {
  return (
    <div className={styles.main} >
      <Hero />
    </div>
  )
}