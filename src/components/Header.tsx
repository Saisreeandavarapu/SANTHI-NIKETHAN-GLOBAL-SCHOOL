import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const NAV_LINKS = [
  { name: 'HOME', href: '/' },
  {
    name: 'ABOUT US',
    href: '/about-us',
    sublinks: [
      { name: 'CORE VALUES', href: '/core-values' },
      { name: 'THE OWNER VISION', href: '/owner-vision' },
      { name: 'WHY SHANTINIKETAN', href: '/why-us' },
    ],
  },
  { name: 'ADMISSIONS', href: '/admissions' },
  { name: 'CAREERS', href: '/careers' },
  { name: 'SERVICES', href: '/#services' },
  { name: 'CONTACT US', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const showSolidHeader = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Handle clicks for hash anchor links (e.g. /#services)
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.includes('#')) return; // normal links handled by <Link>
    e.preventDefault();
    const hash = href.split('#')[1];
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for home page to mount, then scroll
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${showSolidHeader ? 'bg-brand-primary/95 backdrop-blur-xl border-white/10 shadow-lg py-3' : 'bg-transparent border-white/5 py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="focus:outline-none">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <Logo
              className="h-12 md:h-14"
              variant={showSolidHeader ? 'color' : 'light'}
            />
          </motion.div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => {
            const isActive = location.pathname === link.href || (link.sublinks && link.sublinks.some(s => s.href === location.pathname));
            return (
              <motion.div key={link.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative group py-4">
                <Link
                  to={link.href.includes('#') ? '/' : link.href}
                  onClick={(e) => link.href.includes('#') ? handleNavClick(e, link.href) : closeMenu()}
                  className={`text-sm font-bold tracking-wider transition-all flex items-center gap-1 relative ${isActive ? 'text-brand-accent' : 'text-zinc-100 hover:text-brand-accent'}`}
                >
                  {link.name}
                  {link.sublinks && <ChevronDown size={14} className={`group-hover:rotate-180 transition-transform duration-300 ${isActive ? 'text-brand-accent' : ''}`} />}

                  {/* Hover/Active Underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
                {link.sublinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-brand-primary/98 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="py-2">
                      {link.sublinks.map((sublink) => {
                        const isSubActive = location.pathname === sublink.href;
                        return (
                          <Link key={sublink.name} to={sublink.href} className={`block px-5 py-3 text-sm font-bold transition-all ${isSubActive ? 'text-brand-accent bg-white/5' : 'text-zinc-200 hover:text-white hover:bg-white/5'}`}>
                            {sublink.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
          <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className={`px-6 py-2.5 rounded-full font-extrabold text-sm tracking-widest transition-all shadow-xl hover:shadow-brand-accent/20 hover:scale-105 active:scale-95 ${showSolidHeader ? 'bg-brand-accent text-white hover:brightness-110' : 'bg-white/10 text-white backdrop-blur-md hover:bg-white/20'}`}>
            ADMISSIONS OPEN
          </motion.button>
        </nav>
        <button className={`lg:hidden p-2 rounded-lg transition-colors text-white`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden bg-brand-primary/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden shadow-2xl">
            <div className="container mx-auto px-4 py-8 flex flex-col gap-5">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href || (link.sublinks && link.sublinks.some(s => s.href === location.pathname));
                return (
                  <div key={link.name} className="flex flex-col border-b border-white/5 pb-4">
                    <Link
                      to={link.href.includes('#') ? '/' : link.href}
                      onClick={(e) => link.href.includes('#') ? handleNavClick(e, link.href) : closeMenu()}
                      className={`text-lg font-extrabold w-full transition-colors ${isActive ? 'text-brand-accent' : 'text-zinc-100'}`}
                    >
                      {link.name}
                    </Link>
                    {link.sublinks && (
                      <div className="pl-4 mt-3 flex flex-col gap-3 border-l-2 border-brand-accent/30">
                        {link.sublinks.map((sublink) => {
                          const isSubActive = location.pathname === sublink.href;
                          return (
                            <Link key={sublink.name} to={sublink.href} onClick={closeMenu} className={`py-1 transition-colors font-semibold ${isSubActive ? 'text-brand-accent' : 'text-zinc-300 hover:text-white'}`}>
                              {sublink.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <button onClick={closeMenu} className="mt-4 px-6 py-4 bg-brand-accent hover:brightness-110 text-white rounded-2xl font-black tracking-widest text-center shadow-xl transition-all active:scale-95">
                ADMISSIONS OPEN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
