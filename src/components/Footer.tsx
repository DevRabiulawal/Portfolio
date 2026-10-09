"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
  contact: {
    heading: "CONTACT",
    links: [
      { label: "dev.rabiulawal@gmail.com", href: "mailto:dev.rabiulawal@gmail.com" },
    ],
  },
  social: {
    heading: "SOCIAL",
    links: [
      { label: "LINKEDIN", href: "https://www.linkedin.com/in/rabi-ul-awal" },
      { label: "GITHUB", href: "https://github.com/DevRabiulawal" },
    ],
  },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} id="contact" className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
      {/* Divider */}
      <div className="h-[2px] bg-gradient-to-r from-accent via-accent/40 to-transparent mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 mb-16">
          {Object.values(footerLinks).map((section) => (
            <div key={section.heading}>
              <h4 className="font-mono text-xs font-bold tracking-widest text-text mb-4">
                {section.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-mono text-xs text-text-muted hover:text-accent transition-colors duration-200 tracking-wider"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big Name — Bermawy-style footer logo */}
        <div className="relative overflow-hidden py-4">
          <div
            className="font-mono text-[clamp(2rem,7.5vw,5.5rem)] font-bold leading-none tracking-tighter text-transparent select-none whitespace-nowrap"
            style={{
              WebkitTextStroke: "1.5px rgba(26, 26, 26, 0.12)",
            }}
          >
            RABI UL AWAL
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-border/40">
          <p className="font-mono text-[10px] text-text-muted tracking-wider">
            © 2026 RABI UL AWAL. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
