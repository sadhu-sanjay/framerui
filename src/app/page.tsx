import styles from './page.module.css'
import { Hero } from '~/components/sections/Hero'
import Image from 'next/image'

const heading = "Welcome to Chicane! hope you have a nice daY"

export default function Home() {
  return (
    <div className={styles.main} >
      <Hero title="Welcome to Chicane!" subtitle="Hope you have a nice daY" />
      <div className="bg-gradient-to-b from-gray-900 to-gray-700">
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          // Get racing image from unsplash of size 1080 * 720
          
        </div>
      </div>
    </div>
  )
}
