"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-bg/70 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-mono text-sm font-bold tracking-widest text-text hover:text-accent transition-colors duration-200">
          Rabi ul awal
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="#projects"
            className="font-mono text-xs font-bold tracking-wider text-text hover:text-accent transition-colors duration-200"
          >
            [PROJECTS]
          </Link>
          <Link
            href="#experience"
            className="font-mono text-xs font-bold tracking-wider text-text hover:text-accent transition-colors duration-200"
          >
            [EXPERIENCE]
          </Link>
          <Link
            href="#contact"
            className="font-mono text-xs font-bold tracking-wider text-text hover:text-accent transition-colors duration-200"
          >
            [CONTACT]
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span
            className={`block w-5 h-0.5 bg-text transition-transform duration-200 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text transition-transform duration-200 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="sm:hidden border-t border-border bg-bg/95 backdrop-blur-md"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="font-mono text-xs font-bold tracking-wider text-text hover:text-accent transition-colors"
            >
              [PROJECTS]
            </Link>
            <Link
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="font-mono text-xs font-bold tracking-wider text-text hover:text-accent transition-colors"
            >
              [EXPERIENCE]
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-mono text-xs font-bold tracking-wider text-text hover:text-accent transition-colors"
            >
              [CONTACT]
            </Link>
          </div>
        </motion.div>
      )}

      {/* Bottom divider line */}
      <div className="h-[2px] bg-gradient-to-r from-accent via-accent/40 to-transparent" />
    </motion.nav>
  );
}
