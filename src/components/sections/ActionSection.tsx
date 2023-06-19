import { ActionSectionProps } from "~/shared/types";
import { Heading2 } from "../atoms/Heading2";
import { title } from "process";
import { Subtitle } from "../atoms/Subtitle";

export const ActionSection = (props: ActionSectionProps) => {

    const { twoText, actions } = props
    const { title, subtitle } = twoText

    return (
        <div>
            <Heading2 text={title?.text} />
            <Subtitle text={subtitle?.text} />
        </div>
    )


}

