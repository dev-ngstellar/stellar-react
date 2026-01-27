import React from 'react';

const StarBorder = ({
    as: Component = 'button',
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}) => {
    return (
        <Component
            className={`relative inline-block overflow-hidden rounded-full group ${className}`}
            style={{
                padding: `${thickness}px 0`,
                ...rest.style
            }}
            {...rest}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-xs px-6 py-3.5 rounded-full transition-transform duration-300 group-hover:scale-105 overflow-hidden flex items-center justify-center">
                <span className="relative z-10">{children}</span>
                <div className="relative z-10 max-w-0 overflow-hidden group-hover:max-w-[20px] transition-[max-width] duration-300 ease-in-out">
                    <span className="block pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">→</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] -translate-x-[150%] transition-transform duration-700 ease-in-out group-hover:translate-x-[150%] z-0" />
            </div>
        </Component>
    );
};

export default StarBorder;
