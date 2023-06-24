import { Hero } from '~/components/sections/Hero'
import Image from 'next/image'
import { FeaturesLarge } from '~/components/sections/FeatursLarge'
import { featuresLargeData, heroProps, twoColumnImageTextData } from '~/data/data'
import img from '~/assets/images/front.webp'
import { TwoColumnImageText } from '~/components/sections/TwoColumnImageText'

export default function Home() {
  return (
    <main >
      <Hero {...heroProps} />
      <FeaturesLarge {...featuresLargeData} />
      <TwoColumnImageText {...twoColumnImageTextData} />
    </main>
  )
}
