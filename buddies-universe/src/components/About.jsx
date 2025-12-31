export default function About() {
  return (
    <section className="relative bg-[#FFF7ED] py-32 overflow-hidden">
      
      {/* Floating Food Icons */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <span className="food-float left-[10%] top-[20%]">🍕</span>
  <span className="food-float left-[80%] top-[25%] delay-2000">🍔</span>
  <span className="food-float left-[20%] top-[70%] delay-4000">🍩</span>
  <span className="food-float left-[70%] top-[75%] delay-6000">🌮</span>
</div>

      {/* BIG BACKGROUND TEXT (DEPTH) */}
      <h2 className="absolute top-20 left-1/2 -translate-x-1/2 text-[120px] font-extrabold text-[#374151]/5 select-none pointer-events-none">
        BUDDIES
      </h2>

      {/* Moving Gradient Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FFB703]/30 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C4B5FD]/30 rounded-full blur-[120px] animate-blob delay-2000" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#374151] animate-reveal">
            About{" "}
            <span className="text-[#FFB703]">Buddies</span>{" "}
            <span className="text-[#C4B5FD]">Universe</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto animate-fadeSlow">
            Two friends building more than a community — a universe where
            learning feels exciting, collaborative, and real.
          </p>
        </div>

        {/* CARDS – STAGGERED + OFFSET */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-6 transition-all duration-500">
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFB703] to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#FFB703] flex items-center justify-center text-2xl mb-6 animate-iconPop">
                ❤️
              </div>
              <h3 className="text-xl font-semibold text-[#374151]">
                Our Passion
              </h3>
              <p className="mt-4 text-gray-600 text-sm">
                The idea is that people should get hygienic food within their budget, and according to their requirements.
              </p>
            </div>
          </div>

          {/* Card 2 (raised by default) */}
          <div className="group relative bg-white rounded-3xl p-10 shadow-2xl -translate-y-8 hover:-translate-y-14 transition-all duration-500">
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C4B5FD] to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#C4B5FD] flex items-center justify-center text-2xl mb-6 animate-iconPop">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-[#374151]">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 text-sm">
                We find them a place that meets all their needs, along with providing honest reviews.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-6 transition-all duration-500">
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A7F3D0] to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#A7F3D0] flex items-center justify-center text-2xl mb-6 animate-iconPop">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-[#374151]">
                Our Journey
              </h3>
              <p className="mt-4 text-gray-600 text-sm">
                What started as two buddies chasing flavors through Mumbai’s streets evolved into a universe— where hidden food spots meet storytelling, culture, and craft.
              </p>
            </div>
          </div>

        </div>

        {/* STORY – SPLIT LAYOUT */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left animate-slideLeft">
            <h3 className="text-3xl font-bold text-[#374151]">
              Why Buddies Universe?
            </h3>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We don’t just review food—we explore it like you would. Every place we share is tried, trusted, and worth your time and money.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl animate-slideRight">
            <p className="text-gray-600 leading-relaxed">
               If you love discovering honest, hidden food spots before they go mainstream, you’re already part of our journey.
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-40px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }

        @keyframes reveal {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlow {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes iconPop {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-blob {
          animation: blob 14s infinite ease-in-out;
        }
        .animate-reveal {
          animation: reveal 1s ease forwards;
        }
        .animate-fadeSlow {
          animation: fadeSlow 1.5s ease forwards;
        }
        .animate-iconPop {
          animation: iconPop 0.6s ease forwards;
        }
        .animate-slideLeft {
          animation: slideLeft 1s ease forwards;
        }
        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }
        .food-float {
         position: absolute;
          font-size: 42px;
          opacity: 0.12;
         filter: blur(0.5px);
         animation: floatFood 14s infinite ease-in-out;
         }

          @keyframes floatFood {
          0% {
                 transform: translateY(0) rotate(0deg);
              }
          50% {
                  transform: translateY(-40px) rotate(10deg);
              }
          100% {
                  transform: translateY(0) rotate(0deg);
                 }
 }

        `}
      </style>
    </section>
  );
}