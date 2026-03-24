import logoImage from '../assets/image copy 2.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

export default function Logo({ className = "h-12", showText = true, variant = 'color' }: LogoProps) {
  const accentColor = '#B58E31';
  const textColor = variant === 'light' ? '#FFFFFF' : '#ffffff';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImage}
        alt="Santhinikethan Global School Logo"
        className="h-full w-auto drop-shadow-lg object-contain"
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-black text-lg md:text-xl tracking-tighter"
            style={{ color: textColor, fontFamily: 'Outfit, sans-serif' }}
          >
            SANTHINIKETHAN
          </span>
          <span
            className="font-bold text-xs md:text-sm tracking-[0.2em]"
            style={{ color: accentColor, fontFamily: 'Outfit, sans-serif' }}
          >
            GLOBAL SCHOOL
          </span>
        </div>
      )}
    </div>
  );
}
