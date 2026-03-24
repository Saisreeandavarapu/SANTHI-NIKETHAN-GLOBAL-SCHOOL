import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
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
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const showSolidHeader = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileAccordion(null);
  };

  // Handle hash anchor links (e.g. /#services)
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.includes('#')) return;
    e.preventDefault();
    const hash = href.split('#')[1];
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion(prev => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        showSolidHeader
          ? 'bg-brand-primary/95 backdrop-blur-xl border-white/10 shadow-lg py-3'
          : 'bg-transparent border-white/5 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="focus:outline-none z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo className="h-12 md:h-14" variant={showSolidHeader ? 'color' : 'light'} />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => {
            const isActive =
              location.pathname === link.href ||
              (link.sublinks && link.sublinks.some(s => s.href === location.pathname));
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group py-4"
              >
                <Link
                  to={link.href.includes('#') ? '/' : link.href}
                  onClick={e => (link.href.includes('#') ? handleNavClick(e, link.href) : undefined)}
                  className={`text-sm font-bold tracking-wider transition-all flex items-center gap-1 relative ${
                    isActive ? 'text-brand-accent' : 'text-zinc-100 hover:text-brand-accent'
                  }`}
                >
                  {link.name}
                  {link.sublinks && (
                    <ChevronDown
                      size={14}
                      className={`group-hover:rotate-180 transition-transform duration-300 ${isActive ? 'text-brand-accent' : ''}`}
                    />
                  )}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
                {link.sublinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-brand-primary/98 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="py-2">
                      {link.sublinks.map(sublink => {
                        const isSubActive = location.pathname === sublink.href;
                        return (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            className={`block px-5 py-3 text-sm font-bold transition-all ${
                              isSubActive
                                ? 'text-brand-accent bg-white/5'
                                : 'text-zinc-200 hover:text-white hover:bg-white/5'
                            }`}
                          >
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/admissions"
              className={`px-6 py-2.5 rounded-full font-extrabold text-sm tracking-widest transition-all shadow-xl hover:shadow-brand-accent/20 hover:scale-105 active:scale-95 inline-block ${
                showSolidHeader
                  ? 'bg-brand-accent text-white hover:brightness-110'
                  : 'bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
              }`}
            >
              ADMISSIONS OPEN
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors text-white z-10"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-primary/98 backdrop-blur-2xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.sublinks && link.sublinks.some(s => s.href === location.pathname));
                const isAccordionOpen = mobileAccordion === link.name;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className="border-b border-white/5"
                  >
                    {/* Parent link row */}
                    {link.sublinks ? (
                      // Has sublinks → accordion toggle (no direct navigation)
                      <button
                        onClick={() => toggleMobileAccordion(link.name)}
                        className={`w-full flex items-center justify-between py-4 text-base font-extrabold tracking-wide transition-colors ${
                          isActive ? 'text-brand-accent' : 'text-zinc-100'
                        }`}
                      >
                        <span>{link.name}</span>
                        <motion.span
                          animate={{ rotate: isAccordionOpen ? 90 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronRight size={18} />
                        </motion.span>
                      </button>
                    ) : link.href.includes('#') ? (
                      // Hash link
                      <button
                        onClick={e => {
                          handleNavClick(e as React.MouseEvent<HTMLButtonElement>, link.href);
                        }}
                        className={`w-full text-left py-4 text-base font-extrabold tracking-wide transition-colors ${
                          isActive ? 'text-brand-accent' : 'text-zinc-100 active:text-brand-accent'
                        }`}
                      >
                        {link.name}
                      </button>
                    ) : (
                      // Normal link
                      <Link
                        to={link.href}
                        onClick={closeMenu}
                        className={`block py-4 text-base font-extrabold tracking-wide transition-colors ${
                          isActive ? 'text-brand-accent' : 'text-zinc-100 active:text-brand-accent'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}

                    {/* Sublinks accordion */}
                    <AnimatePresence initial={false}>
                      {link.sublinks && isAccordionOpen && (
                        <motion.div
                          key="sublinks"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-3 flex flex-col gap-1 border-l-2 border-brand-accent/40 ml-2 mb-2">
                            {link.sublinks.map(sublink => {
                              const isSubActive = location.pathname === sublink.href;
                              return (
                                <Link
                                  key={sublink.name}
                                  to={sublink.href}
                                  onClick={closeMenu}
                                  className={`py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                                    isSubActive
                                      ? 'text-brand-accent bg-white/5'
                                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                                  }`}
                                >
                                  {sublink.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-4"
              >
                <Link
                  to="/admissions"
                  onClick={closeMenu}
                  className="block w-full px-6 py-4 bg-brand-accent hover:brightness-110 text-white rounded-2xl font-black tracking-widest text-center shadow-xl transition-all active:scale-95"
                >
                  ADMISSIONS OPEN
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
