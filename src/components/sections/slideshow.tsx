'use client'
import img1 from '~/assets/images/asset.jpg';
import img2 from '~/assets/images/back.webp';
import img3 from '~/assets/images/feature.jpeg';
import img4 from '~/assets/images/front.webp';
import img5 from '~/assets/images/hero.png';
import img6 from '~/assets/images/hero1.avif';

const images = [img1, img2, img3, img4, img5, img6];


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight, IconCircle, IconCircleFilled } from '@tabler/icons-react';
import { Chevron } from '../atoms/chevron';

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Auto-advance slideshow every 5 seconds
        const slideshowTimer = setInterval(handleNext, 5000);

        return () => {
            clearInterval(slideshowTimer);
        };
    }, []);

    return (
        <section>
            <div className="overflow-hidden relative h-[70vh] max-h-screen">
                <motion.div initial={false} custom={direction}>
                    <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex].src}
                        alt={`Slide ${currentImageIndex + 1}`}
                        className="slide"
                        initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? '-100%' : '100%' }}
                        transition={{ duration: 0.5 }}
                        custom={direction}
                        onAnimationComplete={() => setDirection(0)}
                    />
                </motion.div>
                <div className="bg-gray-700 opacity-50 p-3 rounded-full w-100 indicator absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            // on hover show its clicable
                            className='cursor-pointer'
                            onClick={() => setCurrentImageIndex(index)}
                        >
                            {currentImageIndex === index ? <IconCircleFilled size={14} /> :
                                <IconCircle size={14} />}
                        </div>
                    ))}
                </div>
               
                <Chevron direction='left' callback={handlePrev} />
                <Chevron direction='right' callback={handleNext} />

            </div>
        </section>
    );

    
};

export default Slideshow;
