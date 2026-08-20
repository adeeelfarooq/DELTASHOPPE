import React, { useRef, useEffect } from "react";
import Logo from "../components/Logo";
import gsap from "gsap";

const Navbar = () => {
  const leftNavRef = useRef(null);
  const topNavRef = useRef(null);

  useEffect(() => {
    // 🔴 Intro screen ke 4.5s khatam hone ke baad Navbar ke elements fade-in honge
    gsap.fromTo(
      [leftNavRef.current, topNavRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 4.5, ease: "power2.inOut" }
    );
  }, []);

  return (
    // z-[100] aur pointer-events-none ensures k ye baqi layout ko block na kare
    <nav className="fixed inset-0 pointer-events-none z-[100]">
      
      {/* 1️⃣ LEFT EDGE MODULE (SOCIALS) - Exactly as your original code */}
      <div ref={leftNavRef} className="absolute left-5 top-0 bottom-0 flex flex-col items-center justify-center pointer-events-none opacity-0">
        <div className="w-[1px] flex-1 bg-transparent to-[#eb0a1e]/60 mb-2"></div>
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

          {/* Twitter Icon */}
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

      {/* 2️⃣ TOP PILL NAVBAR - Positioned like the image, content exact original */}
      <div 
        ref={topNavRef} 
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/5 flex items-center justify-between px-6 pointer-events-none opacity-0 shadow-2xl"
      >
        
        {/* LEFT: LOGO */}
        <div className="pointer-events-auto flex items-center ">
          <Logo />
        </div>

        {/* CENTER: NAV LINKS (Aapke original buttons with red animations) */}
        <div className="hidden lg:flex items-center pointer-events-auto">
          <button className="h-12 px-6 rounded-full text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
            <span className="relative z-10">HOME</span>
          </button>
          <button className="h-12 px-6 rounded-full text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
            <span className="relative z-10">WHY US</span>
          </button>
          <button className="h-12 px-6 rounded-full text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
            <span className="relative z-10">TEAM</span>
          </button>
          <button className="h-12 px-6 rounded-full text-white font-black text-xs tracking-widest hover:text-white transition-all cursor-pointer group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#ba1c3c] transform origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 -z-10"></span>
            <span className="relative z-10">CONTACT</span>
          </button>
        </div>

        {/* RIGHT: LETS GO BUTTON (Aapka original red button with rolling text) */}
        <div className="pointer-events-auto">
          <button className="group px-8 h-12 rounded-full bg-[#ba1c3c] text-white font-black text-xs tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center">
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

      </div>

    </nav>
  );
};

export default Navbar;