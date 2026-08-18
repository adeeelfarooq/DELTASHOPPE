import React, { useState, useEffect } from "react";
import { carouselSlides } from "../constants"; // 👈 Apne folder structure k hisaab se path adjust kar lijiye ga

// 🟢 SEPARATE CAROUSEL COMPONENT
const BottomRightCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = slides.length;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="absolute bottom-0 right-0 w-[24%] h-[32%] flex flex-col justify-end gap-3 pointer-events-none z-20 ">
      <div 
        className="absolute inset-0 backdrop-blur-md pointer-events-auto group cursor-pointer overflow-hidden"
        style={{ clipPath: "url(#br-card-clip)", WebkitClipPath: "url(#br-card-clip)" }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`relative w-full h-full shrink-0 overflow-hidden ${slide.type === 'ceo' ? 'bg-white/5' : ''}`}>
              
              {/* Conditional Rendering based on Slide Type */}
              {slide.type === "profile" ? (
                <>
                  <div className="absolute inset-0 w-full h-full bg-white/5 opacity-60 group-hover:scale-110 transition-transform duration-500">
                    <img src={slide.bgImage} alt="" className="object-contain w-full h-full" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1">
                    <span className="text-xl font-black text-[#ba1c3c] leading-none uppercase">{slide.title}</span>
                    <span className="text-[10px] font-bold text-white font-paragraph tracking-widest uppercase">{slide.subtitle}</span>
                  </div>
                  
                  <div 
                    className="absolute bottom-4 right-4 z-10 bg-[#ba1c3c] text-white text-[8px] px-3 py-2 rounded-full font-bold tracking-[0.1rem] transition-colors uppercase group/btn cursor-pointer" 
                    onClick={() => window.open(slide.btnLink, "_blank")}
                  >
                    <span className="flex items-center overflow-hidden leading-none h-[1em]">
                      {slide.btnText.split("").map((char, index) => (
                        <span key={index} className="relative inline-flex h-[1em] overflow-hidden">
                          <span className="inline-block transition-transform duration-300 ease-out will-change-transform group-hover/btn:-translate-y-[100%]" style={{ transitionDelay: `${index * 21}ms` }}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                          <span className="absolute left-0 top-full inline-block text-black transition-transform duration-300 ease-out will-change-transform group-hover/btn:-translate-y-[100%]" style={{ transitionDelay: `${index * 21}ms` }}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                        </span>
                      ))}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-1/2 -translate-y-[60%] left-4 z-10 flex items-center gap-3 w-[85%] md:w-[85%] max-w-[240px] group-hover:scale-110 origin-left transition-transform duration-500">
                    <img src={slide.ceoImage} alt="CEO" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shrink-0 border border-white/10" />
                    <p className="text-white/90 text-[9px] md:text-[10px] font-paragraph italic font-medium leading-snug border-l-2 border-[#ba1c3c] pl-2">
                      {slide.quote}
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1">
                    <span className="text-xl font-black text-[#ba1c3c] leading-none uppercase">{slide.title}</span>
                    <span className="text-[10px] font-bold text-white font-paragraph tracking-widest uppercase">{slide.subtitle}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows (Always on top) */}
      <div className="absolute top-1 right-4 flex gap-2 pointer-events-auto z-30">
        <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center text-xs hover:bg-[#ba1c3c] transition-all cursor-pointer">←</button>
        <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center text-xs hover:bg-[#ba1c3c] transition-all cursor-pointer">→</button>
      </div>
    </div>
  );
};

// 🟢 MAIN HERO COMPONENT
const HeroTemplate = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center p-4 lg:p-6">
      
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
      <div className="relative w-full h-full max-w-[1600px] mx-auto transform-gpu">
        
        {/* Main Background Panel with Clip-Path */}
        <div 
          className="absolute inset-0 w-full h-full bg-black/5 pointer-events-auto overflow-hidden shadow-2xl" 
          style={{ 
            clipPath: "url(#panel-clip)", 
            WebkitClipPath: "url(#panel-clip)", 
          }}
        >
          {/* 🟢 MAIN SCREEN CONTENT GOES HERE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             
             {/* Left Side: Absolute Floating Headings */}
             <div className="absolute left-[5%] lg:left-[8%] top-[45%] -translate-y-1/2 flex flex-col items-start gap-4 md:gap-0 pointer-events-auto z-20">
                 
                 {/* Block 1: No-Fluff (Chota Text) */}
                 <div className="" >
                     <div className="bg-[#ba1c3c] px-4 py-2 md:px-6 md:py-3">
                         <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-widest leading-none m-0">
                             No-Fluff
                         </h2>
                     </div>
                 </div>

                 {/* Block 2: Agency (Bara Text, slightly offset to right) */}
                 <div className="  ">
                     <div className="bg-[#ba1c3c] px-6 py-2 md:px-8 md:py-10">
                         <h1 className="text-white text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.8] tracking-tighter m-0">
                             Agency
                         </h1>
                     </div>
                 </div>

             </div>

             {/* Center Image - (Perfectly Centered, Absolutely Unaffected) */}
             <img 
                src="/images/D1.png" 
                alt="Big D" 
                className="w-auto h-[60vh] scale-60 max-w-[80%] object-contain relative z-10 pointer-events-auto" 
             />

             {/* Right Side: Absolute Paragraph */}
             <div className="absolute right-[5%] lg:right-[8%] top-[50%] -translate-y-1/2 flex items-stretch gap-4 pointer-events-auto z-20 max-w-[280px] md:max-w-[320px]">
             <div className="w-[3px] bg-[#ba1c3c] shrink-0"></div>
                 <p className="text-white text-sm md:text-xs font-paragraph leading-relaxed text-left font-medium py-1">
                     Deltashoppe is a focused, no-fluff agency primed to transform your business operations by solving your most difficult problems with the latest technologies. If you want a team who is big on delivery, you have come to the right place.
                 </p>
             </div>

          </div>
          {/* 🟢 END MAIN SCREEN CONTENT */}
        </div>

        {/* 🔲 UI ELEMENTS OVERLAY */}
        <div className="absolute inset-0 pointer-events-none">
            
            {/* RIGHT EDGE LINE */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col pointer-events-none z-20">
                <div className="w-[1px] mt-22 h-[300px] bg-transparent to-[#eb0a1e]/60 mb-2"></div>
            </div>

            {/* 1️⃣ LEFT EDGE MODULE (SOCIALS) */}
            <div className="absolute left-6 md:left-0 top-0 bottom-0 flex flex-col items-center justify-center pointer-events-none z-20">
                
                {/* Top Fade Line */}
                <div className="w-[1px]   flex-1 bg-transparent to-[#eb0a1e]/60 mb-2"></div>

                {/* THE SEAMLESS BACKGROUND WRAPPER */}
                <div className="relative flex flex-col gap-5 items-center w-12 py-5 bg-transparent rounded-full pointer-events-auto shadow-2xl">
                    
                    {/* Facebook Icon */}
                    <div className="group relative flex items-center justify-start w-8 h-8 cursor-pointer z-10">
                        <div className="absolute left-[-8px] top-[-8px] h-12 w-12 bg-transparent rounded-full transition-all duration-500 group-hover:w-[146px] -z-10 shadow-lg"></div>
                        <div className="absolute left-0 top-0 w-8 h-8 bg-[#ba1c3c] rounded-full flex items-center overflow-hidden shadow-md transition-all duration-500 group-hover:w-[130px] z-10">
                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold text-white tracking-widest uppercase ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">Facebook</span>
                        </div>
                    </div>

                    {/* Twitter (Old Bird) Icon */}
                    <div className="group relative flex items-center justify-start w-8 h-8 cursor-pointer z-10">
                        <div className="absolute left-[-8px] top-[-8px] h-12 w-12 bg-transparent rounded-full transition-all duration-500 group-hover:w-[146px] -z-10 shadow-lg"></div>
                        <div className="absolute left-0 top-0 w-8 h-8 bg-[#ba1c3c] rounded-full flex items-center overflow-hidden shadow-md transition-all duration-500 group-hover:w-[130px] z-10">
                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold text-white tracking-widest uppercase ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">Twitter</span>
                        </div>
                    </div>

                    {/* LinkedIn Icon */}
                    <div className="group relative flex items-center justify-start w-8 h-8 cursor-pointer z-10">
                        <div className="absolute left-[-8px] top-[-8px] h-12 w-12 bg-transparent rounded-full transition-all duration-500 group-hover:w-[146px] -z-10 shadow-lg"></div>
                        <div className="absolute left-0 top-0 w-8 h-8 bg-[#ba1c3c] rounded-full flex items-center overflow-hidden shadow-md transition-all duration-500 group-hover:w-[130px] z-10">
                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                                  <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold text-white tracking-widest uppercase ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">LinkedIn</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* 2️⃣ TOP RIGHT MODULE */}
            <div className="absolute top-0 right-0 w-[24%] h-[18%] flex flex-col items-end gap-3 pointer-events-none z-20">
                <div className="flex  pointer-events-auto ">
                   <button className="h-12 px-6 rounded-full bg-transparent backdrop-blur-md text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
                        <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
                        <span className="relative z-10">HOME</span>
                    </button>

                    <button className="h-12 px-6 rounded-full bg-transparent backdrop-blur-md text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
                        <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
                        <span className="relative z-10">TL;DR</span>
                    </button>
                
                     <button className="h-12 px-6 rounded-full bg-transparent backdrop-blur-md text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
                        <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
                        <span className="relative z-10">TEAM</span>
                    </button>

                    <button className="h-12 px-6 rounded-full bg-transparent backdrop-blur-md text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
                        <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
                        <span className="relative z-10">CONTACT</span>
                    </button>
                </div>
                <button className="group w-full h-12 rounded-full bg-[#ba1c3c] text-white font-black text-xs tracking-[0.2em] transition-all cursor-pointer pointer-events-auto flex items-center justify-center">
                    <span className="flex items-center overflow-hidden leading-none">
                        {"LETS GO".split("").map((char, index) => (
                        <span key={index} className="relative inline-flex h-[1em] overflow-hidden">
                            <span className="inline-block transition-transform duration-300 ease-out will-change-transform group-hover:-translate-y-[100%]" style={{ transitionDelay: `${index * 21}ms` }}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                            <span className="absolute left-0 top-full inline-block text-black transition-transform duration-300 ease-out will-change-transform group-hover:-translate-y-[100%]" style={{ transitionDelay: `${index * 21}ms` }}>
                            {char === " " ? "\u00A0" : char}
                            </span>
                        </span>
                        ))}
                    </span>
                </button>
            </div>

            {/* 3️⃣ BOTTOM RIGHT MODULE (Component Extracted) */}
            <BottomRightCarousel slides={carouselSlides} />
            
        </div>
      </div>
    </section>
  );
};

export default HeroTemplate;