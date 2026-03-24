import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-ocean-dark pb-6 relative overflow-hidden mt-10 md:mt-20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-ocean-dark/5 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 border-r border-brand-ocean-cerulean/30 lg:pr-8">
            <div className="mb-4">
              <img src="https://shantiniketanschool.com/public/theme/assets/img/logo/logo_footer.png" alt="Shantiniketan Global School" className="h-12 md:h-16 object-contain" />
            </div>
            <p className="mb-4 text-xs leading-relaxed text-blue-100/60">
              Start Your Beautiful And Bright Future with us. Embark on a transformative Journey of Knowledge and Wisdom.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100063935985227&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-ocean-navy/5 border border-brand-ocean-cerulean/50 flex items-center justify-center text-white hover:bg-brand-ocean-dark hover:border-brand-cream transition-all duration-300 hover:-translate-y-1 group">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V7.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=7767946588" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-ocean-navy/5 border border-brand-ocean-cerulean/50 flex items-center justify-center text-white hover:bg-brand-ocean-dark hover:border-brand-cream transition-all duration-300 hover:-translate-y-1 group">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5 fill-current group-hover:text-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href="https://youtube.com/@shantiniketanschoolpune1734?si=qLmRWTaqike42eK3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-ocean-navy/5 border border-brand-ocean-cerulean/50 flex items-center justify-center text-white hover:bg-brand-ocean-dark hover:border-brand-cream transition-all duration-300 hover:-translate-y-1 group">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5 fill-current group-hover:text-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-ocean-teal"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {[{ name: 'HOME', href: '/' }, { name: 'ABOUT US', href: '/about-us' }, { name: 'CORE VALUES', href: '/core-values' }, { name: 'THE OWNER VISION', href: '/owner-vision' }, { name: 'ADMISSIONS', href: '/admissions' }].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-blue-200 hover:text-white transition-colors flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-brand-ocean-teal before:rounded-full hover:before:bg-brand-ocean-teal before:transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-ocean-teal"></span> Our Campus
            </h4>
            <ul className="space-y-3">
              {[{ name: 'WHY SHANTINIKETAN', href: '/why-us' }, { name: 'CAREERS', href: '/careers' }, { name: 'ERP LOGIN', href: '#' }, { name: 'CONTACT US', href: '/contact' }].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-blue-200 hover:text-white transition-colors flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-brand-ocean-teal before:rounded-full hover:before:bg-brand-ocean-teal before:transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-ocean-teal"></span> Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-100/60">
                <MapPin className="text-white shrink-0 mt-0.5" size={18} />
                <span>JW26+RQV, Kutwal Colony, Lohegaon, Pune</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100/60">
                <Phone className="text-white shrink-0" size={18} />
                <span>77679 46588</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100/60">
                <Mail className="text-white shrink-0" size={18} />
                <span>shantiniketanuniqueschool@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-ocean-cerulean/50 text-center md:flex md:justify-between md:items-center text-sm text-blue-100">
          <p>
            &copy; {currentYear} Shantiniketan Global School. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
