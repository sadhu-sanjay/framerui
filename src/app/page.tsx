import { Hero } from '~/components/sections/Hero'
import Image from 'next/image'

const heading = "Welcome to Chicane! hope you have a nice daY"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero title="Welcome to Chicane!" subtitle="Hope you have a nice daY" />
    </main>
  )
}
