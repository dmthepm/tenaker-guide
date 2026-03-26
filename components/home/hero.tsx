"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        noteRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  return (
    <section className="px-6 pt-16 pb-10 md:pt-24 md:pb-14 max-w-5xl mx-auto">
      <h1
        ref={headingRef}
        className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-semibold text-foreground tracking-tighter leading-none"
      >
        Welcome to Cazadero
      </h1>
      <p
        ref={subtextRef}
        className="mt-4 text-muted text-lg md:text-xl max-w-[55ch] leading-relaxed"
      >
        Your guide to the redwoods, the coast, and everything in between.
        Built for the Ten Aker Wood cast and crew.
      </p>
      <div
        ref={noteRef}
        className="mt-6 bg-sage/30 rounded-xl px-5 py-4 border border-sage/50 max-w-lg"
      >
        <p className="text-sm text-sage-dark leading-relaxed">
          <span className="font-semibold">From Devon.</span> I&apos;ve lived up
          here for 7 years. This guide is everything I wish someone had handed
          me when I first arrived. If something is missing or wrong, find me on
          set or in the group chat.
        </p>
      </div>
    </section>
  );
}
