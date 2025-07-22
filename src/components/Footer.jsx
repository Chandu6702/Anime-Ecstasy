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

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Watchlist', icon: Eye, href: '/watchlist' },
    { name: 'About', icon: Info, href: '#' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-300' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-300' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
  ];

  return (
    <>
      <footer className="bg-black backdrop-blur-md border-t border-white/10 text-white relative overflow-hidden transition-all duration-800 
      hover:bg-gradient-to-br hover:from-black hover:via-gray-900 hover:to-blue-900 group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-blue-900/20 transition-all duration-800"></div>
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-0 transition-opacity duration-700">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      
 
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="md:col-span-1">
              <div className="mb-8">
                <h3 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-700">
                  Anime-Ecstasy
                </h3>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  Discover the best anime watchlists and explore your next favorite series. Your ultimate destination for anime recommendations and community-driven content.
                </p>
              </div>
              
              <div className="flex space-x-5">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-blue-500/20 ${social.color} group-hover:bg-white/15`}
                      title={social.name}
                    >
                      <IconComponent className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
            
                <span className="group-hover:text-blue-200 transition-colors duration-500">Navigation</span>
              </h4>
              <ul className="space-y-4">
                {navigationLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group/link hover:translate-x-2 hover:bg-white/5 rounded-lg p-3 -m-3 backdrop-blur-sm"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover/link:from-blue-500/30 group-hover/link:to-purple-500/30 transition-all duration-300">
                          <IconComponent className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="font-medium">{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-all duration-300 ml-auto" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-12 group-hover:via-blue-400/40 transition-all duration-700"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-gray-300 text-10 group-hover:text-gray-200 transition-colors duration-500">
              <span> Copyright ©{currentYear}  </span>
            
            </div>
            
         
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-14 h-14
             bg-black/70 backdrop-blur-md border border-white/20
              text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform transition-all duration-300
               flex items-center justify-center group/scroll hover:bg-gradient-to-br
                hover:from-black hover:to-blue-900 hover:border-blue-400/30 ${
            showScrollToTop 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
          }`}
          title="Back to top"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-9 h-9 transition-all duration-300 group-hover/scroll:-translate-y-1 group-hover/scroll:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 
          rounded-2xl blur opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="absolute top-16 right-16 w-24 h-24
         bg-purple-500/10 rounded-full blur-xl animate-pulse 
         group-hover:bg-blue-500/15 transition-all duration-700">
         </div>
        <div className="absolute bottom-16 left-16 w-40 h-40
         bg-pink-500/10 rounded-full blur-xl animate-pulse 
         group-hover:bg-blue-500/15 transition-all duration-700" style={{ animationDelay: '3s' }}>
         </div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16
         bg-blue-500/5 rounded-full blur-lg animate-pulse
          group-hover:bg-purple-500/10 transition-all duration-700" style={{ animationDelay: '7s' }}>
          </div>
      </footer>
    </>
  );
}