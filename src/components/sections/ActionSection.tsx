import { ActionSectionProps } from "~/shared/types";
import { Heading2 } from "../atoms/Heading2";
import { title } from "process";
import { Subtitle } from "../atoms/Subtitle";
import CTA from "../atoms/CTA";
import AnimateUp from "~/common/BaseAnimation";

export const ActionSection = (props: ActionSectionProps) => {

    const { twoText, actions } = props
    const { title, subtitle } = twoText

    return (
        <div className="flex flex-col items-start justify-center gap-5">
            <Heading2 text={title?.text} />
            <Subtitle text={subtitle?.text} />
            {actions.map(each => {
                return <AnimateUp><CTA data={each} /> </AnimateUp>
            })}
        </div>
    )


}

