import { Heading } from '~/components/atoms/Heading'
import { CallToAction, DoubleTextProps, TextProps } from '~/components/shared/types';
import { Subtitle } from '~/components/atoms/Subtitle';
import { ImageContainer } from '../atoms/ImageContainer';
import { ImageProps } from 'next/image';
import img from '~/assets/images/hero.webp'
import CTA from '../atoms/CTA';
import AnimateUp from '~/common/BaseAnimation';

function Hero(props: DoubleTextProps) {

    const { title, subtitle, } = props;
    const imgProps: ImageProps = {
        src: img,
        alt: 'Hero Images',
        width: 935,
        height: 550,
    }
    const callToAction: CallToAction = {
        text: 'Buy Now',
        href: '#',
        targetBlank: true,
        btnType: 'primary',
    }

    const sectionClasses = `flex flex-col items-center justify-center gap-1`
    return (
        <section className={sectionClasses} >
            <div className='px-12 py-8 lg:p-20 flex flex-col items-center justify-center gap-1' >
                <div className='flex flex-col items-center 
                justify-center'>
                    <Heading text={title?.text} ></Heading>
                    <Subtitle props={{...subtitle}} />
                    <div style={{ marginTop: '.5rem' }}> {/*custom padding as workaround */}
                        <AnimateUp > <CTA data={callToAction} /> </AnimateUp>
                    </div>
                    <ImageContainer {...imgProps} />
                </div>
            </div>
        </section>
    )
}

export { Hero }

