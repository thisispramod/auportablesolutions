import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'symbol' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLink?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showLink = true,
}) => {
  // Height configurations
  const heightMap = {
    sm: variant === 'stacked' ? '46px' : '36px',
    md: variant === 'stacked' ? '60px' : '44px',
    lg: variant === 'stacked' ? '76px' : '54px',
    xl: variant === 'stacked' ? '96px' : '64px',
  };

  const isWhite = variant === 'white';

  const logoContent = (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
        lineHeight: 1,
      }}
    >
      {/* High-fidelity Logo Render */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/assets/logo-stacked.png"
          alt="AU Portable Solutions Logo"
          style={{
            height: heightMap[size],
            width: 'auto',
            objectFit: 'contain',
            filter: isWhite ? 'brightness(0) invert(1)' : 'none',
            display: 'block',
          }}
          onError={(e) => {
            // In case of image issue, fall back to pure SVG
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.nextElementSibling) {
              (target.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />

        {/* Scalable SVG Fallback */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.625rem',
          }}
        >
          <svg
            viewBox="0 0 140 100"
            style={{ height: heightMap[size], width: 'auto' }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 'A' with Gable roof and 4 window panes */}
            <path
              d="M10 85L50 15L75 58H58L50 44L28 85H10Z"
              fill={isWhite ? '#FFFFFF' : '#1E3A5F'}
            />
            {/* 4-pane window */}
            <rect x="36" y="58" width="6" height="6" fill={isWhite ? '#1E3A5F' : '#FFFFFF'} />
            <rect x="44" y="58" width="6" height="6" fill={isWhite ? '#1E3A5F' : '#FFFFFF'} />
            <rect x="36" y="66" width="6" height="6" fill={isWhite ? '#1E3A5F' : '#FFFFFF'} />
            <rect x="44" y="66" width="6" height="6" fill={isWhite ? '#1E3A5F' : '#FFFFFF'} />

            {/* 'U' styled as 3D shipping container */}
            <path
              d="M62 45C62 30 78 20 95 20C112 20 128 30 128 45V85H110V50C110 40 102 36 95 36C88 36 80 40 80 50V85H62V45Z"
              fill={isWhite ? '#24BAA6' : '#0E9F8C'}
            />
            {/* Corrugated ribs */}
            <rect x="115" y="32" width="3" height="48" fill={isWhite ? '#FFFFFF' : '#0B8272'} />
            <rect x="121" y="36" width="3" height="44" fill={isWhite ? '#FFFFFF' : '#0B8272'} />
          </svg>

          {variant !== 'symbol' && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.04em',
                  color: isWhite ? '#FFFFFF' : '#0E9F8C',
                  textTransform: 'uppercase',
                }}
              >
                AU PORTABLE
              </span>
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.12em',
                  color: isWhite ? '#E2E8F0' : '#1E3A5F',
                  textTransform: 'uppercase',
                }}
              >
                SOLUTIONS
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link to="/" aria-label="AU Portable Solutions Home" style={{ display: 'inline-block' }}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
