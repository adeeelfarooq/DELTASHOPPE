import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CustomSection = () => {

    useGSAP(() => {
        const isMobile = window.innerWidth <= 768;
        
        // Overlap k liye same margin
        gsap.set(".custom-isolated-section", {
            marginTop: "-100dvh"
        })

        // Text Parallax Timeline
        const Tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".custom-isolated-section",
                start: "top bottom",
                end: "200% top",
                scrub: 1, 
                fastScrollEnd: true, 
                invalidateOnRefresh: true 
            },
            defaults: { force3D: true }
        })

        // Same heading animations
        Tl.to(".custom-isolated-section .first-title", {
            xPercent: 140,
        }).to(".custom-isolated-section .second-title", {
            xPercent: 125,
        }, "<").to(".custom-isolated-section .third-title", {
            xPercent: -70,
        }, "<")

        // Pinning Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: ".custom-isolated-section",
                start: isMobile ? "top top" : "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
                fastScrollEnd: true,
                invalidateOnRefresh: true
            },
            defaults: { force3D: true }
        })
        
        // 🚨 Cards ki animation yahan se hata di gayi hai jaisa aapne kaha tha
    })

    return (
        // 💡 CSS inlined: bg-[#faeade] (Milk), h-[120dvh], relative, w-full
        <section className="custom-isolated-section relative w-full h-[120dvh] bg-[#000]">
            
            <div className="absolute size-full flex flex-col items-center pt-[13vw]">
                {/* 
                  💡 Headings CSS inlined: 
                  text-[15.5vw] leading-[100%] tracking-[-.4vw] ml-[2vw] font-bold 
                  ye wahi exact classes hain jo apki index.css me h1 k liye theen 
                */}
                <h1 
                    className='text-[#ba1c3c] first-title uppercase text-[12.5vw] leading-[100%] tracking-[-.4vw] ml-[2vw] font-bold' 
                    style={{ willChange: 'transform' }}
                >
                    faces
                </h1>
                
                <h1 
                    className='text-[#ffffff] second-title uppercase text-[12.5vw] leading-[100%] tracking-[-.4vw] ml-[2vw] font-bold' 
                    style={{ willChange: 'transform' }}
                >
                    Of
                </h1>
                
                <h1 
                    className='text-[#ba1c3c] third-title uppercase text-[12.5vw] leading-[100%] tracking-[-.4vw] ml-[37vw] font-bold' 
                    style={{ willChange: 'transform' }}
                >
                    Deltashoppe
                </h1>
            </div>
            
            {/* CARDS WALA HISA (pin-box) YAHAN SE HATA DIYA HAI */}

            {/* BUTTON EXACTLY SAME HEY */}
            

        </section>
    )
}

export default CustomSection