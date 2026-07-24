"use client";

import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { container, item, float, twinkle } from "./hero-variants";

type TabKey = "news" | "premium";

const tabs: { key: TabKey; label: string }[] = [
  { key: "news", label: "News" },
  { key: "premium", label: "Premium News" },
];

const tabContent: Record<
  TabKey,
  {
    heading: string;
    highlight: string;
    subtext: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    link1: string;
    link2: string;
  }
> = {
  news: {
    heading: "One story,",
    highlight: "every angle.",
    subtext:
      "Independent journalism and essays that refract the news into the perspectives you actually need.",
    primaryCta: "Read Latest News",
    primaryHref: "news",
    secondaryCta: "Meet our writers",
    secondaryHref: "#writers",
    link1: "Free articles $0.00**",
    link2: "Daily briefing · 7AM",
  },
  premium: {
    heading: "Go beyond",
    highlight: "the headline.",
    subtext:
      "Member-only investigations, long-form analysis, and ad-free reading — the full picture, for readers who want more.",
    primaryCta: "Unlock Premium",
    primaryHref: "premium",
    secondaryCta: "See pricing",
    secondaryHref: "#pricing",
    link1: "Premium only $999/year*",
    link2: "30-day money-back guarantee",
  },
};

export default function HeroMotion() {
  const [tab, setTab] = useState<TabKey>("news");
  const c = tabContent[tab];

  return (
    <MotionConfig reducedMotion="user">
      {/* Drifting glow blobs — prism palette */}
      <motion.div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#7c6cf0]/15 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-[#4fd8e8]/10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Open Book (left) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute left-6 top-13 hidden md:block"
      >
        <motion.div animate={float(0)}>
          <svg width="170" height="120" viewBox="0 0 170 120" fill="none">
            <path
              d="M85 20 C70 8 35 4 12 12 L12 96 C35 88 70 92 85 104 Z"
              fill="#ffffff"
              fillOpacity="0.18"
            />
            <path
              d="M85 20 C100 8 135 4 158 12 L158 96 C135 88 100 92 85 104 Z"
              fill="#ffffff"
              fillOpacity="0.28"
            />
            <path
              d="M85 20 L85 104"
              stroke="#ffffff"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <path
              d="M100 36 L142 30 M100 50 L142 44 M100 64 L134 59"
              stroke="#ffffff"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Quill / fountain pen (right) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="pointer-events-none absolute right-8 top-16 hidden lg:block"
      >
        <motion.div animate={float(1.2)}>
          <svg width="110" height="150" viewBox="0 0 110 150" fill="none">
            <path
              d="M92 8 L34 92 L22 118 L48 106 L98 26 Z"
              fill="#ffffff"
              fillOpacity="0.28"
            />
            <path
              d="M34 92 L22 118 L48 106 Z"
              fill="#ffffff"
              fillOpacity="0.45"
            />
            <path
              d="M18 122 Q26 128 34 122"
              stroke="#ffffff"
              strokeOpacity="0.4"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Prism spark (right lower) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
        className="pointer-events-none absolute right-16 bottom-40 hidden md:block"
      >
        <motion.svg
          width="46"
          height="46"
          viewBox="0 0 24 24"
          fill="#4fd8e8"
          animate={twinkle(0.4)}
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
        </motion.svg>
      </motion.div>

      {/* Prism spark (left lower) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.75, type: "spring" }}
        className="pointer-events-none absolute left-24 bottom-32 hidden md:block"
      >
        <motion.svg
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="#f2b84b"
          animate={twinkle(1.1)}
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
        </motion.svg>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
      >
        <motion.p
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
        >
          Prisma Press · Est. 2026
        </motion.p>

        {/* ✅ News / Premium News tab toggle */}
        <motion.div variants={item} className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md bg-white/15 p-1 backdrop-blur">
            {tabs.map((t) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className="relative rounded-md px-6 py-2.5 text-sm font-semibold"
                >
                  {active && (
                    <motion.span
                      layoutId="activeHeroTab"
                      className={`absolute inset-0 rounded-md shadow ${
                        t.key === "premium" ? "bg-[#f2b84b]" : "bg-white"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      active ? "text-slate-900" : "text-white/90"
                    }`}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ✅ Dynamic content — crossfades on tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={item}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.2 } }}
          >
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {c.heading}{" "}
              <span className="text-[#f2b84b]">{c.highlight}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
              {c.subtext}
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={c.primaryHref}
                className={`w-full rounded-md px-8 py-3.5 text-sm font-semibold shadow-2xl shadow-blue-900/20 transition sm:w-auto ${
                  tab === "premium"
                    ? "bg-[#f2b84b] text-slate-900 hover:bg-[#f5c66e]"
                    : "bg-white text-slate-900 hover:bg-white/90"
                }`}
              >
                {c.primaryCta}
              </a>
              <a
                href={c.secondaryHref}
                className="w-full rounded-md border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 sm:w-auto"
              >
                {c.secondaryCta}
              </a>
            </div>

            {/* Sub links */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold text-white">
              <a className="transition hover:underline">{c.link1}</a>
              <a className="transition hover:underline">{c.link2}</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Mascot — reading glasses on an open notebook */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
            <rect x="20" y="70" width="110" height="12" rx="2" fill="#e5e7eb" />
            <path
              d="M25 70 L75 55 L125 70 L125 78 L75 65 L25 78 Z"
              fill="#f5f2ea"
            />
            <path d="M75 55 L75 90" stroke="#c9c4de" strokeWidth="1.5" />
            <path
              d="M32 60 L68 50 M32 66 L68 56 M82 50 L118 60 M82 56 L118 66"
              stroke="#a9a4c9"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Reading glasses */}
            <circle cx="58" cy="34" r="14" stroke="#7c6cf0" strokeWidth="3" fill="none" />
            <circle cx="92" cy="34" r="14" stroke="#7c6cf0" strokeWidth="3" fill="none" />
            <path
              d="M72 34 Q75 30 78 34"
              stroke="#7c6cf0"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M44 30 L34 24 M106 30 L116 24"
              stroke="#7c6cf0"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}