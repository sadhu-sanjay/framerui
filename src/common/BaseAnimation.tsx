'use client';

import { animationEnabled } from '~/utils/config.js'
import { delay, motion } from 'framer-motion';

const AnimateUp = ({ children, delay = 0.2 }: { children: React.ReactNode, delay?: number }) => {
    return (
        <>
            {animationEnabled ? <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: delay, // 0.2
                    mass: 2,
                    damping: 30
                }}
            >
                {children}
            </motion.div> : children}
        </>
    );
};

export default AnimateUp;
