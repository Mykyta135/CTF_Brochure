import { useCallback } from 'react';

// Custom hook for smooth scrolling to an element with a specific ID
const useSmoothScrollTo = () => {
    const handleScrollTo = useCallback((href: string) => {
        const targetElement: HTMLElement | null = document.querySelector(href);

        if (targetElement) {
            const start = window.pageYOffset;
            const end = targetElement.offsetTop;

            const duration = 1000; // Adjust the duration value (in milliseconds) as desired
            const startTime = performance.now();

            const animateScroll = (timestamp: number) => {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);

                window.scrollTo(0, start + easeProgress * (end - start));

                if (elapsed < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    }, []);

    return handleScrollTo;
};

export default useSmoothScrollTo;