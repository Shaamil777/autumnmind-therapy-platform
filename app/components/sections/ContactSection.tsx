"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full relative overflow-hidden" style={{ background: "var(--background)", paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-[1px]" style={{ background: "var(--border-subtle)" }} />
               <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
                 Reach Out
               </span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6" 
              style={{ fontFamily: "var(--font-cormorant-garamond)", color: "var(--primary)", letterSpacing: "-0.01em" }}
            >
              Talk to someone who understands
            </h2>

            {/* Trust Line */}
            <div className="flex items-center gap-3 mb-10 w-fit px-5 py-3 border shadow-sm" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)', borderRadius: 'var(--card-radius)' }}>
              <span className="text-[var(--accent)]">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide" style={{ color: "var(--primary)" }}>
                100% confidential <span className="opacity-40 mx-1">|</span> Certified counselors
              </span>
            </div>

            {/* Contact & Availability Grid */}
            <div className="grid sm:grid-cols-2 gap-10 border-b pb-12 mb-10" style={{ borderColor: 'var(--border-subtle)' }}>
               {/* Contact Options */}
               <div>
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] mb-5 text-black/40">Contact Options</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--accent)] group-hover:text-white" style={{ backgroundColor: "var(--secondary-bg)", color: "var(--primary)" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      </div>
                      <span className="text-sm font-medium transition-colors" style={{ color: "var(--primary)" }}>+1 (800) 123-4567</span>
                    </li>
                    <li className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#25D366] group-hover:text-white" style={{ backgroundColor: "var(--secondary-bg)", color: "var(--primary)" }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
                      </div>
                      <span className="text-sm font-medium transition-colors" style={{ color: "var(--primary)" }}>WhatsApp Us</span>
                    </li>
                    <li className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--accent)] group-hover:text-white" style={{ backgroundColor: "var(--secondary-bg)", color: "var(--primary)" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      </div>
                      <span className="text-sm font-medium transition-colors" style={{ color: "var(--primary)" }}>care@ridabyrahma.com</span>
                    </li>
                  </ul>
               </div>

               {/* Availability */}
               <div>
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] mb-5 text-black/40">Availability</h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                      <div className="mt-0.5 text-[var(--accent)]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold mb-1" style={{ color: "var(--primary)" }}>Regular Sessions</p>
                        <p className="text-[13px]" style={{ color: "var(--text-muted-color)" }}>Mon - Fri: 9:00 AM - 8:00 PM</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-0.5 text-[var(--accent)]">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold mb-1" style={{ color: "var(--primary)" }}>Weekend Support</p>
                        <p className="text-[13px]" style={{ color: "var(--text-muted-color)" }}>Sat: 10:00 AM - 4:00 PM</p>
                      </div>
                    </li>
                  </ul>
               </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-0">
               <a href="#booking" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 btn-primary shadow-lg hover:shadow-xl group">
                 Book a Session
                 <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </a>
               <a href="#talk" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 border bg-transparent hover:bg-black/5" style={{ borderColor: "var(--border-subtle)", color: "var(--primary)" }}>
                 Talk Now
               </a>
            </div>

            {/* Mobile Emergency Note - visually hidden on lg to move it to right column bottom if needed, or keep here. Let's keep it here for all. */}
            <div className="mt-8 lg:mt-10 bg-[#FFF4F4] border border-[#FFD6D6] p-5 md:p-6 flex items-start gap-4 shadow-sm" style={{ borderRadius: 'var(--card-radius)' }}>
              <div className="shrink-0 text-[#D32F2F]">
                 <svg className="w-6 h-6 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              <div>
                <p className="text-[#D32F2F] font-bold mb-1.5 text-xs uppercase tracking-wider">Emergency Support</p>
                <p className="text-[#D32F2F] text-[13px] leading-relaxed opacity-90">
                  If you are in immediate danger or experiencing a life-threatening mental health emergency, please do not use this site. Call <strong>911</strong> or your local emergency number immediately.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Quick Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="bg-white p-8 md:p-10 border border-[var(--border-subtle)] relative overflow-hidden" style={{ borderRadius: 'var(--card-radius)', boxShadow: 'var(--card-shadow)' }}>
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--accent)] opacity-5 blur-3xl pointer-events-none" />
               <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[var(--calm-accent)] opacity-5 blur-3xl pointer-events-none" />

               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-cormorant-garamond)", color: "var(--primary)" }}>
                   Drop us a message
                 </h3>
                 <p className="text-[13px] sm:text-sm mb-8" style={{ color: "var(--text-muted-color)" }}>
                   Fill out the quick form below and we&apos;ll get back to you shortly.
                 </p>

                 <form className="space-y-5">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                     <div className="space-y-1.5">
                       <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>Full Name</label>
                       <input 
                         type="text" 
                         className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-black/20" 
                         placeholder="Jane Doe" 
                       />
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>Email Address</label>
                       <input 
                         type="email" 
                         className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-black/20" 
                         placeholder="jane@example.com" 
                       />
                     </div>
                   </div>
                   
                   <div className="space-y-1.5">
                     <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>Phone Number (Optional)</label>
                     <input 
                       type="tel" 
                       className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all placeholder:text-black/20" 
                       placeholder="+1 (555) 000-0000" 
                     />
                   </div>

                   <div className="space-y-1.5">
                     <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] pl-1" style={{ color: "var(--primary)" }}>How can we help?</label>
                     <textarea 
                       rows={4} 
                       className="w-full bg-[var(--background)] border border-[var(--border-subtle)] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none placeholder:text-black/20" 
                       placeholder="Briefly describe what's on your mind..."
                     ></textarea>
                   </div>

                   <button 
                     type="button" 
                     className="w-full mt-2 bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] font-bold tracking-[0.15em] uppercase text-[10px] sm:text-[11px] py-4 rounded-xl transition-colors shadow-lg shadow-black/10 flex justify-center items-center gap-2"
                   >
                     Send Message
                   </button>
                 </form>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}