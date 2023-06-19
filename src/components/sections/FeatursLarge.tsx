import Image from "next/image";
import src from '~/assets/images/front.webp';
import src1 from '~/assets/images/back.webp';
import { ActionSection } from "~/components/sections/ActionSection";
import { FeatureProps } from "~/shared/types";


export const FeaturesLarge = (props: FeatureProps) => {

    const { actionSection, image } = props
    const { twoText, actions } = actionSection
    const { title, subtitle } = twoText

    return (
        <section>
            <div className="py-24 relative w-full h-min flex flex-col justify-center 
            items-center flex-nowrap gap-2 rounded-none overflow-hidden bg-blue-00">
                <div className="rounded-none gap-10 flex-nowrap content-center p-10 relative 
                overflow-visible max-w-full justify-center items-center flex-col flex 
                h-min flex-shrink-0 w-[1000px] bg-blue-00">
                    <div className="flex-shrink-0 flex-1 w-full h-min flex flex-row
                    justify-center items-center overflow-visible relative
                    content-center flex-nowrap gap-10 rounded-none bg-blue-00" >
                        <Image className="
                        box-border flex-1 flex-shrink-0 w-[1fr] h-360 block overflow-hidden
                         relative aspect-[4/3] bg-cover bg-no-repeat bg-center 
                rounded-lg"
                            style={{ objectFit: 'cover' }} src={src} alt="image"
                        />
                        <div className="content-center flex-shrink-0 flex flex-1 w-[1fr] h-auto 
                flex-col justify-center items-start self-stretch relative p-0 gap-5 
                rounded-none bg-blue-00">
                            <ActionSection {...actionSection} />
                        </div>
                    </div>
                    {/* <div className="flex-shrink-0 flex-1 w-full h-min flex flex-row
                    justify-center items-center overflow-visible relative
                    content-center flex-nowrap gap-10 rounded-none bg-blue-00" >

                        <div
                            className="content-center flex-shrink-0 flex flex-1 w-[1fr] h-auto 
                flex-col justify-center items-start self-stretch relative p-0 gap-5 
                rounded-none bg-blue-00">

                            <ActionSection {...actionSection} />
                        </div>
                        <Image
                            className="  box-border flex-1 flex-shrink-0 w-[1fr] h-360 block 
                overflow-hidden relative aspect-[4/3] bg-cover bg-no-repeat bg-center 
                rounded-lg"
                            style={{ objectFit: 'cover' }} src={src1} alt="image" />
                    </div> */}

                </div>
            </div>
        </section >
    )
}