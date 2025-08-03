import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mic,
  Book,
  Smile,
  Heart,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
      color: "hover:text-pink-400 text-gray-200",
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
      color: "hover:text-gray-300 text-gray-200",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
      color: "hover:text-blue-400 text-gray-200",
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
      color: "hover:text-sky-400 text-gray-200",
    },
  ];

  const footerLinks = [
    {
      title: "Site",
      links: [
        {
          name: "Home",
          href: "/",
          icon: Mic,
          iconColor: "text-purple-500 group-hover:text-purple-400",
          hover: "hover:text-purple-500",
        },
        {
          name: "Watchlist",
          href: "/watchlist",
          icon: Book,
          iconColor: "text-pink-300 group-hover:text-pink-200",
          hover: "hover:text-pink-300",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          name: "About Us",
          href: "/about",
          icon: Smile,
          iconColor: "text-blue-400 group-hover:text-blue-300",
          hover: "hover:text-blue-400",
        },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Anime Ecstasy
            </h2>
            <p className="mt-4 text-white/80 max-w-md">
              Anime Ecstasy is your go-to anime rating and review platform.
              Discover new shows, read in-depth reviews, and share your opinions
              with fellow fans.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-gray-200 transition-colors duration-200 flex items-center gap-2 group ${link.hover}`}
                    >
                      <link.icon className={`w-4 h-4 ${link.iconColor}`} />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-sm text-white/60">
              <p>© {currentYear} Anime Ecstasy. All rights reserved.</p>
            </div>
            <div className="flex items-center text-sm text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>
                by{" "}
                <a
                  href="https://github.com/Chandu6702/Anime-Ecstasy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-100 transition-colors"
                >
                  Team
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollToTop && (
        <button
          className="fixed bottom-20 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <ChevronUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
