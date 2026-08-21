import React, { useRef } from "react";
import PageContainer from "../components/PageContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { principles } from "../constants"; 

gsap.registerPlugin(ScrollTrigger);

const WhyUsSection = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.set(leftContentRef.current.children, { 
      y: 100, 
      opacity: 0, 
      rotationX: -40, 
      transformPerspective: 1000 
    });

    gsap.set(cardsRef.current, { 
      x: 100, 
      opacity: 0, 
      rotationY: 30, 
      transformPerspective: 1200 
    });

    gsap.to(leftContentRef.current.children, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 35%", 
        end: "bottom bottom", 
        scrub: true, 
      }
    });

    gsap.to(cardsRef.current, {
      x: 0,
      opacity: 1,
      rotationY: 0,
      duration: 1.2,
      stagger: 0.2, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
        end: "center center", 
        scrub: true, 
      }
    });

    // 🟢 NAYA LOGIC: Ye section ko top pe rok (pin) dega, aur agla section iske UPAR se aayega
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false, // 👈 Yahi magic trick hai jo overlapping effect banati hai
    });

  }, { scope: sectionRef });

  return (
    // 🔴 z-index ko z-0 kar diya hai taake agla section iske UPAR aa saky
    <section ref={sectionRef} className="relative z-0 w-full min-h-dvh bg-black py-24 lg:py-32 flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.9)]">
      <PageContainer>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          <div 
            ref={leftContentRef} 
            className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-8 z-10"
          >
            <div className="self-start origin-left">
              <div className="bg-[#ba1c3c] px-6 py-3">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest leading-none m-0">
                  Why Us
                </h2>
              </div>
            </div>

            <p className="text-white text-sm md:text-base font-paragraph leading-relaxed max-w-md origin-left">
              DeltaShoppe believes in creating, innovating, and bringing forward quality solutions that meets your needs. Taking your business seriously, our agency holds true to it’s principles which are the 3 D’s of DeltaShoppe.
            </p>

            <div className="mt-4 flex flex-col items-start gap-3 origin-left">
              <button className="group px-8 w-50 h-12 rounded-full bg-[#ba1c3c] text-white font-black text-xs tracking-[0.2em] transition-all cursor-pointer pointer-events-auto flex items-center justify-center border-none outline-none">
                <span className="flex items-center overflow-hidden leading-none">
                  {"GET IN TOUCH".split("").map((char, index) => (
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
          </div>

          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            {principles.map((item, index) => (
              <div 
                key={index} 
                ref={el => cardsRef.current[index] = el} 
                className="relative bg-[#0a0a0a] border border-white/5 p-8 md:p-12 overflow-hidden shadow-2xl origin-right"
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[#ba1c3c] font-black text-xl md:text-2xl">
                      0{index + 1}.
                    </span>
                    <h3 className="flex items-center text-white text-2xl md:text-3xl font-black uppercase tracking-wide">
                      <img src="/images/D1.png" alt="D" className="h-[1.2em] w-auto object-contain mr-1" />
                      {item.title.substring(1)}
                    </h3>
                  </div>
                  <p className="text-white text-sm md:text-sm font-paragraph leading-relaxed max-w-[90%] md:max-w-[85%]">
                    {item.text}
                  </p>
                </div>
                
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ba1c3c]"></div>
              </div>
            ))}
          </div>

        </div>
      </PageContainer>
    </section>
  );
};

export default WhyUsSection;