import React from 'react';
import { Target, Compass, ShieldCheck, CheckCircle2, ArrowRight, Info } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { triggerQuoteModal } from '../components/layout/Layout';

export const AboutPage: React.FC = () => {
  const verifiedSolutions = [
    {
      title: 'Prefabricated Structures',
      items: [
        'Site offices & Living accommodation',
        'Marketing offices & Low-cost mass housing',
        'Prefab canteens & Railway shelters',
        'Clean rooms & Prefabricated pulpits',
        'Acoustic enclosures & Solar inverter rooms',
        'Military camps & Telecom shelters'
      ]
    },
    {
      title: 'Pre-Engineered Buildings (PEB)',
      items: [
        'Warehouses & Industrial sheds',
        'Factory buildings & Industrial enclosures',
        'Shopping complexes & Mezzanine floors',
        'Airport terminal buildings & Aircraft hangars',
        'Auditoriums & Poultry sheds'
      ]
    },
    {
      title: 'Standard Portable Solutions',
      items: [
        'Portable cabins & Site office cabins',
        'Security cabins & Guard rooms',
        'Portable toilets & Bunk houses',
        'Storage containers & Fibre cement cabins',
        'Toll booth cabins & Traffic police cabins',
        'Liftable porta cabins & Mi Homes'
      ]
    },
    {
      title: 'Panels & Light Gauge Steel (LGSF)',
      items: [
        'PUF, EPS, Rockwool & Glasswool sandwich panels',
        'Cement board & Bison panels',
        'ACP & APP sheet panels',
        'Pre-laminated particle board, MDF & WPS boards',
        'LGSF prefab villas, cottages, schools & hospitals'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="About Us - Verified Company Profile"
        description="Learn about AU Portable Solutions. Verified company overview, mission, vision, and solution portfolio based on the official company profile."
      />

      {/* Page Header */}
      <section
        style={{
          backgroundColor: 'var(--color-primary-navy)',
          color: '#FFFFFF',
          padding: '4rem 0 3.5rem',
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.95), rgba(21, 42, 69, 0.92)), url(/images/hero-factory.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
              Company Profile
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              About AU Portable Solutions
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0 }}>
              Tagline: <strong>Portable Spaces. Lasting Solutions.</strong> Dedicated to supplying durable, turnkey prefabricated structures and portable cabins across dynamic commercial and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Notice Alert */}
      <section style={{ backgroundColor: '#F8FAFC', paddingTop: '2rem' }}>
        <div className="container">
          <div className="demo-banner-info">
            <Info size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Profile Integrity Assurance:</strong> All company overview details, mission statements, vision declarations, and product lines presented below are derived strictly from the official AU Portable Solutions company profile. We do not publish unverified statistics, awards, or arbitrary claims.
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.75rem' }}>
                Who We Are
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  marginBottom: '1.25rem',
                }}
              >
                Reliable Prefabricated Spaces Built to Endure
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                AU Portable Solutions supplies prefabricated structures and portable cabins for commercial, industrial, institutional, and residential projects across target regions.
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                From site offices and staff accommodation to container cafés and pre-engineered buildings, we deliver spaces that are quick to install, built to last, and adaptable to changing needs.
              </p>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 600 }}>
                  <ShieldCheck size={20} color="var(--color-teal)" />
                  Verified Operating Principles
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  Every structure is engineered with precision-formed steel frames and thermal sandwich panels to maintain comfortable internal environments in extreme cold or heat.
                </div>
              </div>
            </div>

            {/* Brand Logo & Visual Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border-subtle)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/assets/logo-stacked.png"
                  alt="AU Portable Solutions Brand Emblem"
                  style={{ maxHeight: '100px', margin: '0 auto', display: 'block' }}
                />
              </div>

              <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.25rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                  Corporate Identity Colors
                </h4>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem' }}>
                    <span style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#1E3A5F', display: 'inline-block' }} />
                    <span>Navy Blue (#1E3A5F)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem' }}>
                    <span style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#0E9F8C', display: 'inline-block' }} />
                    <span>Teal Green (#0E9F8C)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem' }}>
                    <span style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: '#D9DDE3', display: 'inline-block', border: '1px solid #CBD5E1' }} />
                    <span>Light Gray (#D9DDE3)</span>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <strong>Corporate Registry Status:</strong> Official establishment year, company registration IDs, and verified operational units will be populated during backend deployment.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Purpose & Direction (Mission & Vision directly from Company Profile Page 4) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <SectionHeading
            badge="Purpose & Direction"
            title="Our Mission & Strategic Vision"
            subtitle="Verified directly from the AU Portable Solutions corporate profile."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
            }}
            className="mission-grid"
          >
            {/* Mission Card */}
            <div
              className="card"
              style={{
                padding: '2.5rem',
                borderLeft: '5px solid var(--color-primary-navy)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(30, 58, 95, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Target size={28} color="var(--color-primary-navy)" />
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary-navy)', margin: 0 }}>
                Our Mission
              </h3>

              <blockquote
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-dark)',
                  fontStyle: 'normal',
                  margin: 0,
                }}
              >
                "To make a difference that reaches beyond our client work, using our knowledge and capabilities to help address pressing needs in society.
                <br /><br />
                We create opportunities for people from underserved regions, and we take on projects for their benefit, not for profit alone."
              </blockquote>
            </div>

            {/* Vision Card */}
            <div
              className="card"
              style={{
                padding: '2.5rem',
                borderLeft: '5px solid var(--color-teal)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-teal-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={28} color="var(--color-teal)" />
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-teal-dark)', margin: 0 }}>
                Our Vision
              </h3>

              <blockquote
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-dark)',
                  fontStyle: 'normal',
                  margin: 0,
                }}
              >
                "To reduce project costs by supplying cost-effective portable offices to remote sites, where permanent construction is difficult for lack of facilities.
                <br /><br />
                To generate employment for our people and support those most in need in our communities."
              </blockquote>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .mission-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Solutions Portfolio Matrix (Profile Pages 6-7) */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <SectionHeading
            badge="Capability Spectrum"
            title="Our Complete Solution Portfolio"
            subtitle="Categorized directly from the AU Portable Solutions corporate portfolio."
          />

          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            {verifiedSolutions.map((sol, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '2px solid var(--color-teal)',
                  }}
                >
                  {sol.title}
                </h3>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.625rem',
                  }}
                >
                  {sol.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-body)',
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              type="button"
              onClick={() => triggerQuoteModal()}
              className="btn btn-primary btn-lg"
            >
              <span>Discuss Your Specific Requirement</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
