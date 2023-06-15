'use client'

import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'

export const ImageContainer = (imgProps: ImageProps) => {

    const { src, alt, width, height } = imgProps

    const classStyles = `flex-shrink-0  block overflow-hidden relative aspect-w-16 aspect-h-9 bg-cover bg-no-repeat bg-center rounded-2xl`

    return (
        <>
            <motion.div
                initial={{ rotateX: 0, opacity: 0 }}
                animate={{ rotateX: [40, 0, 0], opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: 0.2,
                    mass: 1,
                    damping: 30
                }}
            >
                <Image src={src} alt={alt} width={width} height={0}
                    className={classStyles} />
            </motion.div>
        </>
    )
}
