import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
      ? 'text-right ml-auto'
      : 'text-left';

  return (
    <div
      className={`section-heading-wrapper ${alignClass} ${className}`}
      style={{
        maxWidth: align === 'center' ? '760px' : '100%',
        marginBottom: '2.75rem',
        textAlign: align,
      }}
    >
      {badge && (
        <div style={{ marginBottom: '0.75rem' }}>
          <span
            className={`badge ${light ? 'badge-teal' : 'badge-navy'}`}
            style={
              light
                ? {
                    backgroundColor: 'rgba(14, 159, 140, 0.2)',
                    color: '#24BAA6',
                    borderColor: 'rgba(14, 159, 140, 0.4)',
                  }
                : undefined
            }
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        style={{
          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
          fontWeight: 800,
          color: light ? '#FFFFFF' : 'var(--color-primary-navy)',
          letterSpacing: '-0.02em',
          marginBottom: subtitle ? '0.75rem' : '0',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: '1.05rem',
            color: light ? '#CBD5E1' : 'var(--color-text-muted)',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
