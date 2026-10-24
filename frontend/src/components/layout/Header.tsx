import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

interface HeaderProps {
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Track exact pixel bottom edge of header for drawer placement
  useEffect(() => {
    const updateHeaderBottom = () => {
      if (headerRef.current) {
        setHeaderBottom(headerRef.current.getBoundingClientRect().bottom);
      }
    };
    updateHeaderBottom();
    window.addEventListener('resize', updateHeaderBottom, { passive: true });
    return () => window.removeEventListener('resize', updateHeaderBottom);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle shadow only — never change height on scroll to prevent layout jumping/shaking
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#FFFFFF',
          boxShadow: isScrolled
            ? '0 4px 20px rgba(15, 23, 42, 0.08)'
            : '0 1px 3px rgba(15, 23, 42, 0.05)',
          transition: 'box-shadow var(--transition-normal)',
        }}
      >
        {/* Top Notification / Utility Bar */}
        <div
          style={{
            backgroundColor: 'var(--color-primary-navy)',
            color: '#FFFFFF',
            fontSize: '0.8125rem',
            padding: '0.45rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              width: '100%',
            }}
          >
            {/* Left badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flexShrink: 1 }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: '#CBD5E1',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <ShieldCheck size={14} color="#0E9F8C" style={{ flexShrink: 0 }} />
                <span className="topbar-desktop-text">Direct Manufacturer • Prefabricated Structures &amp; Portable Cabins</span>
                <span className="topbar-mobile-text">Prefabricated Structures &amp; Cabins</span>
              </span>
              <span className="hide-on-mobile" style={{ color: '#64748B' }}>|</span>
              <span className="hide-on-mobile" style={{ color: '#CBD5E1' }}>
                Tagline: <em>Portable Spaces. Lasting Solutions.</em>
              </span>
            </div>

            {/* Right contact */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
              <a
                href="tel:+91"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: '#E2E8F0',
                  whiteSpace: 'nowrap',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#0E9F8C')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E8F0')}
              >
                <Phone size={13} color="#0E9F8C" style={{ flexShrink: 0 }} />
                <span>Hotline: +91 __________</span>
              </a>
              <a
                href="mailto:sales@auportablesolutions.com"
                className="hide-on-mobile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: '#E2E8F0',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#0E9F8C')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E8F0')}
              >
                <Mail size={13} color="#0E9F8C" style={{ flexShrink: 0 }} />
                <span>sales@auportablesolutions.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar — Stable height, never jumps on scroll */}
        <div className="container">
          <div className="main-nav-bar">
            {/* Brand Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem',
              }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9375rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--color-teal)' : 'var(--color-primary-navy)',
                    position: 'relative',
                    padding: '0.5rem 0',
                    transition: 'color var(--transition-fast)',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--color-teal)',
                            borderRadius: '2px',
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={onRequestQuote}
                className="btn btn-primary btn-sm desktop-only-flex"
                style={{ boxShadow: '0 2px 8px rgba(14, 159, 140, 0.25)' }}
              >
                <span>Request a Quote</span>
                <ArrowUpRight size={16} />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-drawer"
                style={{
                  display: 'none',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-primary-navy)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  lineHeight: 0,
                }}
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Inline CSS */}
        <style>{`
          .topbar-mobile-text  { display: none; }
          .topbar-desktop-text { display: inline; }

          .main-nav-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 74px;
          }

          /* Drawer slide-in animation */
          @keyframes drawerSlideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 900px) {
            .desktop-nav       { display: none !important; }
            .mobile-menu-btn   { display: flex !important; }
            .desktop-only-flex { display: none !important; }
            .main-nav-bar      { height: 66px !important; }
          }
          @media (max-width: 640px) {
            .hide-on-mobile      { display: none !important; }
            .topbar-desktop-text { display: none !important; }
            .topbar-mobile-text  {
              display: inline !important;
              font-size: 0.75rem !important;
            }
          }
        `}</style>
      </header>

      {/*
        Mobile drawer and backdrop are rendered OUTSIDE the <header> element.

        Why: The drawer uses position:fixed which should be relative to the
        viewport. But when the parent has certain CSS properties (like
        position:sticky + z-index), browsers create a new stacking context
        that breaks fixed positioning. Rendering outside the header avoids
        this entirely and guarantees the drawer always covers the full screen
        below the header regardless of scroll position.
      */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop — dims background and closes drawer on tap */}
          <div
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: `${headerBottom}px`,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
              zIndex: 998,
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
            }}
          />

          {/* Drawer panel */}
          <nav
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            style={{
              position: 'fixed',
              top: `${headerBottom}px`,
              left: 0,
              right: 0,
              /* dvh = dynamic viewport height — accounts for mobile browser chrome */
              height: `calc(100dvh - ${headerBottom}px)`,
              backgroundColor: '#FFFFFF',
              zIndex: 999,
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              padding: '1rem 1.25rem 2rem',
              boxShadow: '0 20px 35px -5px rgba(30,58,95,0.18)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              animation: 'drawerSlideIn 0.22s ease forwards',
            }}
          >
            {/* Nav links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--color-teal)' : 'var(--color-primary-navy)',
                    padding: '0.9rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isActive ? 'var(--color-teal-soft)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    transition: 'background-color 0.15s ease, color 0.15s ease',
                    WebkitTapHighlightColor: 'transparent',
                  })}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={16} style={{ opacity: 0.5, flexShrink: 0 }} />
                </NavLink>
              ))}
            </div>

            {/* CTA footer */}
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.875rem' }}
              >
                Request a Quote
              </button>

              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                Sales Hotline: +91 __________
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};
