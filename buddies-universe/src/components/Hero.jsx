export default function Hero() {
  const instagramUrl =
    "https://www.instagram.com/buddiesuniverse_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/djxaxl1zk/image/upload/v1767179902/BU_yxfmwx.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "zoomBg 20s ease-in-out infinite",
      }}
    >
      {/* Dark food overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Floating food glows */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#FFB703]/30 rounded-full blur-3xl animate-floatSlow" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-[#A7F3D0]/30 rounded-full blur-3xl animate-floatSlow delay-2000" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl text-white">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block animate-slideUp">Two Buddies.</span>
            <span className="block animate-slideUp delay-200">
              <span className="text-[#FFB703]">Unlimited</span> Flavours
            </span>
            <span className="block animate-slideUp delay-400">
              and One Universal Journey.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/90 animate-fadeIn delay-700">
            Exploring food, stories, and culture — one plate, one place,
            one unforgettable experience at a time.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fadeIn delay-1000">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg font-semibold bg-[#FFB703] text-[#374151] hover:scale-110 transition-all duration-300 shadow-lg animate-pulse"
            >
              🍔 Explore Videos
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg font-medium border-2 border-[#A7F3D0] text-white hover:bg-[#A7F3D0] hover:text-[#374151] hover:scale-110 transition-all duration-300"
            >
              🤝 Collaborate With Us
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes zoomBg {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0px); }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }
        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
}