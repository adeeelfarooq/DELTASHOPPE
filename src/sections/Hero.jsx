import React, { useState, useRef } from "react";
import { carouselSlides, servicesList } from "../constants"; 
import BottomRightCarousel from "../components/BottomRightCarousel"; 
import ServicesModal from "../components/ServicesModal"; 
import PageContainer from "../components/PageContainer"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroTemplate = () => {
  // 🟢 Ye dono zaroori hain inko comment nahi karna warna page crash ho jayega
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  
  // 🔴 VIDEO LOGIC COMMENTED OUT FOR NOW
  /*
  const videoRef = useRef(null); 
  const maxVideoLength = 3.7; 

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= maxVideoLength) {
      videoRef.current.pause(); 
    }
  };
  */

  // 🟢 GSAP PIN LOGIC FOR STACKING EFFECT
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      // Jab tak agla section poora upar na aa jaye, ye pin rahega
      end: "bottom top", 
      pin: true,
      pinSpacing: false, // 🚀 MAGIC KEY: Ye agle section ko iske upar slide hone dega
    });

    // 🔴 VIDEO GSAP DELAY COMMENTED OUT
    /*
    gsap.delayedCall(2, () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    });
    */
  });

  return (
    <>
      <section ref={heroRef} className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center py-4 lg:py-6">
        
        {/* 🔴 BACKGROUND 3D VIDEO COMMENTED OUT */}
        {/* 
        <video 
          ref={videoRef}
          muted 
          playsInline 
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/videos/Bg-video1.mp4" type="video/mp4" />
        </video> 
        */}

        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}

        {/* 🟢 SVG DEFS - Only kept the Bottom Right Carousel Clip-Path */}
        <svg className="absolute w-0 h-0 pointer-events-none" style={{ transform: "translateZ(0)" }}>
          <defs>
            <clipPath id="br-card-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.06, 0 L 0.60, 0 C 0.63, 0 0.65, 0.03 0.65, 0.08 L 0.65, 0.20 C 0.65, 0.25 0.68, 0.28 0.73, 0.28 L 0.94, 0.28 C 0.97, 0.28 1.0, 0.31 1.0, 0.36 L 1.0, 0.94 C 1.0, 0.97 0.97, 1.0 0.94, 1.0 L 0.06, 1.0 C 0.03, 1.0 0, 0.97 0, 0.94 L 0, 0.06 C 0, 0.03 0.03, 0 0.06, 0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* 🔲 THE MAIN UI WRAPPER */}
        <PageContainer className="h-full transform-gpu">
          
          {/* Main Background Panel (Clip path removed from here) */}
          <div className="absolute inset-0 w-full h-full bg-transparent pointer-events-auto overflow-hidden shadow-2xl">
            {/* 🟢 MAIN SCREEN CONTENT GOES HERE (FULLY ZOOM-PROOF & PIXEL PERFECT) */}
            <div className="absolute inset-0 flex items-center justify-between px-[8%] pointer-events-none ">
               
               {/* Left Side: Headings */}
               <div className="flex flex-col items-start pointer-events-auto z-20 -mt-10">
                   {/* Block 1: No-Fluff */}
                   <div className="bg-[#ba1c3c] px-[clamp(1rem,1.8vw,2rem)] py-[clamp(0.5rem,0.8vw,1rem)]">
                       <h2 className="text-white text-[clamp(1.5rem,3.2vw,3.6rem)] font-bold uppercase tracking-widest leading-none m-0">
                           No-Fluff
                       </h2>
                   </div>
                   {/* Block 2: Agency */}
                   <div className="bg-[#ba1c3c] px-[clamp(1.5rem,2.5vw,3rem)] py-[clamp(1rem,2vw,2.5rem)]">
                       <h1 className="text-white text-[clamp(4rem,8.5vw,9.5rem)] font-black uppercase leading-[0.8] tracking-tighter m-0">
                           Agency
                       </h1>
                   </div>
                   
               </div>
               

               {/* Center Image: 100% exact proportional scaling based on screenshot */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10 flex items-center justify-center">
                   <img 
                      src="/images/D1.png" 
                      alt="Big D" 
                      className="h-[clamp(12rem,17vw,20rem)] w-auto object-contain transition-all duration-300" 
                   />
               </div>

               {/* Right Side: Absolute Paragraph */}
               <div className="flex items-stretch gap-[clamp(0.5rem,1vw,1.2rem)] pointer-events-auto z-20 w-[clamp(15rem,22vw,26rem)]">
                   <div className="w-[clamp(3px,0.25vw,5px)] bg-[#ba1c3c] shrink-0"></div>
                   <p className="text-white text-[clamp(0.75rem,0.95vw,0.3rem)] font-paragraph leading-[1.7] text-left font-medium py-[0.5vw]">
                       Deltashoppe is a focused, no-fluff agency primed to transform your business operations by solving your most difficult problems with the latest technologies. If you want a team who is big on delivery, you have come to the right place.
                   </p>
               </div>

            </div>
          </div>

          {/* 🔲 UI ELEMENTS OVERLAY */}
          {/* 🔴 Added transform to perfectly slide it to the screen's right edge WITHOUT changing its width/size */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ transform: "translateX(calc(50vw - 50%))" }}
          >
              
              {/* RIGHT EDGE LINE */}
              <div className="absolute right-0 top-0 bottom-0 flex flex-col pointer-events-none z-20">
                  <div className="w-[1px] mt-22 h-[300px] bg-transparent to-[#eb0a1e]/60 mb-2"></div>
              </div>

              {/* 3️⃣ BOTTOM RIGHT MODULE (Extracted Component) */}
              <BottomRightCarousel slides={carouselSlides} onOpenModal={() => setIsModalOpen(true)} />
              
          </div>
        </PageContainer>
      </section>

      {/* 🟢 THE SERVICES MODAL COMPONENT */}
      <ServicesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        services={servicesList} 
      />
    </>
  );
};

export default HeroTemplate;