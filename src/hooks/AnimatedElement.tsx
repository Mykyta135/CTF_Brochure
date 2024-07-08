'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Direction = 'bottom' | 'left' | 'right' | 'static';

interface AnimatedElementProps {
    children: React.ReactElement;
    direction: Direction;
    duration?: number;
    delay?: number;
    once?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, direction, delay = 0, duration = 0.5, once = false }) => {
    const [ref, inView] = useInView({
        triggerOnce: once,
        threshold: 0.2,
    });

    const directionToAnimation = {
        bottom: { axis: 'y', percent: '20%' },
        left: { axis: 'x', percent: '-10%' },
        right: { axis: 'x', percent: '10%' },
        static: { axis: "x", percent: '0' }
    };

    const { axis, percent } = directionToAnimation[direction];

    const animationVariants = {
        hidden: { opacity: 0, [axis]: percent },
        visible: { opacity: 1, [axis]: '0%' },
    };

    const animationTransition = {
        duration: duration,
        delay: delay
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={animationTransition}
        >
            {children}

        </motion.div>
    );
};

export default AnimatedElement;