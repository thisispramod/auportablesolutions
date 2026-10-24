import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

interface HeaderProps {
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll only when mobile drawer is open to prevent background jumps
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

  useEffect(() => {
    const handleScroll = () => {
      // Toggle shadow only — never change height on scroll to prevent layout jumping/shaking
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header
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
              <span className="topbar-desktop-text">Direct Manufacturer • Prefabricated Structures & Portable Cabins</span>
              <span className="topbar-mobile-text">Prefabricated Structures & Cabins</span>
            </span>
            <span className="hide-on-mobile" style={{ color: '#64748B' }}>|</span>
            <span className="hide-on-mobile" style={{ color: '#CBD5E1' }}>
              Tagline: <em>Portable Spaces. Lasting Solutions.</em>
            </span>
          </div>

          {/* Right contact placeholders from company profile */}
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
              style={{
                boxShadow: '0 2px 8px rgba(14, 159, 140, 0.25)',
              }}
            >
              <span>Request a Quote</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-primary-navy)',
                cursor: 'pointer',
                padding: '0.5rem',
              }}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: '100%',
            left: 0,
            right: 0,
            height: 'calc(100vh - 100%)',
            width: '100%',
            maxWidth: '100vw',
            boxSizing: 'border-box',
            backgroundColor: '#FFFFFF',
            zIndex: 999,
            padding: '1.25rem',
            overflowY: 'auto',
            borderTop: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--color-teal)' : 'var(--color-primary-navy)',
                  padding: '0.875rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isActive ? 'var(--color-teal-soft)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={16} opacity={0.6} />
              </NavLink>
            ))}
          </div>

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
        </div>
      )}

      {/* Responsive Inline CSS overrides */}
      <style>{`
        .topbar-mobile-text {
          display: none;
        }
        .topbar-desktop-text {
          display: inline;
        }
        .main-nav-bar {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          height: 74px;
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .desktop-only-flex {
            display: none !important;
          }
          .main-nav-bar {
            height: 66px !important;
          }
        }
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none !important;
          }
          .topbar-desktop-text {
            display: none !important;
          }
          .topbar-mobile-text {
            display: inline !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </header>
  );
};
