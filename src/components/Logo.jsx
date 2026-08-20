import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Delay 4.5 seconds rakha hai taake red screen hatne k baad logo show ho (Hero sync)
    gsap.to(logoRef.current, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.2,
      ease: "power2.inOut",
      delay: 4.5, 
    });
  }, []);

  return (
    <img
      ref={logoRef}
      src="/images/logo-light-1.svg"
      alt="Toyota"
      // 👇 Yahan se maine fixed aur top-6 left-6 hata diya hai taa ke ye Navbar me align ho jaye
      className="z-[999] w-32 pointer-events-none transform-gpu"
      style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
    />
  );
};

export default Logo;