import { ActionSectionProps } from "~/shared/types";
import { Heading } from "../atoms/Heading";
import { title } from "process";
import { Subtitle } from "../atoms/Subtitle";

export const ActionSection = (props: ActionSectionProps) => {

    const { twoText, actions } = props
    const { title, subtitle } = twoText

    return (
        <div>
            <Heading {...title} />
            <Subtitle text={subtitle?.text} />
        </div>
    )


}

