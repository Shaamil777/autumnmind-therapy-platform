"use client";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen py-20 md:py-28 overflow-hidden relative flex items-center justify-center bg-background">
      {/* Impressive Mesh Gradient Background (Static) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="hero-mesh-1 absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[120px]" />
        <div className="hero-mesh-2 absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[100px]" />
        <div className="hero-mesh-3 absolute top-[20%] left-[20%] w-[50%] h-[50%] rounded-full blur-[140px]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center mt-[-55vh] max-w-5xl mx-auto px-4">
        {/* Top Tagline with Icon */}
        <div className="flex items-center justify-center gap-3 text-[#6A7C64] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M12 21C12 21 11.5 16 16 11.5C20.5 7 22.5 5 22.5 5C22.5 5 19.5 6.5 15 11C10.5 15.5 12 21 12 21Z" fill="#6A7C64"/>
            <path d="M12 21C12 21 11.5 17 8.5 14C5.5 11 4 9 4 9C4 9 6.5 10.5 9.5 13.5C12.5 16.5 12 21 12 21Z" fill="#6A7C64"/>
            <path d="M12 21C12 21 12.5 15 9 10.5C5.5 6 4.5 3 4.5 3C4.5 3 7.5 5.5 11 10C14.5 14.5 12 21 12 21Z" fill="#6A7C64"/>
          </svg>
          <span>WELCOME TO RIDA BY RAHMA</span>
        </div>

        {/* Primary Title */}
        <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-cormorant font-semibold text-[#3A4B35] leading-[1.1] tracking-tight -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4">
          Breathe.
        </h1>
      </div>

      {/* Bottom Hero Details */}
      <div className="absolute bottom-[2vh] sm:bottom-[5vh] lg:bottom-[8vh] left-0 right-0 z-20 flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Three phrases */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[#8C5A3E] text-lg sm:text-xl md:text-2xl font-cormorant font-semibold mb-4">
          <span>Unwind your worries</span>
          <span className="text-[#D3C4B7] text-xl">•</span>
          <span>Soak in peace</span>
          <span className="text-[#D3C4B7] text-xl">•</span>
          <span>Restore your wellbeing</span>
        </div>

        {/* Separator with leaf */}
        <div className="flex items-center justify-center gap-4 w-full max-w-md mb-4">
          <div className="h-[1px] bg-[#D3C4B7] flex-1 opacity-60"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6A7C64]">
            <path d="M12 21C12 21 11.5 16 16 11.5C20.5 7 22.5 5 22.5 5C22.5 5 19.5 6.5 15 11C10.5 15.5 12 21 12 21Z" fill="currentColor"/>
            <path d="M12 21C12 21 11.5 17 8.5 14C5.5 11 4 9 4 9C4 9 6.5 10.5 9.5 13.5C12.5 16.5 12 21 12 21Z" fill="currentColor"/>
            <path d="M12 21C12 21 12.5 15 9 10.5C5.5 6 4.5 3 4.5 3C4.5 3 7.5 5.5 11 10C14.5 14.5 12 21 12 21Z" fill="currentColor"/>
          </svg>
          <div className="h-[1px] bg-[#D3C4B7] flex-1 opacity-60"></div>
        </div>

        {/* Subtitle */}
        <p className="text-[#4A5D4E] text-base sm:text-lg mb-6 max-w-xl">
          Your path to better wellbeing, where calm meets care.
        </p>

        {/* Button */}
        <button className="bg-[#5A6B56] text-white px-6 py-3 rounded-md uppercase tracking-[0.1em] text-xs sm:text-sm font-medium hover:bg-[#4A5947] transition-all flex items-center gap-2">
          BOOK APPOINTMENT
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Bottom Arc structure */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] md:h-[130px] lg:h-[160px] translate-y-px"
        >
          <path
            d="M 0,150 Q 720,10 1440,150 Z"
            fill="var(--accent-light-color)"
            opacity="0.95"
          />
        </svg>
      </div>
    </section>
  );
}
