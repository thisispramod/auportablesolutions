import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Container Offices', path: '/products/container-offices' },
    { name: 'Portable Office Cabins', path: '/products/portable-office-cabins' },
    { name: 'Security Cabins & Guard Rooms', path: '/products/security-cabins' },
    { name: 'Farmhouse Containers', path: '/products/farmhouse-containers' },
    { name: 'Staff Accommodation & Labour Sheds', path: '/products/staff-accommodation' },
    { name: 'Pre-Engineered Buildings (PEB)', path: '/products/pre-engineered-buildings' },
    { name: 'Container Cafés & Kiosks', path: '/products/container-cafes' },
    { name: 'Sandwich Panels & Insulated Doors', path: '/products/sandwich-panels' },
  ];

  const quickLinks = [
    { name: 'About AU Portable Solutions', path: '/about' },
    { name: 'All Product Lines', path: '/products' },
    { name: 'Project Portfolio', path: '/projects' },
    { name: 'Manufacturing Process', path: '/manufacturing' },
    { name: 'Industrial Blog & Articles', path: '/blog' },
    { name: 'Enquiry & Contact', path: '/contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary-navy)',
        color: '#E2E8F0',
        paddingTop: '4.5rem',
        paddingBottom: '2rem',
        borderTop: '3px solid var(--color-teal)',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <BrandLogo variant="white" size="lg" />

            <p style={{ fontSize: '0.9375rem', color: '#CBD5E1', lineHeight: 1.6, marginTop: '0.25rem' }}>
              <strong>AU Portable Solutions</strong> supplies prefabricated structures, portable office cabins, and insulated panel systems engineered for commercial, industrial, and residential projects.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-teal)' }}>
              <ShieldCheck size={18} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                Factory Direct Quality & Precision
              </span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
            >
              Key Solutions
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--color-teal)',
                }}
              />
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      fontSize: '0.875rem',
                      color: '#CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      transition: 'color var(--transition-fast), transform var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--color-teal)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#CBD5E1';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={12} color="var(--color-teal)" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
            >
              Company Navigation
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--color-teal)',
                }}
              />
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      fontSize: '0.875rem',
                      color: '#CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      transition: 'color var(--transition-fast), transform var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--color-teal)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#CBD5E1';
                      (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={12} color="var(--color-teal)" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Factory Placeholders */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                position: 'relative',
                paddingBottom: '0.5rem',
              }}
            >
              Contact & Supply Network
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--color-teal)',
                }}
              />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>Head Office:</strong>
                  <span style={{ color: '#94A3B8' }}>[Head office address to be confirmed]</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>Manufacturing Plant:</strong>
                  <span style={{ color: '#94A3B8' }}>[Factory address to be confirmed]</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                <Phone size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ color: '#CBD5E1' }}>Hotline: </span>
                  <a href="tel:+91" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    +91 __________
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                <Mail size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ color: '#CBD5E1' }}>Inquiries: </span>
                  <a href="mailto:sales@yourdomain.com" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    sales@yourdomain.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                <Globe size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ color: '#CBD5E1' }}>Web: </span>
                  <span style={{ color: '#FFFFFF' }}>www.yourdomain.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: '#94A3B8',
          }}
        >
          <div>
            © {currentYear} AU Portable Solutions. All rights reserved. <em>Portable Spaces. Lasting Solutions.</em>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Phase 1 Public Website UI</span>
            <span>•</span>
            <span>SSR / SEO Ready Architecture</span>
            <span>•</span>
            <Link to="/contact" style={{ color: 'var(--color-teal)' }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
