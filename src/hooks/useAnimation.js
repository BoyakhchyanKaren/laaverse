import { useState, useEffect } from "react";

export const useElementOnScreen = (ref, rootMargin = "0px") => {
    const [isIntersecting, setIsIntersecting] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                //eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    },
        [ref, rootMargin]);
    return isIntersecting;
}