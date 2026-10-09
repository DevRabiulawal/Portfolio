"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

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
              {/* Portrait */}
              <div className="absolute inset-0">
                <Image
                  src="/profile.jpg"
                  alt="Rabi ul awal"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 hover:scale-105"
                  priority
                />
              </div>
              {/* Blue corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent z-10 pointer-events-none" />
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
            {portfolioData.personal.name} here, nice to meet you!
            <br />
            <br />
            I am a{" "}
            <span className="link-reveal cursor-default">{portfolioData.personal.title}</span>.
          </p>

          <p className="font-mono text-sm sm:text-base leading-relaxed text-text-muted">
            {portfolioData.personal.bio}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {portfolioData.skills.map((tech) => (
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
