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
  Mail,
  Send,
  Shield,
  FileText,
  HelpCircle,
  MessageSquare,
  TrendingUp,
  Star,
  Flag,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      // Simulate newsletter subscription
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
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
      title: "Navigation",
      links: [
        {
          name: "Home",
          href: "/",
          icon: Mic,
          iconColor: "text-purple-500 group-hover:text-purple-400",
          hover: "hover:text-purple-500",
        },
        {
          name: "About Us",
          href: "/about",
          icon: Smile,
          iconColor: "text-blue-400 group-hover:text-blue-300",
          hover: "hover:text-blue-400",
        },
        {
          name: "Watchlist",
          href: "/watchlist",
          icon: Book,
          iconColor: "text-pink-300 group-hover:text-pink-200",
          hover: "hover:text-pink-300",
        },
         {
          name: "Contact Us",
          href: "/ContactUs",
          icon: Phone,
          iconColor: "text-blue-400 group-hover:text-blue-300",
          hover: "hover:text-blue-400",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        {
          name: "Privacy Policy",
          href: "/privacy",
          icon: Shield,
          iconColor: "text-green-400 group-hover:text-green-300",
          hover: "hover:text-green-400",
        },
        {
          name: "Terms of Service",
          href: "/terms",
          icon: FileText,
          iconColor: "text-yellow-400 group-hover:text-yellow-300",
          hover: "hover:text-yellow-400",
        },
        {
          name: "FAQ",
          href: "/faq",
          icon: HelpCircle,
          iconColor: "text-cyan-400 group-hover:text-cyan-300",
          hover: "hover:text-cyan-400",
        },
        {
          name: "Contact Us",
          href: "/contact",
          icon: Phone,
          iconColor: "text-indigo-400 group-hover:text-indigo-300",
          hover: "hover:text-indigo-400",
        },
      ],
    },
    {
      title: "Popular Anime",
      links: [
        {
          name: "Attack on Titan",
          href: "/anime/attack-on-titan",
          icon: Star,
          iconColor: "text-orange-400 group-hover:text-orange-300",
          hover: "hover:text-orange-400",
        },
        {
          name: "Demon Slayer",
          href: "/anime/demon-slayer",
          icon: TrendingUp,
          iconColor: "text-red-400 group-hover:text-red-300",
          hover: "hover:text-red-400",
        },
        {
          name: "One Piece",
          href: "/anime/one-piece",
          icon: Star,
          iconColor: "text-blue-400 group-hover:text-blue-300",
          hover: "hover:text-blue-400",
        },
        {
          name: "Jujutsu Kaisen",
          href: "/anime/jujutsu-kaisen",
          icon: TrendingUp,
          iconColor: "text-purple-400 group-hover:text-purple-300",
          hover: "hover:text-purple-400",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          name: "Give Feedback",
          href: "/feedback",
          icon: MessageSquare,
          iconColor: "text-emerald-400 group-hover:text-emerald-300",
          hover: "hover:text-emerald-400",
        },
        {
          name: "Report Issue",
          href: "/report",
          icon: Flag,
          iconColor: "text-rose-400 group-hover:text-rose-300",
          hover: "hover:text-rose-400",
        },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-800/20">
            <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stay Updated with Anime Ecstasy
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Get the latest anime news, reviews, and recommendations delivered
              straight to your inbox.
            </p>

            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2 text-green-400 font-medium">
                <Send className="w-5 h-5" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
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
                  className={`transition-colors duration-200 ${social.color} hover:scale-110 transform`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-gray-300 transition-all duration-200 flex items-center gap-2 group ${link.hover} hover:translate-x-1`}
                    >
                      <link.icon
                        className={`w-4 h-4 ${link.iconColor} transition-colors duration-200`}
                      />
                      <span className="text-sm">{link.name}</span>
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
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>
                by{" "}
                <a
                  href="https://github.com/Chandu6702/Anime-Ecstasy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-100 transition-colors hover:underline"
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
          className="fixed bottom-20 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-200 hover:scale-110"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
