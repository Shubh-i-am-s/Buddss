import alexImg from "../assets/leaders/alex.png";
import samImg from "../assets/leaders/sam.png";

export default function Leadership() {
  const leaders = [
    {
      name: "Kirti",
      role: "CFO & Creative Lead",
      desc: "Visionary behind Buddies Universe, passionate about storytelling, food culture, and building authentic connections through flavours.",
      image: alexImg,
      tags: ["@cfo_kirti", "bole_to_media"],
    },
    {
      name: "Akash",
      role: "CEO & Founder",
      desc: "Driving operations and creative direction, capturing the soul of every journey through cinematic visuals and strategy.",
      image: samImg,
      tags: ["@ceo_akash", "bole_to_media"],
    },
  ];

  return (
    <section className="bg-canvas py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-textPrimary">
            Meet the <span className="text-brandDark">Leadership</span>
          </h2>
          <p className="mt-4 text-brandMid text-sm">
            The minds and hearts behind Buddies Universe
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[1fr_220px] gap-6 
              bg-white/70 backdrop-blur-md 
              border border-brandLight/40 
              rounded-3xl p-8
              transition-all duration-500 
              hover:shadow-2xl hover:-translate-y-1"
            >

              {/* Text Section */}
              <div>
                <h3 className="text-xl font-semibold text-textPrimary">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-brandDark mt-1">
                  {leader.role}
                </p>

                <p className="mt-4 text-sm text-brandMid leading-relaxed max-w-xl">
                  {leader.desc}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {leader.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-xs rounded-full 
                      border border-brandLight 
                      text-brandDark 
                      bg-white
                      transition hover:bg-brandLight/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Section */}
<div className="flex items-center justify-center">
  <div
    className="relative w-full h-56 rounded-2xl 
    bg-gradient-to-br from-[#FFB703]/20 via-[#C4B5FD]/20 to-[#A7F3D0]/20
    overflow-hidden"
  >
    <img
      src={leader.image}
      alt={leader.name}
      className="w-full h-full object-cover object-center"
    />
  </div>
</div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}