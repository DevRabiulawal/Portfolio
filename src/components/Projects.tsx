"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

const icons = [
  (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16" key="1">
      <rect x="10" y="15" width="60" height="50" rx="4" />
      <path d="M10 30 H70" />
      <circle cx="20" cy="22" r="3" />
      <circle cx="30" cy="22" r="3" />
      <circle cx="40" cy="22" r="3" />
      <path d="M25 42 L35 52 L55 37" strokeWidth="2.5" className="text-accent" />
    </svg>
  ),
  (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16" key="2">
      <rect x="12" y="10" width="56" height="60" rx="3" />
      <path d="M12 25 H68" />
      <path d="M25 25 V70" />
      <rect x="30" y="32" width="14" height="8" rx="1" className="text-accent" strokeWidth="2" />
      <rect x="50" y="32" width="14" height="8" rx="1" />
      <rect x="30" y="46" width="14" height="8" rx="1" />
      <rect x="50" y="46" width="14" height="8" rx="1" className="text-accent" strokeWidth="2" />
      <circle cx="19" cy="35" r="4" />
      <circle cx="19" cy="50" r="4" />
      <circle cx="19" cy="65" r="2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16" key="3">
      <rect x="8" y="8" width="64" height="45" rx="4" />
      <path d="M8 18 H72" />
      <path d="M30 53 L25 70 H55 L50 53" />
      <path d="M22 70 H58" strokeWidth="2" />
      <circle cx="40" cy="38" r="10" className="text-accent" strokeWidth="2" />
      <path d="M36 38 L39 41 L45 35" className="text-accent" strokeWidth="2" />
    </svg>
  ),
];


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading"
      >
        in the works
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, i) => (
          <motion.article
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="card-hover border border-border bg-bg group cursor-pointer"
          >
            {/* Card Image Area */}
            <div className="aspect-[4/3] bg-bg-card flex items-center justify-center relative overflow-hidden border-b border-border">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 hover:scale-105 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="text-text-muted group-hover:text-text transition-colors duration-300 z-0">
                  {icons[i % icons.length]}
                </div>
              )}
              
              {/* Top pin */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <div className="w-3 h-3 rounded-full border-2 border-border bg-bg" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="font-mono text-sm font-bold text-accent mb-2 tracking-wide">
                {project.name}
              </h3>
              <p className="font-mono text-xs leading-relaxed text-text-muted mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 border border-border/60 text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
