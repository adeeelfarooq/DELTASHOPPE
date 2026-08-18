import React from "react";

const ServicesModal = ({ isOpen, onClose, services }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 lg:p-10 pointer-events-auto">
      {/* Dark Blur Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer" 
        onClick={onClose}
      ></div>

      {/* Sleek Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transform-gpu">
        
        {/* Header */}
        <div className="flex justify-between items-start p-6 md:p-8 border-b border-white/5">
          <div>
            <h2 className="text-[#ba1c3c] text-3xl md:text-4xl font-black uppercase  leading-none mb-2">
              Our Services
            </h2>
            <p className="text-white text-sm md:text-base uppercase font-bold font-paragraph tracking-wide">
              What we provide
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ba1c3c] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Services Grid (Scrollbar hidden perfectly, slightly compact to fit screen) */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-3 md:p-4 rounded-2xl bg-[#ba1c3c]  border border-transparent hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 shrink-0 bg-black/50 border border-white/10 rounded-full flex items-center justify-center p-2.5 group-hover:border-[#ba1c3c]/50 transition-colors">
                <img 
                  src={service.icon} 
                  alt={service.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <span className="text-white font-paragraph uppercase font-bold text-sm md:text-base tracking-wide">
                {service.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesModal;