import { Hero } from '~/components/sections/Hero'
import Image from 'next/image'
import { FeaturesLarge } from '~/components/sections/FeatursLarge'
import { featuresLargeData, heroProps, twoColumnImageTextData } from '~/shared/data'
import img from '~/assets/images/front.webp'
import { ChicaneTwoText } from '~/shared/types'
import { TwoColumnImageText } from '~/components/sections/TwoColumnImageText'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9">
      <Hero {...heroProps} />
      <FeaturesLarge {...featuresLargeData} />
      <TwoColumnImageText {...twoColumnImageTextData} />
    </main>
  )
}
