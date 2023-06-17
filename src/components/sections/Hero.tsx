import { Heading } from '~/components/atoms/Heading'
import { ChicaneTwoText } from '~/shared/types';
import { Subtitle } from '~/components/atoms/Subtitle';
import { ImageContainer } from '../atoms/ImageContainer';
import { ImageProps } from 'next/image';
import img from '~/assets/images/hero.png'


function Hero(props: ChicaneTwoText) {

    const { title, subtitle, } = props;
    const imgProps: ImageProps = {
        src: img,
        alt: 'Hero Images',
        width: 935,
        height: 550,
    }

    const sectionClasses = `flex flex-col items-center justify-center gap-1`
    return (
        <section className={sectionClasses} >
            <Heading {...title} />
            <Subtitle {...subtitle}/>
            <ImageContainer {...imgProps} />
        </section>
    )
}

export { Hero }

