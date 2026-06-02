"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Fade-in block that triggers only once ─── */
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
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Vision & Mission — stacked cards that split on scroll ─── */
function VisionMissionCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const springConfig = {
    type: "spring" as const,
    stiffness: 50,
    damping: 20,
    mass: 1,
  };

  return (
    <div
      ref={containerRef}
      className="relative section-container"
    >
      {/* Section sub-label */}
      <div className="text-center mb-14">
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          What Drives Us
        </span>
      </div>

      {/* Cards wrapper — on desktop, both cards start stacked at center, then split */}
      <div
        className="relative"
        style={{ minHeight: isInView ? "auto" : "520px" }}
      >
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10"
          style={{
            perspective: "1200px",
          }}
        >
          {/* ── Vision Card (slides LEFT + tilts) ── */}
          <motion.div
            className="w-full md:w-1/2 max-w-[540px] mx-auto md:mx-0"
            initial={{
              x: "30%",
              y: 10,
              rotate: 0,
              rotateY: 3,
              scale: 0.96,
            }}
            animate={
              isInView
                ? { x: "0%", y: -16, rotate: -3, rotateY: 0, scale: 1 }
                : { x: "30%", y: 10, rotate: 0, rotateY: 3, scale: 0.96 }
            }
            transition={{ ...springConfig, delay: 0.1 }}
          >
            <motion.div
              className="relative p-8 md:p-10 h-full"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
              whileHover={{
                y: -6,
                boxShadow: "var(--card-shadow-hover)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
                style={{
                  borderTopLeftRadius: "var(--card-radius)",
                  borderTop: "2px solid var(--calm-accent)",
                  borderLeft: "2px solid var(--calm-accent)",
                  opacity: 0.25,
                }}
              />

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: "rgba(106,142,143,0.1)",
                  color: "var(--calm-accent)",
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Our Vision
              </div>

              {/* Heading */}
              <h3
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}
              >
                Shaping The{" "}
                <span style={{ color: "var(--calm-accent)" }}>Future</span>
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-7"
                style={{ color: "var(--text-secondary)" }}
              >
                To be recognized as a global leader in our field, setting industry
                standards and inspiring positive change. We envision a future where
                our innovative solutions make a meaningful difference in the lives
                of people worldwide.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(106,142,143,0.06)" }}
                >
                  <div className="text-2xl font-bold mb-0.5" style={{ color: "var(--calm-accent)" }}>10+</div>
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>Years</div>
                </div>
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(106,142,143,0.06)" }}
                >
                  <div className="text-2xl font-bold mb-0.5" style={{ color: "var(--calm-accent)" }}>500+</div>
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>Projects</div>
                </div>
              </div>

              {/* Decorative bottom-right accent line */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
                style={{
                  borderBottomRightRadius: "var(--card-radius)",
                  borderBottom: "2px solid var(--calm-accent)",
                  borderRight: "2px solid var(--calm-accent)",
                  opacity: 0.12,
                }}
              />
            </motion.div>
          </motion.div>

          {/* ── Mission Card (slides RIGHT + tilts) ── */}
          <motion.div
            className="w-full md:w-1/2 max-w-[540px] mx-auto md:mx-0"
            initial={{
              x: "-30%",
              y: -10,
              rotate: 0,
              rotateY: -3,
              scale: 0.96,
            }}
            animate={
              isInView
                ? { x: "0%", y: 16, rotate: 3, rotateY: 0, scale: 1 }
                : { x: "-30%", y: -10, rotate: 0, rotateY: -3, scale: 0.96 }
            }
            transition={{ ...springConfig, delay: 0.2 }}
          >
            <motion.div
              className="relative p-8 md:p-10 h-full"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
              whileHover={{
                y: -6,
                boxShadow: "var(--card-shadow-hover)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                style={{
                  borderTopRightRadius: "var(--card-radius)",
                  borderTop: "2px solid var(--accent)",
                  borderRight: "2px solid var(--accent)",
                  opacity: 0.25,
                }}
              />

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: "rgba(122,158,159,0.1)",
                  color: "var(--accent)",
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Our Mission
              </div>

              {/* Heading */}
              <h3
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}
              >
                Driven By{" "}
                <span style={{ color: "var(--accent)" }}>Purpose</span>
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-7"
                style={{ color: "var(--text-secondary)" }}
              >
                To deliver exceptional solutions that empower our clients to
                achieve their goals. We strive to create lasting value through
                innovation, integrity, and unwavering commitment to excellence in
                everything we do.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(122,158,159,0.06)" }}
                >
                  <div className="text-2xl font-bold mb-0.5" style={{ color: "var(--accent)" }}>98%</div>
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>Satisfaction</div>
                </div>
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(122,158,159,0.06)" }}
                >
                  <div className="text-2xl font-bold mb-0.5" style={{ color: "var(--accent)" }}>24/7</div>
                  <div className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>Support</div>
                </div>
              </div>

              {/* Decorative bottom-left accent line */}
              <div
                className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none"
                style={{
                  borderBottomLeftRadius: "var(--card-radius)",
                  borderBottom: "2px solid var(--accent)",
                  borderLeft: "2px solid var(--accent)",
                  opacity: 0.12,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)", background: "var(--background)" }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Section Header ── */}
      <div className="section-container relative z-10">
        <FadeInBlock className="text-center mb-20 md:mb-28">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5"
            style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}
          >
            About Us
          </h2>
          <div
            className="w-20 h-[3px] mx-auto mb-6 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Discover our story, mission, and the values that drive us forward
          </p>
        </FadeInBlock>
      </div>

      {/* ── Our Story Block — Editorial Clean ── */}
      <div className="section-container mb-20 md:mb-28">

        {/* Label row with extending line */}
        <FadeInBlock>
          <div className="flex items-center gap-5 mb-10">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase shrink-0"
              style={{ color: "var(--accent)" }}
            >
              Our Story
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
          </div>
        </FadeInBlock>

        {/* Two-column: text left, image/SVG right */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — editorial text */}
          <FadeInBlock delay={0.1}>
            {/* Large heading */}
            <h3
              className="text-4xl md:text-5xl font-bold leading-[1.15] mb-8"
              style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}
            >
              Where It All Began
            </h3>

            {/* Pull-quote */}
            <div
              className="pl-6 mb-8"
              style={{ borderLeft: "3px solid var(--accent)" }}
            >
              <p
                className="text-lg md:text-xl leading-relaxed italic"
                style={{ color: "var(--primary)", fontFamily: "var(--font-cormorant-garamond)" }}
              >
                &ldquo;We believe everyone deserves access to compassionate, expert
                psychiatric care — no matter where they are.&rdquo;
              </p>
            </div>

            {/* Two-column body text */}
            <div className="grid sm:grid-cols-2 gap-6">
              <p
                className="text-[15px] leading-[1.8]"
                style={{ color: "var(--text-secondary)" }}
              >
                Founded with a vision to make mental health care accessible to
                everyone, we&apos;ve grown from a dedicated individual practice into a
                trusted partner for wellness worldwide.
              </p>
              <p
                className="text-[15px] leading-[1.8]"
                style={{ color: "var(--text-secondary)" }}
              >
                Our journey began with a simple belief: that healing comes from
                genuine connection. Today, we continue to uphold that value in every
                consultation and every interaction.
              </p>
            </div>
          </FadeInBlock>

          {/* Right — Image / SVG placeholder */}
          <FadeInBlock delay={0.25}>
            <div className="relative flex items-center justify-center">
              {/* Decorative SVG illustration — replace with your own image or SVG */}
              <svg
                viewBox="0 0 400 400"
                fill="none"
                className="w-full max-w-[360px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Soft background circle */}
                <circle cx="200" cy="200" r="160" fill="var(--accent)" opacity="0.06" />
                <circle cx="200" cy="200" r="120" fill="var(--accent)" opacity="0.06" />

                {/* Abstract brain/mind lines */}
                <g stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
                  <path d="M160 180 C160 140, 200 120, 200 160 C200 120, 240 140, 240 180" />
                  <path d="M150 200 C140 170, 180 150, 200 180 C220 150, 260 170, 250 200" />
                  <path d="M155 220 C145 200, 175 185, 200 200 C225 185, 255 200, 245 220" />
                </g>

                {/* Heart shape — care/compassion */}
                <path
                  d="M200 260 C180 240, 150 240, 150 215 C150 195, 170 185, 200 210 C230 185, 250 195, 250 215 C250 240, 220 240, 200 260Z"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  fill="var(--accent)"
                  opacity="0.12"
                />

                {/* Orbital rings */}
                <ellipse cx="200" cy="200" rx="155" ry="50" stroke="var(--accent)" strokeWidth="0.8" opacity="0.15" transform="rotate(-20 200 200)" />
                <ellipse cx="200" cy="200" rx="155" ry="50" stroke="var(--accent)" strokeWidth="0.8" opacity="0.15" transform="rotate(20 200 200)" />

                {/* Small accent dots */}
                <circle cx="130" cy="160" r="4" fill="var(--accent)" opacity="0.25" />
                <circle cx="270" cy="160" r="4" fill="var(--accent)" opacity="0.25" />
                <circle cx="200" cy="120" r="3" fill="var(--accent)" opacity="0.3" />
                <circle cx="160" cy="280" r="3" fill="var(--accent)" opacity="0.2" />
                <circle cx="250" cy="275" r="3" fill="var(--accent)" opacity="0.2" />
              </svg>
            </div>
          </FadeInBlock>
        </div>
      </div>

      {/* ── Vision & Mission — Stacked Cards that split on scroll ── */}
      <VisionMissionCards />

      {/* ── Core Values ── */}
      <div className="section-container relative z-10 mt-28 md:mt-36">
        <FadeInBlock className="text-center mb-14">
          <h3
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--primary)" }}
          >
            Our Core Values
          </h3>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            The principles that guide our decisions and define who we are
          </p>
        </FadeInBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Excellence",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ),
              description: "We pursue the highest standards in everything we do",
              bgTint: "rgba(122,158,159,0.1)",
              accent: "var(--accent)",
            },
            {
              title: "Integrity",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              description: "We build trust through honesty and transparency",
              bgTint: "rgba(106,142,143,0.1)",
              accent: "var(--calm-accent)",
            },
            {
              title: "Innovation",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              description: "We embrace creativity and continuous improvement",
              bgTint: "rgba(122,158,159,0.1)",
              accent: "var(--accent)",
            },
            {
              title: "Collaboration",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              description: "We achieve more when we work together",
              bgTint: "rgba(106,142,143,0.1)",
              accent: "var(--calm-accent)",
            },
          ].map((value, index) => (
            <FadeInBlock key={index} delay={index * 0.1}>
              <div
                className="group relative p-7 text-center transition-all duration-300 cursor-default hover:-translate-y-1"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--card-radius)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {/* Hover border */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: `1px solid ${value.accent}`, borderRadius: "var(--card-radius)" }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: value.bgTint, color: value.accent }}
                >
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: "var(--primary)" }}>
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {value.description}
                </p>
              </div>
            </FadeInBlock>
          ))}
        </div>
      </div>
    </section>
  );
}