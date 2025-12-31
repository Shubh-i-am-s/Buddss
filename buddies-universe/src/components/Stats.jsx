import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Videos Uploaded",
    value: 332,
    suffix: "+",
    display: "332",
    color: "#FFB703",
    icon: "🎥",
    insight: "Consistency builds long-term audience trust",
  },
  {
    label: "Followers",
    value: 178000,
    suffix: "+",
    display: "17.8K",
    color: "#A7F3D0",
    icon: "👥",
    insight: "Strong community growth through engagement",
  },
  {
    label: "Total Reached",
    value: 1000000,
    suffix: "+",
    display: "1M",
    color: "#C4B5FD",
    icon: "👁️",
    insight: "High reach driven by shareable content",
  },
];

export default function Stats() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#FFF7ED] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#374151]">
          By The{" "}
          <span className="bg-gradient-to-r from-[#FFB703] to-[#C4B5FD] bg-clip-text text-transparent">
            Numbers
          </span>
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Our impact in the food content world
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              item={item}
              isActive={activeIndex === index}
              isDimmed={activeIndex !== null && activeIndex !== index}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

function StatCard({ item, isActive, isDimmed, onHover, onLeave }) {
  const [count, setCount] = useState(item.display);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.6 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    let current = 0;
    const end = item.value;
    const duration = 1600;
    const step = Math.max(1, Math.floor(end / (duration / 16)));

    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(item.display);
        clearInterval(interval);
      } else {
        setCount(current.toLocaleString());
      }
    }, 16);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative bg-white rounded-3xl p-10 border
        transition-all duration-500 ease-out
        ${isActive ? "scale-[1.04] shadow-xl" : "shadow-md"}
        ${isDimmed ? "opacity-40" : ""}
      `}
      style={{ borderColor: `${item.color}33` }}
    >
      {/* Soft glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition"
        style={{
          background: `radial-gradient(circle at top, ${item.color}22, transparent 65%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-2xl mb-8 shadow-sm"
        style={{
          background: `linear-gradient(135deg, ${item.color}, #ffffff)`,
        }}
      >
        <span className="text-xl">{item.icon}</span>
      </div>

      {/* Number */}
      <h3
        className="text-4xl font-extrabold tracking-tight"
        style={{ color: item.color }}
      >
        {count}
        <span className="ml-1">{item.suffix}</span>
      </h3>

      {/* Insight (UNIQUE FEATURE) */}
      {isActive && (
        <p
          className="mt-3 text-sm animate-fadeIn"
          style={{ color: item.color }}
        >
          {item.insight}
        </p>
      )}

      {/* Label */}
      <p className="text-gray-500 mt-4 text-sm">
        {item.label}
      </p>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease forwards;
          }
        `}
      </style>
    </div>
  );
}