"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function FadeInBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function BentoBox({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeInBlock
      delay={delay}
      className={`group relative overflow-hidden p-8 transition-all duration-500 ${className}`}
    >
      {/* Background with glassmorphism feel */}
      <div
        className="absolute inset-0 opacity-90 backdrop-blur-md"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "2rem",
        }}
      />
      {/* Subtle hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, transparent 100%)",
          borderRadius: "2rem",
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </FadeInBlock>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
        background: "var(--background)",
      }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeInBlock className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase shrink-0"
              style={{ color: "var(--accent)" }}
            >
              About Us
            </span>
            <div
              className="h-px w-24"
              style={{ background: "var(--accent)", opacity: 0.5 }}
            />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-cormorant-garamond)",
            }}
          >
            Redefining care <br className="hidden md:block" />
            <span style={{ color: "var(--text-secondary)" }}>
              through connection.
            </span>
          </h2>
        </FadeInBlock>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(260px,auto)]">
          
          {/* 1. Our Story (Large Cell) */}
          <BentoBox
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
            delay={0.1}
          >
            <div className="flex flex-col h-full">
              <h3
                className="text-3xl font-bold mb-6"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-cormorant-garamond)",
                }}
              >
                Where It All Began
              </h3>
              
              <div className="space-y-5 flex-grow">
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Founded with a vision to make mental health care accessible to
                  everyone, we&apos;ve grown from a dedicated individual practice into a
                  trusted partner for wellness worldwide.
                </p>
                <div
                  className="pl-5 py-1"
                  style={{ borderLeft: "2px solid var(--accent)" }}
                >
                  <p
                    className="text-base italic leading-relaxed"
                    style={{
                      color: "var(--primary)",
                      fontFamily: "var(--font-cormorant-garamond)",
                    }}
                  >
                    &ldquo;We believe everyone deserves access to compassionate,
                    expert psychiatric care — no matter where they are.&rdquo;
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div
                className="mt-8 pt-6 grid grid-cols-2 gap-4"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--calm-accent)" }}
                  >
                    10+
                  </div>
                  <div
                    className="text-[11px] font-medium uppercase tracking-wider"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Years
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--calm-accent)" }}
                  >
                    500+
                  </div>
                  <div
                    className="text-[11px] font-medium uppercase tracking-wider"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </BentoBox>

          {/* 2. Vision */}
          <BentoBox
            className="md:col-span-1 lg:col-span-2 lg:row-span-1"
            delay={0.2}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(106,142,143,0.1)",
                    color: "var(--calm-accent)",
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  Our Vision
                </h3>
              </div>
              <p
                className="text-[15px] leading-relaxed flex-grow"
                style={{ color: "var(--text-secondary)" }}
              >
                To be recognized as a global leader in our field, setting industry
                standards and inspiring positive change. We envision a future where
                our innovative solutions make a meaningful difference.
              </p>
            </div>
          </BentoBox>

          {/* 3. Mission */}
          <BentoBox
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 flex flex-col justify-between"
            delay={0.3}
          >
            <div className="flex flex-col h-full">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(122,158,159,0.1)",
                  color: "var(--accent)",
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--primary)" }}
              >
                Mission
              </h3>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                To deliver exceptional solutions that empower our clients to
                achieve their goals.
              </p>
            </div>
          </BentoBox>

          {/* 4. Core Values */}
          <BentoBox
            className="md:col-span-1 lg:col-span-1 lg:row-span-1"
            delay={0.4}
          >
            <h3
              className="text-xl font-bold mb-5"
              style={{ color: "var(--primary)" }}
            >
              Values
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Excellence", icon: "✨" },
                { name: "Integrity", icon: "🛡️" },
                { name: "Innovation", icon: "💡" },
                { name: "Collaboration", icon: "🤝" },
              ].map((val) => (
                <li key={val.name} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm"
                    style={{ background: "var(--background)" }}
                  >
                    {val.icon}
                  </div>
                  <span
                    className="text-[14px] font-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    {val.name}
                  </span>
                </li>
              ))}
            </ul>
          </BentoBox>

        </div>
      </div>
    </section>
  );
}