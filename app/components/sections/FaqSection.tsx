"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

const faqs = [
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy is beneficial for anyone looking to navigate life's challenges, improve their mental health, or achieve personal growth. If you are experiencing overwhelming stress, persistent anxiety, feeling stuck, or simply want to understand yourself better, therapy provides a safe and supportive space to explore these feelings.",
  },
  {
    question: "What can I expect in my first session?",
    answer:
      "Your first session is primarily about getting to know you. We will discuss your background, what brings you to therapy, and what you hope to achieve. It's a collaborative process where we establish a foundation of trust and determine the best approach tailored to your unique needs.",
  },
  {
    question: "How long does a typical therapy session last?",
    answer:
      "A standard individual therapy session lasts for 50 minutes. Couples and family sessions may run slightly longer, typically 60 to 75 minutes, depending on the specific arrangement we agree upon during our initial consultation.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We are an out-of-network provider for most insurance plans. However, we can provide you with a detailed superbill that you can submit to your insurance company for potential reimbursement, depending on your out-of-network benefits.",
  },
  {
    question: "Is everything I say confidential?",
    answer:
      "Yes, confidentiality is a cornerstone of therapy. What you share in our sessions is strictly private and protected by law, with a few legal exceptions (such as if there is an immediate risk of harm to yourself or others), which we will discuss thoroughly in our first meeting.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-py)",
        paddingBottom: "var(--section-py)",
      }}
    >
      {/* Subtle radial gradient background accents */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          transform: "translate(30%, -50%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* ── Left Column: Header ── */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <FadeIn>
              <div className="flex items-center gap-5 mb-6">
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Got Questions?
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--border-subtle)" }}
                />
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-cormorant-garamond)",
                  color: "var(--primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Frequently<br />Asked Questions
              </h2>

              <p
                className="text-[15px] leading-relaxed max-w-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Find answers to common questions about our therapy services, what to expect, and how we can support your mental wellness journey.
              </p>

              <div className="mt-10 hidden lg:block">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300"
                  style={{ color: "var(--accent)" }}
                >
                  Still have questions? Contact us
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
            </FadeIn>
          </div>

          {/* ── Right Column: FAQ Accordion ── */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div
                    className="group relative cursor-pointer overflow-hidden transition-all duration-500"
                    style={{
                      borderRadius: "1rem",
                      background: isOpen ? "rgba(255,255,255,0.03)" : "transparent",
                      border: "1px solid",
                      borderColor: isOpen ? "var(--border-subtle)" : "transparent",
                    }}
                    onClick={() => toggleOpen(index)}
                  >
                    {/* Hover state background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: "var(--surface)",
                        zIndex: 0,
                      }}
                    />

                    <div className="relative z-10 px-6 py-6 md:px-8 md:py-7">
                      <div className="flex items-center justify-between gap-6">
                        <h3
                          className="text-lg md:text-xl font-semibold transition-colors duration-300"
                          style={{
                            fontFamily: "var(--font-cormorant-garamond)",
                            color: isOpen ? "var(--accent)" : "var(--primary)",
                          }}
                        >
                          {faq.question}
                        </h3>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500"
                          style={{
                            background: isOpen ? "var(--accent)" : "var(--surface)",
                            color: isOpen ? "var(--background)" : "var(--primary)",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                            />
                          </svg>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p
                              className="pt-4 text-[15px] leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* Subtle divider if not open and not hovered */}
                  {!isOpen && (
                    <div
                      className="h-px mx-6 transition-opacity duration-300 group-hover:opacity-0"
                      style={{ background: "var(--border-subtle)" }}
                    />
                  )}
                </FadeIn>
              );
            })}
          </div>
          
          <div className="mt-8 lg:hidden">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300"
              style={{ color: "var(--accent)" }}
            >
              Still have questions? Contact us
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
        </div>
      </div>
    </section>
  );
}
