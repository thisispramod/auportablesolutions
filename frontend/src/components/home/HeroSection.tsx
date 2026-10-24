import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, Clock } from 'lucide-react';
import { triggerQuoteModal } from '../layout/Layout';

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#152A45',
        color: '#FFFFFF',
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(135deg, rgba(21, 42, 69, 0.95) 0%, rgba(30, 58, 95, 0.88) 100%), url(/images/hero-factory.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative ambient subtle glow - Strictly contained within section bounds */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'min(450px, 90vw)',
          height: 'min(450px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 159, 140, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          transform: 'translate(10%, -10%)',
          overflow: 'hidden',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Hero Content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span
                className="badge badge-teal"
                style={{
                  backgroundColor: 'rgba(14, 159, 140, 0.25)',
                  color: '#24BAA6',
                  borderColor: 'rgba(14, 159, 140, 0.5)',
                  fontSize: '0.8125rem',
                  padding: '0.35rem 0.875rem',
                }}
              >
                AU Portable Solutions
              </span>
              <span style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 500 }}>
                Prefabricated Structures & Portable Cabins
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Portable Spaces.{' '}
              <span
                style={{
                  color: 'var(--color-teal-light)',
                  display: 'block',
                }}
              >
                Lasting Solutions.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)',
                color: '#E2E8F0',
                lineHeight: 1.6,
                maxWidth: '620px',
                marginBottom: '2rem',
              }}
            >
              Engineered container offices, heavy-duty portable cabins, and pre-engineered buildings built to last and adaptable to changing needs. Turnkey manufacturing, thermal insulation, and rapid site delivery.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <Link to="/products" className="btn btn-primary btn-lg">
                <span>Explore Products</span>
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                onClick={() => triggerQuoteModal()}
                className="btn btn-outline-white btn-lg"
              >
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                paddingTop: '1.5rem',
              }}
              className="hero-highlights"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Cpu size={22} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#FFFFFF' }}>CNC Precision</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Robotic steel fabrication</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Clock size={22} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#FFFFFF' }}>Rapid Setup</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Factory-tested deployment</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <ShieldCheck size={22} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#FFFFFF' }}>Weatherproof</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>High-density PUF insulation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="hero-card-wrapper" style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <img
                src="/images/container-office.jpg"
                alt="AU Portable Solutions Container Office"
                style={{
                  width: '100%',
                  height: '340px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Overlaid specs bar */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(21, 42, 69, 0.95)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span className="badge badge-teal" style={{ marginBottom: '0.25rem' }}>
                      Core Line
                    </span>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>
                      Custom Container Offices & Cabins
                    </h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.8125rem', margin: 0 }}>
                      Sizes from 10ft to 40ft • Ready to plug & play
                    </p>
                  </div>

                  <Link
                    to="/products/container-offices"
                    className="btn btn-outline-teal btn-sm"
                    style={{ padding: '0.5rem 0.875rem' }}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-card-wrapper {
            max-width: 560px;
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .hero-highlights {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
