import React from 'react'
import { teamData } from '../constants' // Aapka updated constants array
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CustomSection = () => {

    useGSAP(() => {
        const isMobile = window.innerWidth <= 768;
        
        // Text Parallax Timeline (Aapki exact values)
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

        // Headings left-right Move (Aapki exact values)
        Tl.to(".custom-isolated-section .first-title", {
            xPercent: 110,
        }).to(".custom-isolated-section .second-title", {
            xPercent: 70,
        }, "<").to(".custom-isolated-section .third-title", {
            xPercent: -60,
        }, "<")

        // Ye section khud kab Pin Hoga (Aapka exact logic)
        let pinTl = gsap.timeline({
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

        // TEMPLATE WALI SAME ANIMATION (Cards ka neeche se upar aana one by one)
        pinTl.from(".vd-card", {
            yPercent: 150, 
            stagger: 0.3,
            ease: "power1.inOut",
            force3D: true
        })
    })

    return (
        // Baki aapki sari classes z-20, bg-[#000], shadow wesi ki wesi hain.
        <section className="testimonials-section custom-isolated-section relative z-20 w-full h-[120dvh] bg-[#000] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            
            <div className="absolute size-full flex flex-col items-center pt-[10vw]">
                {/* Custom Sizes For Headings (Aapki exact classes) */}
                <h1 
                    className='text-[#ba1c3c] first-title uppercase text-[13.5vw] leading-[100%] tracking-[-.4vw] ml-[2vw] font-bold' 
                    style={{ willChange: 'transform' }}
                >
                    Faces
                </h1>
                
                <h1 
                    className='text-[#ffffff] second-title uppercase text-[13.5vw] leading-[100%] tracking-[-.4vw] ml-[2vw] font-bold' 
                    style={{ willChange: 'transform' }}
                >
                    Of
                </h1>
                
                <h1 
                    className='text-[#ba1c3c] third-title uppercase text-[13.5vw] leading-[100%] tracking-[-.4vw] ml-[35vw] font-bold' 
                    style={{ willChange: 'transform' }}
                >
                    Deltashoppe
                </h1>
            </div>
            
            {/* Container ko properly Flex, Center aur Gap diya hai CSS ko override kar k */}
            <div className="pin-box !ps-0 !flex !flex-row !flex-nowrap !justify-center !items-center !gap-3 md:!gap-5 !px-2 md:!px-4 !w-full">
                {
                    // 6 cards render karne ke liye
                    teamData.slice(0, 6).map((card, index) => (
                        <div 
                            key={index} 
                            // 'group', 'overflow-hidden' aur 'cursor-pointer' add kia hai baqi sab exact aapki classes hain
                            className={`vd-card ${card.translation} group overflow-hidden cursor-pointer aspect-[9/16] h-auto !relative !m-0 !w-[35vw] md:!w-[15vw] lg:!w-[14.5vw] xl:!w-[14vw] !border-white shadow-2xl`}
                            style={{ willChange: 'transform' }} 
                        >
                           {/* Image Blur aur Dark hogi hover py */}
                           <img 
                               src={card.img}
                               alt={card.name}
                               className='size-full object-cover pointer-events-none transition-all duration-500 ease-in-out group-hover:blur-[5px] group-hover:brightness-[0.25] group-hover:scale-105' 
                           />

                           {/* 🟢 FIX 1: Aapka diya hua EXACT button code LinkedIn k liye use kia hai (Scale-y animation k sath) */}
                           <a 
                               href={card.linkedin || "#"} 
                               target="_blank" 
                               rel="noreferrer"
                               className="absolute top-2 right-2 md:top-3 md:right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 z-30"
                           >
                               <button className="h-8 md:h-10 px-3 md:px-3 flex items-center justify-center gap-1.5 rounded-full bg-black/60 border border-white/20 text-white font-black text-[10px] tracking-widest hover:text-white transition-all cursor-pointer group/btn relative overflow-hidden backdrop-blur-sm">
                                   <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover/btn:scale-y-100 -z-10"></span>
                                   <svg className="relative z-10 w-3 h-3 md:w-3.5 md:h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                   </svg>
                                   
                               </button>
                           </a>
                           
                           {/* Data Reveal Box */}
                           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-16 px-2 md:px-3 flex flex-col justify-end">
                                
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center">
                                    
                                    {/* AAPKA EXACT H2 CODE */}
                                    <h2 className="text-white bg-[#ba1c3c] rounded-full text-center font-sans font-bold text-lg md:text-xl xl:text-2xl uppercase m-0 tracking-wide w-full z-10">
                                        {card.name}
                                    </h2>

                                    {/* 🟢 FIX 2: Role Hamesha Dikhay ga, original Color hai, aur 'mb-3' add kia hai gap k liye */}
                                    <p className="text-[#ba1c3c] font-bold text-[9px] md:text-[11px] xl:text-xs mt-1.5 mb-10 uppercase tracking-wider z-10 text-center">
                                        {card.role}
                                    </p>

                                    {/* HOVER PAR PURA DATA YAHAN AAYEGA */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out w-full text-center">
                                        <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                            {/* Neechy spacing taake data border me na ghussay */}
                                            <p className="text-gray-200 text-[8px] md:text-[9px] xl:text-[11px] font-paragraph leading-snug xl:leading-relaxed pb-3">
                                                {card.bio}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                           </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default CustomSection