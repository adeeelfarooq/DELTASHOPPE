import React, { useState, useEffect } from "react";

// 🟢 Custom Animated Counter Component
const AnimatedCounter = ({ valueText, isVisible }) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const match = valueText.match(/[\d.,]+/);
    const suffix = match ? valueText.replace(match[0], "") : "";

    if (!isVisible) {
      setDisplay("0" + suffix); // Reset to 0 when hidden
      return;
    }

    if (!match) {
      setDisplay(valueText);
      return;
    }

    const numStr = match[0].replace(/,/g, "");
    const target = parseFloat(numStr);
    const isFloat = numStr.includes(".");

    let startTimestamp = null;
    const duration = 1000; // 1 second animation

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * target;

      let formatted;
      if (isFloat) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.floor(current).toLocaleString("en-US");
      }

      setDisplay(formatted + suffix);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [valueText, isVisible]);

  return <>{display}</>;
};

const BottomRightCarousel = ({ slides, onOpenModal }) => {
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
      
      {/* Cutout Card Container - Cursor pointer added here */}
      <div 
        className="absolute inset-0 backdrop-blur-md pointer-events-auto group/card overflow-hidden cursor-pointer"
        style={{ clipPath: "url(#br-card-clip)", WebkitClipPath: "url(#br-card-clip)" }}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative w-full h-full shrink-0 overflow-hidden cursor-pointer">
              
              {/* 🟦 SLIDE 1 (Profile) & SLIDE 3 (Services) */}
              {(slide.type === "profile" || slide.type === "services") && (
                <>
                  <div className="absolute inset-0 w-full h-full bg-white/5 opacity-60 group-hover/card:scale-110 transition-transform duration-500">
                    <img src={slide.bgImage} alt="" className="object-scale-down w-full h-full" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-1">
                    <span className="text-xl font-black text-[#ba1c3c] leading-none uppercase">{slide.title}</span>
                    <span className="text-[10px] font-bold text-white font-paragraph tracking-widest uppercase">{slide.subtitle}</span>
                  </div>
                  
                  <div 
                    className="absolute bottom-4 right-4 z-10 bg-[#ba1c3c] text-white text-[8px] px-3 py-2 rounded-full font-bold tracking-[0.1rem] transition-colors uppercase group/btn cursor-pointer" 
                    onClick={() => slide.type === "profile" ? window.open(slide.btnLink, "_blank") : onOpenModal()}
                  >
                    <span className="flex items-center overflow-hidden leading-none h-[1em]" >
                      {slide.btnText.split("").map((char, charIdx) => (
                        <span key={charIdx} className="relative inline-flex h-[1em] overflow-hidden">
                          <span className="inline-block transition-transform duration-300 ease-out will-change-transform group-hover/btn:-translate-y-[100%]" style={{ transitionDelay: `${charIdx * 21}ms` }}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                          <span className="absolute left-0 top-full inline-block text-black transition-transform duration-300 ease-out will-change-transform group-hover/btn:-translate-y-[100%]" style={{ transitionDelay: `${charIdx * 21}ms` }}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                        </span>
                      ))}
                    </span>
                  </div>
                </>
              )}

              {/* 🟦 SLIDE 2: CEO (Background image REMOVED) */}
              {slide.type === "ceo" && (
                <>
                  {/* 🟢 Dark solid background insted of image */}
                  <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] group-hover/card:scale-110 transition-transform duration-500"></div>
                  
                  <div className="absolute top-1/2 -translate-y-[60%] left-4 z-10 flex items-center gap-3 w-[85%] md:w-[85%] max-w-[240px] group-hover/card:scale-110 origin-left transition-transform duration-500">
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

              {/* 🟦 SLIDE 4: Achievements */}
              {slide.type === "achievements" && (
                <>
                  <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] group-hover/card:scale-110 transition-transform duration-500"></div>
                  
                  {/* Adjusted placement to perfectly match CEO slide's safe area to avoid SVG cutouts */}
                  <div className="absolute top-1/2 -translate-y-[60%] left-5 z-10 grid grid-cols-2 gap-y-3 gap-x-2 w-[85%] max-w-[240px] group-hover/card:scale-105 origin-left transition-transform duration-500">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-white text-[13px] md:text-sm font-black leading-none">
                          <AnimatedCounter valueText={stat.value} isVisible={currentSlide === index} />
                        </span>
                        <span className="text-white text-[6px] md:text-[7px] font-bold tracking-widest uppercase mt-1">{stat.label}</span>
                      </div>
                    ))}
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

      {/* Manual Arrows */}
      <div className="absolute top-1 right-4 flex gap-2 pointer-events-auto z-30">
        <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center text-xs hover:bg-[#ba1c3c] transition-all cursor-pointer">←</button>
        <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center text-xs hover:bg-[#ba1c3c] transition-all cursor-pointer">→</button>
      </div>
    </div>
  );
};

export default BottomRightCarousel;