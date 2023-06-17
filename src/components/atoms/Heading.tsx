'use client'

import { motion } from 'framer-motion'
import { TextProps } from '~/shared/types'

export const Heading = (props: TextProps) => {

    const { text, alignment = 'center', fontSize = '7xl' } = props

    return (
        <motion.div
            initial={{ y: 55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.2,
                mass: 1,
                damping: 30
            }}
            whileHover={{ scale: 1.01 }} >
            <div
                style={{ fontSize: `${fontSize}` }}
                className={`text-${alignment} text-7xl flex-shrink-0 w-auto h-auto 
                whitespace-pre-wrap break-words overflow-visible relative font-bold 
                font-sans dark:text-textHeadingDark text-textHeading  tracking-tight 
                leading-tight `} >
                {text}
            </div>
        </motion.div>
    )
}
