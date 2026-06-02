"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─── Fade-in block ─── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    title: "INDIVIDUAL THERAPY",
    description:
      "One-on-one sessions tailored to your specific needs, focusing on personal growth, anxiety, depression, and trauma recovery.",
    image: "/services/individual-therapy.png",
  },
  {
    title: "COUPLES COUNSELING",
    description:
      "Work through relationship challenges, improve communication, and strengthen your bond in a supportive, neutral environment.",
    image: "/services/couples-counseling.png",
  },
  {
    title: "GROUP THERAPY",
    description:
      "Connect with others facing similar struggles in a safe, guided setting. Share experiences and learn from collective wisdom.",
    image: "/services/group-therapy.png",
  },
  {
    title: "ONLINE CONSULTATIONS",
    description:
      "Access professional support from the comfort of your home with our secure and confidential teletherapy platform.",
    image: "/services/online-consultation.png",
  },
  {
    title: "CHILD & TEEN THERAPY",
    description:
      "Specialized approaches to help adolescents navigate anxiety, bullying, academic pressure, and developmental transitions.",
    image: "/services/child-therapy.png",
  },
  {
    title: "STRESS MANAGEMENT",
    description:
      "Learn evidence-based techniques to cope with workplace stress, prevent burnout, and balance your daily responsibilities.",
    image: "/services/stress-management.png",
  },
];

export default function ServiceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="service"
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >
      {/* Subtle radial gradient background accents */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, var(--calm-accent) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      {/* ── Section Header ── */}
      <div className="section-container relative z-10 mb-16 md:mb-20">
        <FadeIn className="text-center">
          {/* Label with extending line */}
          <div className="flex items-center justify-center gap-5 mb-6">
            <div
              className="w-12 h-px"
              style={{ background: "var(--border-subtle)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              What We Offer
            </span>
            <div
              className="w-12 h-px"
              style={{ background: "var(--border-subtle)" }}
            />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-cormorant-garamond)",
              color: "var(--primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Our Services
          </h2>
        </FadeIn>
      </div>

      {/* ── Vertical Hover Accordion List ── */}
      <div className="section-container relative z-10">
        <div className="flex flex-col border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="group relative border-b py-6 md:py-8 transition-colors duration-500 cursor-pointer"
                style={{ borderColor: 'var(--border-subtle)' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "rgba(122, 158, 159, 0.03)" }}
                />

                <div className="relative z-10 flex flex-col items-start lg:pr-[360px] pl-4 md:pl-6">
                  {/* Number */}
                  <span
                    className="text-sm font-semibold tracking-widest block mb-2 transition-colors duration-500"
                    style={{
                      color: isHovered ? "var(--accent)" : "rgba(31,31,31,0.2)",
                    }}
                  >
                    {number}
                  </span>
                  
                  {/* Title */}
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide transition-all duration-500"
                    style={{
                      fontFamily: "var(--font-cormorant-garamond)",
                      color: isHovered ? "var(--accent)" : "var(--primary)",
                      transform: isHovered ? "translateX(8px)" : "translateX(0)",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Vertical Accordion Description */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden max-w-lg"
                        style={{
                          transform: isHovered ? "translateX(8px)" : "translateX(0)",
                        }}
                      >
                        <p
                          className="text-[15px] leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Floating Image Reveal (Desktop Only) */}
                <div
                  className="hidden lg:block absolute top-1/2 right-6 w-[300px] h-[180px] overflow-hidden pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    visibility: isHovered ? "visible" : "hidden",
                    transform: isHovered
                      ? "translateY(-50%) scale(1) rotate(0deg)"
                      : "translateY(-40%) scale(0.95) rotate(-2deg)",
                    boxShadow: "var(--card-shadow-hover)",
                    borderRadius: "var(--card-radius)",
                    zIndex: 20,
                  }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                    style={{
                      transform: isHovered ? "scale(1)" : "scale(1.1)",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="section-container mt-16 md:mt-20 flex justify-center pb-8 relative z-10">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--accent)",
            color: "var(--background)",
            boxShadow: "0 4px 20px rgba(122, 158, 159, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--calm-accent)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(106, 142, 143, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(122, 158, 159, 0.3)";
          }}
        >
          Book a Consultation
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}