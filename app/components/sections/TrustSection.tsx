"use client";

import Image from "next/image";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Icon from "@/app/components/ui/Icons";
import { trustItems } from "@/app/data/trust";

export default function TrustSection() {
  return (
    <section 
      id="trust" 
      className="relative p-4 md:p-6 lg:p-8"
      style={{ background: "var(--background)" }}
    >
      <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden w-full mx-auto shadow-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/trust-bg.jpg"
            alt="Trust Section Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20">
          
          {/* Header section before the grid */}
          <RevealOnScroll slideUp className="relative mb-16 md:mb-20 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase shrink-0 text-white/90">
                Trust & Safety
              </span>
              <div className="h-px w-24 bg-white/40" />
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white"
              style={{ fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Your Care, <br className="hidden md:block" />
              <span className="text-white/80">Our Commitment.</span>
            </h2>
          </RevealOnScroll>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustItems.map((item, index) => (
              <RevealOnScroll key={index} slideUp delay={index * 150} duration={800}>
                <div 
                  className="group h-full relative p-8 flex flex-col transition-all duration-500 bg-white/5 border border-white/20 rounded-[1.5rem] overflow-hidden hover:bg-white/10 hover:border-white/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2"
                >
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <h4 
                      className="text-xl md:text-2xl font-semibold text-white pr-4 leading-tight transition-colors"
                      style={{ fontFamily: "var(--font-cormorant-garamond)" }}
                    >
                      {item.title}
                    </h4>
                    <div className="text-[#D3C4B7] shrink-0 bg-white/10 p-2 rounded-full transition-colors group-hover:bg-[#D3C4B7] group-hover:text-[#3A4B35]">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Icon name={item.iconName} className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow relative z-10">
                    <p className="text-white/80 text-[15px] leading-relaxed font-medium transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Elegant decorative glow on hover */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"></div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
