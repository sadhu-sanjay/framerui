'use client'

import { motion } from 'framer-motion'

export const Heading = ({ title = 'Default Heading' }: { title?: string }) => {
    return (
        <motion.div className="flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words overflow-visible relative font-bold font-sans dark:text-textHeadingDark text-textHeading text-7xl tracking-tight leading-tight text-center"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.01 }} >
            {title}
        </motion.div>
    )
}
