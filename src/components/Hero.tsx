"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [typedText, setTypedText] = useState("");
  const fullText = "hi there_";

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Column — Greeting + Visual */}
        <div className="flex flex-col gap-8">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {typedText}
              <span className="cursor-blink text-accent">|</span>
            </h1>
          </motion.div>

          {/* Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[320px]"
          >
            <div className="aspect-[3/4] bg-bg-card border border-border relative overflow-hidden group">
              {/* Sketch-style portrait placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 260"
                  className="w-3/4 h-3/4 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Head */}
                  <ellipse cx="100" cy="80" rx="45" ry="55" className="text-text" />
                  {/* Eyes */}
                  <circle cx="82" cy="72" r="8" className="text-accent" strokeWidth="2" />
                  <circle cx="118" cy="72" r="8" className="text-accent" strokeWidth="2" />
                  <circle cx="82" cy="72" r="3" fill="currentColor" className="text-text" />
                  <circle cx="118" cy="72" r="3" fill="currentColor" className="text-text" />
                  {/* Nose */}
                  <path d="M100 80 L96 95 L104 95" className="text-text" />
                  {/* Mouth */}
                  <path d="M88 105 Q100 115 112 105" className="text-text" />
                  {/* Body */}
                  <path d="M55 135 Q100 125 145 135 L155 260 L45 260 Z" className="text-text" />
                  {/* Collar detail */}
                  <path d="M75 135 L100 155 L125 135" className="text-text" />
                </svg>
              </div>
              {/* Blue corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent" />
            </div>
          </motion.div>
        </div>

        {/* Right Column — Bio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:pt-8"
        >
          <p className="font-mono text-sm sm:text-base leading-relaxed text-text">
            Rabi here, nice to meet you 👋
            <br />
            <br />
            I am a{" "}
            <span className="link-reveal cursor-default">Data Science undergraduate</span>{" "}
            and{" "}
            <span className="link-reveal cursor-default">UI/UX Designer</span>{" "}
            bridging the gap between heavy backend AI and beautiful frontends.
          </p>

          <p className="font-mono text-sm sm:text-base leading-relaxed text-text-muted">
            I build intelligent systems that are as elegant as they are functional —
            from RAG-powered AI agents to automated enterprise portals. I believe
            great software should feel invisible yet powerful.
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Python",
              "Next.js",
              "LangChain",
              "Figma",
              "TensorFlow",
              "C#",
              "TypeScript",
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] font-bold tracking-wider uppercase px-3 py-1 border border-border text-text-muted hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
