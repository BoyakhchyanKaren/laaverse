import React, { useRef } from "react";
import { useElementOnScreen } from "hooks/useAnimation";

const AnimateIn = ({ from, to, children }) => {
    const ref = useRef(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles = {
        transition: "600ms ease-in-out",
    };
    return (
        <div
            ref={ref}
            style={
                onScreen
                    ? {
                        ...defaultStyles,
                        ...to,
                    }
                    : {
                        ...defaultStyles,
                        ...from,
                    }
            }
        >
            {children}
        </div>
    );
};

const FadeIn = ({ children }) => (
    <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {children}
    </AnimateIn>
);
const FadeUp = ({ children }) => (
    <AnimateIn
        from={{ opacity: 0.5, translate: "0 15rem" }}
        to={{ opacity: 1, translate: "none" }}
    >
        {children}
    </AnimateIn>
);
const ScaleIn = ({ children }) => (
    <AnimateIn from={{ scale: "-0.2" }} to={{ scale: "1" }}>
        {children}
    </AnimateIn>
);

export const Animate = {
    FadeIn,
    FadeUp,
    ScaleIn,
};