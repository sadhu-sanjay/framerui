import { ChicaneTextProps } from "~/shared/types";

export const Subtitle = (props: ChicaneTextProps) => {
    const { title } = props;

    return (
        <div className="dark:text-gray-200 flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words overflow-visible flex-1 flex-grow-0  min-w-0 relative font-medium font-sans text-gray-500 text-lg tracking-tighter leading-tight text-center">
            {title}
        </div>
    )
}
