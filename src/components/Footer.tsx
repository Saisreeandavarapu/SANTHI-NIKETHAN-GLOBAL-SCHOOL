import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary pb-10 relative overflow-hidden mt-10 md:mt-20 border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:pr-8">
            <div className="mb-6">
              <Logo className="h-14" variant="light" />
            </div>
            <p className="mb-8 text-sm leading-relaxed text-zinc-400 font-medium">
              Start your beautiful and bright future with us. Embark on a transformative journey of knowledge and wisdom in a premium environment.
            </p>
            <div className="flex gap-4">
              {[
                { 
                  name: 'Facebook', 
                  href: "https://www.facebook.com/profile.php?id=100063935985227&mibextid=wwXIfr",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V7.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )
                },
                { 
                  name: 'WhatsApp', 
                  href: "https://api.whatsapp.com/send?phone=7767946588",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )
                },
                { 
                  name: 'YouTube', 
                  href: "https://youtube.com/@shantiniketanschoolpune1734?si=qLmRWTaqike42eK3",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent shadow-lg transition-all duration-500 hover:-translate-y-1.5 group"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-black text-lg mb-8 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent shadow-lg shadow-brand-accent/50"></span> Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'HOME', href: '/' }, 
                { name: 'ABOUT US', href: '/about-us' }, 
                { name: 'CORE VALUES', href: '/core-values' }, 
                { name: 'OWNER VISION', href: '/owner-vision' }, 
                { name: 'ADMISSIONS', href: '/admissions' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-zinc-400 hover:text-brand-accent transition-all duration-300 flex items-center gap-3 font-semibold group">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-brand-accent transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-black text-lg mb-8 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent shadow-lg shadow-brand-accent/50"></span> Our Campus
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'WHY SHANTINIKETAN', href: '/why-us' }, 
                { name: 'CAREERS', href: '/careers' }, 
                { name: 'ERP LOGIN', href: '#' }, 
                { name: 'CONTACT US', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-zinc-400 hover:text-brand-accent transition-all duration-300 flex items-center gap-3 font-semibold group">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-brand-accent transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-black text-lg mb-8 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent shadow-lg shadow-brand-accent/50"></span> Contact Info
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-400 font-medium group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <span className="leading-snug pt-2">JW26+RQV, Kutwal Colony, Lohegaon, Pune</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-400 font-medium group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <span>+91 77679 46588</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-400 font-medium group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <span className="break-all font-semibold">shantiniketanuniqueschool@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-zinc-500">
          <p className="order-2 md:order-1">
            &copy; {currentYear} Shantiniketan Global School. All rights reserved.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
