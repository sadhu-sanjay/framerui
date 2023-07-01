import { FeaturesLarge } from '~/components/sections/FeatursLarge'
import { Hero } from '~/components/sections/Hero'
import { TwoColumnImageText } from '~/components/sections/TwoColumnImageText'
import { featuresLargeData, heroProps, twoColumnImageTextData } from '~/data/data'
import { ContactForm } from '~/components/sections/contact'
import Slideshow from '~/components/sections/slideshow'

export default function Home() {
  return (
    <main >
      {/* <Slideshow /> */}
      <Hero {...heroProps} />
      <FeaturesLarge {...featuresLargeData} />
      <TwoColumnImageText {...twoColumnImageTextData} />
      <ContactForm />
    </main>
  )
}
