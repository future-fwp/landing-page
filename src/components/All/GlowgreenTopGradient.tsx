import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function GlowgreenTopGradient() {
    const outerDivRef = useRef(null);
    const innerDivRef = useRef(null);

    useEffect(() => {
        const outerDiv = outerDivRef.current;
        const innerDiv = innerDivRef.current;

        if (outerDiv && innerDiv) {
            const tl = gsap.timeline({ 
                repeat: -1, 
                yoyo: true,
                defaults: { ease: 'power2.inOut' }
            });

            // Complex morphing and color transformation
            tl.to([outerDiv, innerDiv], {
                borderRadius: '50%',
                scale: 1.2,
                backgroundColor: 'rgba(34, 197, 94, 0.6)', // Dynamic color shift
                rotation: 360,
                duration: 2
            })
            .to(outerDiv, {
                boxShadow: '0 0 50px rgba(34, 197, 94, 0.5)',
                duration: 1
            }, '-=1')
            .to(innerDiv, {
                x: 40,
                y: -20,
                duration: 2
            }, '-=1.5');
        }
    }, []);

    return (
        <div 
            ref={outerDivRef}
            className="bg-primary/80 w-[300px] h-[150px] blur-3xl rounded-b-full flex justify-center overflow-hidden"
        >
            <div 
                ref={innerDivRef}
                className="bg-primary/70 w-[80px] h-[40px] rounded-b-full"
            ></div>
        </div>
    );
}