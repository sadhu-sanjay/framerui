import { FeaturesLarge } from '~/components/sections/FeatursLarge'
import { Hero } from '~/components/sections/Hero'
import { TwoColumnImageText } from '~/components/sections/TwoColumnImageText'
import { featuresLargeData, heroProps, twoColumnImageTextData } from '~/data/data'

export default function Home() {
  return (
    <main >
      <Hero {...heroProps} />
      <FeaturesLarge {...featuresLargeData} />
      <TwoColumnImageText {...twoColumnImageTextData} />
    </main>
  )
}
