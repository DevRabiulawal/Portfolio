"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

import portfolioData from "@/data/portfolio.json";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading"
      >
        experience &amp; roles
      </motion.div>

      {/* Experience List — Article-style rows */}
      <div className="flex flex-col">
        {portfolioData.experience.map((exp, i) => (
          <motion.article
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group border-b border-border py-6 first:pt-0 last:border-b-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
              {/* Date Column */}
              <div className="sm:w-36 shrink-0">
                <span className="font-mono text-xs text-text-muted tracking-wider">
                  {exp.date}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-text tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs text-accent font-bold mt-0.5 tracking-wide">
                      {exp.company}
                    </p>
                  </div>

                  {/* Arrow/link icon */}
                  <div className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent"
                    >
                      <path d="M4 12 L12 4" />
                      <path d="M5 4 H12 V11" />
                    </svg>
                  </div>
                </div>

                <p className="font-mono text-xs leading-relaxed text-text-muted mt-3">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Certifications Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading mt-24"
      >
        certifications
      </motion.div>

      {/* Certifications List */}
      <div className="flex flex-col">
        {portfolioData.certifications.map((cert, i) => (
          <motion.article
            key={i}
            custom={i + portfolioData.experience.length}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group border-b border-border py-6 first:pt-0 last:border-b-0"
          >
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                {/* Date Column */}
                <div className="sm:w-36 shrink-0">
                  <span className="font-mono text-xs text-text-muted tracking-wider">
                    {cert.date}
                  </span>
                </div>

                {/* Content Column */}
                <div className="flex-1 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-text tracking-wide group-hover:text-accent transition-colors duration-200">
                      {cert.name}
                    </h3>
                    <p className="font-mono text-xs text-text-muted font-bold mt-0.5 tracking-wide">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* External Link Icon */}
                  <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent"
                    >
                      <path d="M4 12 L12 4" />
                      <path d="M5 4 H12 V11" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
