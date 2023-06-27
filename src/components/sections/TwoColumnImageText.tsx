import sideImg from '~/assets/images/side.webp';
import { ActionSection } from "~/components/sections/ActionSection";
import { FeatureProps } from "~/components/shared/types";

export const TwoColumnImageText = (props: FeatureProps) => {

    const { actionSection, image } = props
    const { twoText, actions } = actionSection
    const { title, subtitle } = twoText

    return (
        <section>
            <div className="flex-shrink-0 flex-1 w-full h-min flex flex-col sm:flex-row  
                    justify-center items-center overflow-visible relative content-center
                    flex-nowrap gap-10 rounded-none bg-blue-00" >
                <div className="
                box-border flex-1 flex-shrink-0 w-full h-[260px] sm:h-[500px] 
                block overflow-hidden relative aspect-[1.33/1] sm:aspect-[4/3] bg-cover 
                bg-no-repeat bg-center rounded-lg"
                    style={{ objectFit: 'cover', backgroundImage: `url(${sideImg.src})` }}
                />
                <div className="content-center flex flex-1 w-full h-auto 
                flex-col justify-center items-start self-stretch relative p-0 gap-5 
                rounded-none bg-blue-00">
                    <ActionSection {...actionSection} />
                </div>
            </div>

        </section >
    )
}

