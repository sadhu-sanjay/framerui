import { Heading } from '~/components/atoms/Heading'
import { ChicaneTextProps } from '~/shared/types';
import { Subtitle } from '~/components/atoms/Subtitle';
import { ImageContainer } from '../atoms/ImageContainer';
import { ImageProps } from 'next/image';

function Hero(props: ChicaneTextProps) {

    const { title, subtitle, color, size } = props;
    const imgProps: ImageProps = {
        src: '/images/hero.png',
        alt: 'Hero Image',
        width: 935,
        height: 550,
    }
    const sectionClasses = `flex flex-col items-center justify-center gap-1`

    return (
        <section className={sectionClasses} >
            <Heading title={title} />
            <Subtitle title={subtitle} />
            <ImageContainer {...imgProps} />
        </section>
    )
}

export { Hero }

