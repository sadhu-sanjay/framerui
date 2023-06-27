'use client'

import { motion } from 'framer-motion'
import AnimateUp from '~/common/BaseAnimation'
import { TailWindTextAlign, TailWindTextSizes, TextProps } from '~/components/shared/types'

export const Heading3 = ({ text, textAlign = 'text-left' }: { text?: string, textAlign?: TailWindTextAlign }) => {

    return (
        <AnimateUp>
            <div
                className={` flex-shrink-0 w-auto h-auto 
                whitespace-pre font-semibold font-sans text-custom-color 
                text-base leading-6 ${textAlign}
                `} >
                {text}
            </div>
        </AnimateUp>
    )
}
