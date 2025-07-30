import {
  Home,
  Eye,
  Info,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
  Heart,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";

function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
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

  return (
    <footer className="bg-gray-900 text-white py-6 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-400"><Github /></a>
          <a href="#" className="hover:text-blue-400"><Twitter /></a>
          <a href="#" className="hover:text-blue-400"><Linkedin /></a>
          <a href="#" className="hover:text-blue-400"><Instagram /></a>
        </div>
        <div className="text-center text-sm">
          © 2025 Anime Ecstasy. Built with <Heart className="inline text-red-500" />.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><Home /></a>
          <a href="#" className="hover:text-blue-400"><Eye /></a>
          <a href="#" className="hover:text-blue-400"><Info /></a>
        </div>
      </div>

      {showScrollToTop && (
        <button
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <ChevronUp />
        </button>
      )}
    </footer>
  );
}

export default Footer;
