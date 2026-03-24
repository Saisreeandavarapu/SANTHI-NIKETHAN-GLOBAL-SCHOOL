

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

export default function Logo({ className = "h-12", showText = true, variant = 'color' }: LogoProps) {
  const primaryColor = variant === 'light' ? '#FFFFFF' : '#313C52';
  const accentColor = '#B58E31';
  const textColor = variant === 'light' ? '#FFFFFF' : '#313C52';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-lg"
      >
        {/* Diamond Shape */}
        <path
          d="M50 5L95 50L50 95L5 50L50 5Z"
          fill={primaryColor}
          stroke={accentColor}
          strokeWidth="2"
        />
        
        {/* Book Icon */}
        <path
          d="M35 45C35 42 38 40 42 40H50V65H42C38 65 35 63 35 60V45Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M65 45C65 42 62 40 58 40H50V65H58C62 65 65 63 65 60V45Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M50 40L50 65"
          stroke={accentColor}
          strokeWidth="1.5"
        />
        
        {/* Graduation Cap detail or additional flare */}
        <circle cx="50" cy="35" r="3" fill={accentColor} />
      </svg>
      
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
