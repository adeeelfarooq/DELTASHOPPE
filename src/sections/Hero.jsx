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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);

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
  });

  return (
    <>
      <section ref={heroRef} className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center py-4 lg:py-6">
        
        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}

        {/* 🟢 SVG DEFS - Clip Paths & Masks Template */}
        <svg className="absolute w-0 h-0 pointer-events-none" style={{ transform: "translateZ(0)" }}>
          <defs>
            <clipPath id="panel-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.04, 0 L 0.72, 0 C 0.74, 0 0.75, 0.02 0.75, 0.05 L 0.75, 0.15 C 0.75, 0.18 0.76, 0.20 0.79, 0.20 L 0.98, 0.20 C 0.99, 0.20 1.0, 0.22 1.0, 0.25 L 1.0, 0.60 C 1.0, 0.63 0.99, 0.65 0.96, 0.65 L 0.79, 0.65 C 0.76, 0.65 0.75, 0.67 0.75, 0.70 L 0.75, 0.95 C 0.75, 0.98 0.74, 1.0 0.72, 1.0 L 0.04, 1.0 C 0.02, 1.0 0, 0.98 0, 0.95 L 0, 0.05 C 0, 0.02 0.02, 0 0.04, 0 Z" />
            </clipPath>

            <clipPath id="br-card-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.06, 0 L 0.60, 0 C 0.63, 0 0.65, 0.03 0.65, 0.08 L 0.65, 0.20 C 0.65, 0.25 0.68, 0.28 0.73, 0.28 L 0.94, 0.28 C 0.97, 0.28 1.0, 0.31 1.0, 0.36 L 1.0, 0.94 C 1.0, 0.97 0.97, 1.0 0.94, 1.0 L 0.06, 1.0 C 0.03, 1.0 0, 0.97 0, 0.94 L 0, 0.06 C 0, 0.03 0.03, 0 0.06, 0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* 🔲 THE MAIN UI WRAPPER */}
        <PageContainer className="h-full transform-gpu">
          
          {/* Main Background Panel with Clip-Path */}
          <div 
            className="absolute inset-0 w-full h-full bg-black/5 pointer-events-auto overflow-hidden shadow-2xl" 
            style={{ 
              clipPath: "url(#panel-clip)", 
              WebkitClipPath: "url(#panel-clip)", 
            }}
          >
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
                   <p className="text-white text-[clamp(0.75rem,0.95vw,1.1rem)] font-paragraph leading-[1.7] text-left font-medium py-[0.5vw]">
                       Deltashoppe is a focused, no-fluff agency primed to transform your business operations by solving your most difficult problems with the latest technologies. If you want a team who is big on delivery, you have come to the right place.
                   </p>
               </div>

            </div>
          </div>

          {/* 🔲 UI ELEMENTS OVERLAY */}
          <div className="absolute inset-0 pointer-events-none">
              
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