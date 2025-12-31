import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer */}
      <div className="h-[72px]" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-[#FFF7ED] shadow-md backdrop-blur-0"
            : `
              bg-white/20 
              backdrop-blur-[20px]
              border-b border-white/30
              shadow-[0_8px_32px_rgba(0,0,0,0.15)]
            `
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FFB703] via-[#C4B5FD] to-[#A7F3D0]
              flex items-center justify-center font-extrabold text-[#374151]">
              BU
            </div>

            <h1 className="text-xl font-bold text-[#374151]">
              Buddies
              <span className="text-[#FFB703]">Universe</span>
            </h1>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-[#374151]">
            {["Home", "About","Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative transition hover:text-[#FFB703]"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#C4B5FD] scale-x-0 hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            className="px-5 py-2 rounded-lg font-semibold border-2 border-[#FFB703]
            text-[#FFB703] hover:bg-[#FFB703] hover:text-[#374151]
            transition-all duration-300"
          >
           <a href="https://github.com/Shubh-i-am-s/Buddies-Universe-Website  ">See Work</a>
          </button>
        </div>
      </header>
    </>
  );
}