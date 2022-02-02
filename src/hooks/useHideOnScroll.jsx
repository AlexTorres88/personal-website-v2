import { useRef, useState, useEffect } from 'react';

export default function useHideOnScroll() {
    const prevScrollY = useRef();
    const [isHidden, setIsHidden] = useState(false);
  
    useEffect(() => {
        const onScroll = () => {
        setIsHidden(isHidden => {
            if(window.scrollY === 0) return false;
            const scrolledDown = window.scrollY > prevScrollY.current;
            if (scrolledDown && !isHidden) {
                return true;
            } else if (!scrolledDown && isHidden) {
                return false;
            } else {
                prevScrollY.current = window.scrollY;
                return isHidden;
            }
        });
    };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return isHidden;
};