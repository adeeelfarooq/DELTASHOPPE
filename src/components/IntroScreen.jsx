import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const IntroScreen = () => {
  const introRef = useRef(null);
  const introLogoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { force3D: true } });

    // 🔴 INTRO RED SCREEN + LOGO ANIMATION
    tl.set(introRef.current, { yPercent: 0 })
      .fromTo(
        introLogoRef.current,
        { opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        { 
          opacity: 1, 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
          duration: 2, 
          ease: "power3.out" 
        }
      )
      .to({}, { duration: 1 })
      .to(introRef.current, { 
        yPercent: -100, 
        duration: 1.4, 
        ease: "power4.inOut" 
      });

  });

  return (
    <div 
      ref={introRef} 
      className="fixed inset-0 z-[100] bg-[#0e0d0d] flex items-center justify-center transform-gpu"
    >
      <img 
        ref={introLogoRef} 
        src="/images/logo-light-1.svg" 
        alt="Logo" 
        className="w-40 scale-400" 
      />
    </div>
  );
};

export default IntroScreen;