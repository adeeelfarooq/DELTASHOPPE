import React from 'react';
import gsap from 'gsap'; // 🟢 gsao ko import kiya
import { ScrollSmoother, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useGSAP } from "@gsap/react"; // 🟢 useGSAP import kiya

import IntroScreen from './components/IntroScreen';
import HeroTemplate from './sections/Hero';
import Navbar from './sections/Navbar';
import WhyUsSection from './sections/WhyUsSection';

// Plugin register hamesha bahar hota hai
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

const App = () => {

  // 🟢 GSAP animations / ScrollSmoother ko useGSAP k andar run karna lazmi hai
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      
      // Desktop par normalized scrolling, mobile par native scrolling
      normalizeScroll: ScrollTrigger.isTouch ? false : true,
    });
  });

  return (
    <div className="relative">
      
      {/* 🟢 IntroScreen aur Navbar FIXED components hain, 
          isliye inhe wrapper k BAAHAR rakha hai */}
      <IntroScreen />
      <Navbar />

      {/* 🟢 Sirf scrolling wali cheezein wrapper k andar aayengi */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroTemplate />
          <WhyUsSection />
        </div>
      </div>

    </div>
  );
}

export default App;