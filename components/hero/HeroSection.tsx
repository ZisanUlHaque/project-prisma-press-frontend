import HeroMotion from "./HeroMotion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1f6feb] via-[#3b82f6] to-[#60a5fa] pt-22 pb-56">
      {/* Static wavy background layers */}
      <svg
        className="absolute inset-x-0 top-0 h-full w-full opacity-30"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,200 C300,320 600,80 900,220 C1200,360 1320,180 1440,240 L1440,800 L0,800 Z"
          fill="#ffffff"
          fillOpacity="0.08"
        />
        <path
          d="M0,400 C300,520 700,300 1000,420 C1200,500 1320,380 1440,440 L1440,800 L0,800 Z"
          fill="#ffffff"
          fillOpacity="0.12"
        />
      </svg>

      {/* Bottom white wave */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,120 C240,20 480,220 720,140 C960,60 1200,180 1440,100 L1440,220 L0,220 Z"
          fill="#ffffff"
        />
      </svg>

      {/* All animated content */}
      <HeroMotion />
    </section>
  );
}