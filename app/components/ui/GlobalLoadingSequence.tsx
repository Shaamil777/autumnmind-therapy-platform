"use client";

import { useState, useEffect } from "react";

type LoadingState = 'hidden' | 'fade-in' | 'transition' | 'complete';

export default function GlobalLoadingSequence() {
  const [loadingState, setLoadingState] = useState<LoadingState>('hidden');

  useEffect(() => {
    // Add loading class to disable scroll and hide navigation initially
    document.documentElement.classList.add("is-loading");
    document.body.classList.add("is-loading");
    document.documentElement.classList.remove("loading-complete");
    document.body.classList.remove("loading-complete");

    // State 1: Leaf fades in and begins pulsing
    const t1 = setTimeout(() => setLoadingState('fade-in'), 100);
    // State 2: Leaf scales up to hero section size, overlay fades out
    const t2 = setTimeout(() => setLoadingState('transition'), 2000);
    // State 3: Transition complete, leaf anchors to the document flow
    const t3 = setTimeout(() => {
      setLoadingState('complete');
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      document.documentElement.classList.add("loading-complete");
      document.body.classList.add("loading-complete");
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      {/* Loading Screen Overlay */}
      {loadingState !== 'complete' && (
        <div 
          className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            loadingState === 'transition' ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
      )}

      {/* The Global Shared Leaf */}
      <div 
        className={`z-[60] flex items-center justify-center overflow-hidden pointer-events-none transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${
          loadingState === 'complete' ? 'absolute top-0 left-0 w-full h-[100vh]' : 'fixed inset-0'
        }`}
        style={{
          transitionDuration: loadingState === 'fade-in' ? '800ms' : loadingState === 'transition' ? '1200ms' : '0ms',
          opacity: loadingState === 'hidden' ? 0 : loadingState === 'fade-in' ? 1 : 0.85,
          transform: loadingState === 'hidden' || loadingState === 'fade-in' 
            ? 'scale(0.2) rotate(-15deg)'
            : 'scale(1) rotate(8deg)', // transition and complete states
        }}
      >
        <img
          src="/images/leaf.png"
          alt="Autumn Leaf"
          className={`w-[24rem] h-[24rem] sm:w-[32rem] sm:h-[32rem] md:w-[42rem] md:h-[42rem] lg:w-[46rem] lg:h-[46rem] object-contain select-none filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)] ${
            loadingState === 'fade-in' ? 'animate-pulse' : ''
          }`}
        />
      </div>
    </>
  );
}
