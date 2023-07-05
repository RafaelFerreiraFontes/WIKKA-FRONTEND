import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint = 700) => {
    if (typeof window == 'undefined')
        return { isMobile: false };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    const handlePageResized = () => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= breakpoint);
        }
    };


    useEffect(() => {
        handlePageResized();

        console.log("isMobile: ", window.innerWidth, isMobile,);
    }, [window]);

    window.addEventListener('resize', handlePageResized);

    window.addEventListener('orientationchange', handlePageResized);

    window.addEventListener('load', handlePageResized);

    window.addEventListener('reload', handlePageResized);

    window.addEventListener('DOMContentLoaded', handlePageResized);

    window.addEventListener('hashchange', handlePageResized);

    return {
        isMobile,
    };
};

export default useIsMobile;