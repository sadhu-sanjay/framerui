
export const Heading = ({ title = 'Default Heading' }: { title?: string }) => {
    return (
        <div className="flex-shrink-0 w-auto h-auto whitespace-pre-wrap 
        break-words overflow-visible relative font-bold font-sans dark:text-textHeadingDark
         text-textHeading text-7xl tracking-tight leading-tight text-center">
            {title}
        </div>
    )
}

export const Heading2 = ({ title = 'Default Heading' }: { title?: string }) => {
    return (
        <div className="heading" >
            {title}
        </div>
    )
}
