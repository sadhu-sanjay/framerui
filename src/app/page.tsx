import { Hero } from '~/components/sections/Hero'
import Image from 'next/image'
import { FeaturesLarge } from '~/components/sections/FeatursLarge'
import { featuresLargeData, heroProps } from '~/shared/data'
import img from '~/assets/images/front.webp'
import { ChicaneTwoText } from '~/shared/types'

const heading = "Welcome to Chicane! hope you have a nice daY"

const childrenHere = () => {
  return (
    <div>

    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9">
      <Hero {...heroProps} />
      <FeaturesLarge {...featuresLargeData} />
    </main>
  )
}
