import React, { useRef } from "react";
import PageContainer from "../components/PageContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { principles } from "../constants"; 

gsap.registerPlugin(ScrollTrigger);

const WhyUsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // 🟢 1. HEADING ANIMATION (Unchanged)
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%", 
        end: "top 1%",   
        scrub: 1,         
      }
    });

    titleTl.fromTo(headingRef.current, 
      { opacity: 0, xPercent: -100 }, 
      { opacity: 1, xPercent: 0, force3D: true, ease: "power2.out" }
    );

    // 🟢 2. PARAGRAPH ANIMATION (Rotation Khatam, Sirf Neechy se Upar)
    gsap.fromTo(paraRef.current,
      { y: 100, opacity: 0 }, // Rotation hata di gayi hai
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 35%", 
          end: "bottom bottom", 
          scrub: true, 
        }
      }
    );

    // 🟢 3. BUTTON ANIMATION (Nayi Unique 3D Swing-Up & Scale Animation)
    gsap.fromTo(btnRef.current, 
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.6, 
        rotationX: -90, // 3D me peechay ki taraf gira hua
        transformOrigin: "bottom center", // Base se ghoome ga
        transformPerspective: 1000 
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0, // Seedha ho kar samne aayega
        duration: 1.5,
        ease: "back.out(1.5)", // Halka sa jhatka (bounce) de kar set hoga
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%", 
          end: "bottom 80%", 
          scrub: 1, // Smooth scrub
        }
      }
    );

    // 🟢 4. CARDS (3 D's) ANIMATION (Ziada scroll duration de kar SLOW kiya gaya hai)
    gsap.set(cardsRef.current, { 
      x: 100, 
      opacity: 0, 
      rotationY: 30, 
      transformPerspective: 1200 
    });

    gsap.to(cardsRef.current, {
      x: 0,
      opacity: 1,
      rotationY: 0,
      duration: 2, // Duration thori barha di
      stagger: 0.2, // Ek doosre ke darmiyan gap barha diya
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%", // Animation thora baad me shuru hogi
        end: "bottom 40%", // 👈 FIX: Ye end point lamba kar diya hai, jis se animation Bohat SLOW aur smooth ho jayegi
        scrub: 1.5, // 👈 FIX: Halka sa delay dega jisse lag khatam hoga
      }
    });

    // 🟢 5. PINNING (Unchanged)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false, 
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative z-0 w-full min-h-dvh bg-black py-24 lg:py-32 flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.9)]">
      <PageContainer>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-8 z-10">
            
            <div className="overflow-hidden self-start origin-left">
              <div ref={headingRef} className="bg-[#ba1c3c] px-6 py-3 transform-gpu will-change-transform">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest leading-none m-0">
                  Why Us
                </h2>
              </div>
            </div>

            <div className="overflow-hidden origin-left py-2">
              <p ref={paraRef} className="text-white text-sm md:text-base font-paragraph leading-relaxed max-w-md transform-gpu will-change-transform">
                DeltaShoppe believes in creating, innovating, and bringing forward quality solutions that meets your needs. Taking your business seriously, our agency holds true to it’s principles which are the 3 D’s of DeltaShoppe.
              </p>
            </div>

            <div className="mt-4 flex flex-col items-start gap-3 origin-left overflow-visible">
              {/* 🟢 BUTTON CONTAINER (Jisme animation reference lga hai) */}
              <div ref={btnRef} className="transform-gpu will-change-transform">
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