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
