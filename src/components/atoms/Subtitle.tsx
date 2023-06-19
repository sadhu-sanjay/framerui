'use client'

import { TextProps } from "~/shared/types";
import { motion } from "framer-motion";

export const Subtitle = (props: TextProps) => {
    const { text } = props;

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
        >
            <div 
            className="dark:text-gray-200 flex-shrink-0 w-auto h-auto 
            whitespace-pre-wrap break-words overflow-visible flex-1 flex-grow-0  
            min-w-0 relative font-medium font-sans text-gray-500 text-lg 
            tracking-tighter leading-tight text-start">
                {text}
            </div>
        </motion.div>
    )
}
