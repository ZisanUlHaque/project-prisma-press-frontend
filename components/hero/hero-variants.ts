import type { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const float = (delay = 0) => ({
  y: [0, -14, 0],
  rotate: [0, 2, -2, 0],
  transition: {
    duration: 6,
    delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});

export const twinkle = (delay = 0) => ({
  scale: [1, 1.25, 1],
  rotate: [0, 18, 0],
  opacity: [0.85, 1, 0.85],
  transition: {
    duration: 3.5,
    delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});