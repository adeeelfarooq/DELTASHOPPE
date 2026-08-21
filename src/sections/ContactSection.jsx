import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const contentRef = useRef(null); // 🟢 Naya ref form aur contact info ko ek sath animate karne k liye

    useGSAP(() => {
        
        // 🟢 Jaisy hi component load ho, in sab ko foran hide kar do taake glitch na aye.
        gsap.set(line1Ref.current, { xPercent: -100, opacity: 0 });
        gsap.set(line2Ref.current, { xPercent: -100, opacity: 0 });
        
        // 🟢 Neechay wale pooray section ko initial position (neechay) set kar diya
        gsap.set(contentRef.current, { y: 150, opacity: 0 });


        // 🟢 HEADING ANIMATION (Aapki exact scrub wali animation - Unchanged)
        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%", 
                end: "top 1%",   
                scrub: 1,         
            }
        });

        titleTl.to(line1Ref.current, { opacity: 1, xPercent: 0, force3D: true, ease: "power2.out" })
               .to(line2Ref.current, { opacity: 1, xPercent: 0, force3D: true, ease: "power2.out" }, "<0.1");

        // 🟢 NEW CONTENT ANIMATION (Form, Button, Info ek sath scrub ho k neechay se upar ayenge)
        gsap.to(contentRef.current, {
            y: 0,
            opacity: 1,
            force3D: true,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 55%", // Jab heading aana shuru ho, tab ye bhi start ho jaye
                end: "top 5%",    // Scrub k sath neechy se upar aye
                scrub: 1, 
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative z-30 w-full min-h-dvh bg-[#000] flex flex-col lg:flex-row overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.9)] border-t border-white/10">
            
            {/* LEFT SIDE: FORM & CONTACT INFO */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 lg:py-10 z-10">
                
                {/* Premium Heading */}
                <div className="mb-10">
                    <div className="overflow-hidden self-start origin-left mb-1">
                        <h2 ref={line1Ref} className="text-[#ba1c3c] font-sans font-bold text-4xl md:text-6xl uppercase tracking-widest leading-none transform-gpu will-change-transform">
                            Let's Build
                        </h2>
                    </div>
                    <div className="overflow-hidden self-start origin-left">
                        <h2 ref={line2Ref} className="text-white font-sans font-bold text-4xl md:text-6xl uppercase tracking-widest leading-none transform-gpu will-change-transform">
                            The Future.
                        </h2>
                    </div>
                </div>

                {/* 🟢 Is div me contentRef lagaya hai taake Form aur Contact Info ek sath animate hon */}
                <div ref={contentRef} className="w-full flex flex-col transform-gpu will-change-transform">
                    
                    {/* Minimalist Form */}
                    <form className="flex flex-col gap-8 mb-12 w-full max-w-xl">
                        
                        {/* Name & Email in one row on Desktop */}
                        <div className="flex flex-col md:flex-row gap-8 w-full">
                            <div className="relative group w-full">
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white font-paragraph focus:outline-none focus:border-[#ba1c3c] transition-colors placeholder:text-gray-500"
                                    required
                                />
                            </div>
                            
                            <div className="relative group w-full">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white font-paragraph focus:outline-none focus:border-[#ba1c3c] transition-colors placeholder:text-gray-500"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <textarea 
                                placeholder="Tell us about your project..." 
                                rows="3"
                                className="w-full bg-transparent border-b border-white/20 pb-3 text-white font-paragraph focus:outline-none focus:border-[#ba1c3c] transition-colors placeholder:text-gray-500 resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-2 pointer-events-auto overflow-hidden w-fit rounded-full">
                            <div>
                                <button type="submit" className="group px-8 h-12 rounded-full bg-[#ba1c3c] text-white font-black text-xs tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center border-none outline-none">
                                    <span className="flex items-center overflow-hidden leading-none">
                                    {"SEND MESSAGE".split("").map((char, index) => (
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
                    </form>

                    {/* Premium Minimal Contact Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 w-full max-w-xl">
                        <div>
                            <h4 className="text-[#ba1c3c] text-xs font-black tracking-widest uppercase mb-2">Email Us</h4>
                            <a href="mailto:info@deltashoppe.com" className="text-white font-paragraph transition-colors">
                                info@deltashoppe.com
                            </a>
                        </div>
                        <div>
                            <h4 className="text-[#ba1c3c] text-xs font-black tracking-widest uppercase mb-2">Call Us</h4>
                            <a href="tel:+92512724176" className="text-white font-paragraph transition-colors">
                                +92-51-2724176
                            </a>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="text-[#ba1c3c] text-xs font-black tracking-widest uppercase mb-2">Visit Us</h4>
                            <p className="text-white font-paragraph leading-relaxed">
                                Basement, STS Mall Plaza, Civic Center,<br/>Phase 4 Bahria Town, Rawalpindi, Pakistan
                            </p>
                        </div>
                    </div>
                
                </div>
            </div>

            {/* RIGHT SIDE: DARK MODE GOOGLE MAP */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
                {/* Overlay gradient to blend map edges with black background */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none z-10 hidden lg:block"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none z-10 lg:hidden"></div>
                
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.493922615568!2d73.11181295!3d33.53154825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedbd13bba46d%3A0x64be6058e5d61483!2sCivic%20Center%20Bahria%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714470212345!5m2!1sen!2s" 
                    className="absolute top-[-120px] left-0 w-full h-[calc(100%+120px)] border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[85%] grayscale-[20%]" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Deltashoppe Location"
                ></iframe>
            </div>
            
        </section>
    )
}

export default ContactSection;