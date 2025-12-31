import { useEffect, useRef, useState } from "react";

/* ------------------ TIMELINE DATA ------------------ */
const timeline = [
  {
    year: "2023",
    title: "Channel Launch",
    desc: "Started Buddies Universal with our first food review video",
  },
  {
    year: "2024",
    title: "First Viral Video",
    desc: "Street Food Mumbai video crossed 1M views",
  },
  {
    year: "2024",
    title: "10K Followers Milestone",
    desc: "Reached 10,000+ loyal Followers across platforms",
  },
  {
    year: "2025",
    title: "Major Brand Collaboration",
    desc: "Partnered with Sbarro-New York Pizza",
  },
  {
    year: "2025",
    title: "2 Major Brand Collaboration",
    desc: "Partnered with Biggies Burger-Variety in Menu",
  },
];

/* ------------------ SCROLL REVEAL HOOK ------------------ */
function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, show];
}

/* ------------------ COMPONENT ------------------ */
export default function Journey() {
  return (
    <section className="bg-[#FFF7ED] py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#374151]">
          Our{" "}
          <span className="bg-gradient-to-r from-[#FFB703] to-[#C4B5FD] bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Milestones that shaped our food adventure
        </p>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Center Line (Grow Animation) */}
          <div
            className="absolute left-1/2 top-0 h-full w-[3px]
            -translate-x-1/2 origin-top scale-y-0
            bg-gradient-to-b from-[#FFB703] via-[#C4B5FD] to-[#A7F3D0]
            animate-[grow_1.2s_ease-out_forwards]"
          />

          {/* Items */}
          <div className="space-y-14">
            {timeline.map((item, index) => {
              const [ref, show] = useReveal();

              return (
                <div
                  ref={ref}
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`relative w-full md:w-[45%]
                      bg-white/80 backdrop-blur-xl
                      rounded-2xl p-6
                      border border-[#FFB703]/30
                      shadow-lg
                      transition-all duration-700 ease-out
                      hover:-translate-y-3 hover:rotate-[0.6deg]
                      hover:shadow-2xl
                      ${
                        show
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-12"
                      }
                    `}
                  >
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0
                      hover:opacity-100 transition
                      bg-[radial-gradient(circle_at_top,#FFB70333,transparent_65%)]"
                    />

                    {/* Year */}
                    <span
                      className="inline-block mb-3 px-4 py-1 text-sm font-semibold rounded-full
                      bg-gradient-to-r from-[#FFB703] to-[#C4B5FD]
                      text-white animate-[float_3s_ease-in-out_infinite]"
                    >
                      {item.year}
                    </span>

                    <h3 className="text-lg font-semibold text-[#374151]">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Dot + Ripple */}
                  <span className="absolute left-1/2 top-6 -translate-x-1/2">
                    <span
                      className="absolute w-8 h-8 rounded-full
                      bg-[#FFB703]/30 animate-ping"
                    />
                    <span
                      className="relative w-4 h-4 rounded-full block
                      bg-[#FFB703] shadow-md
                      transition-transform duration-300
                      hover:scale-125"
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes grow {
          to {
            transform: translateX(-50%) scaleY(1);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
