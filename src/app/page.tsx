import Image from 'next/image'
import styles from './page.module.css'
import { Hero } from '~/components/sections/Hero'
const heading = "Welcome to Chicane! hope you have a nice daY" 


export default function Home() {
  return (
    <div className={styles.main} >
      <Hero title="Welcome to Chicane!" subTitle="Hope you have a nice daY" />
    </div>
  )
}
