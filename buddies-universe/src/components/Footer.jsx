import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF7ED] border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-[#374151]">
            Buddies
            <span className="text-[#FFB703]">Universe</span>
          </h3>

          <p className="mt-3 text-sm max-w-sm text-[#374151]">
            A student-first community focused on learning, growth,
            and collaboration.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-xl">
            {[
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/buddiesuniverse_/",
                label: "Instagram",
              },
              {
                icon: <FaYoutube />,
                link: "https://www.youtube.com/@BuddiesUniverse",
                label: "YouTube",
              },
              {
                icon: <FaTwitter />,
                link: "#",
                label: "Twitter",
              },
              {
                icon: <FaFacebook />,
                link: "#",
                label: "Facebook",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-[#374151] transition transform hover:text-[#FFB703] hover:-translate-y-1"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-[#374151]">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            {["Home", "About", "Contact Us", "Channels"].map((item) => (
              <li
                key={item}
                className="text-[#374151] cursor-pointer transition hover:text-[#A7F3D0] hover:translate-x-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-[#374151]">
            Contact
          </h4>

          <p className="text-sm text-[#374151]">
            buddiesvlogs1104@gmail.com
          </p>

          <p className="text-sm mt-1 text-[#374151]">
            Mumbai, India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 text-[#374151] bg-[#FFF7ED]">
        © 2025 Buddies Universe. All rights reserved.
      </div>
    </footer>
  );
}
