import React from 'react';
import {
  CheckCircle2,
  Wrench,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { manufacturingSteps, manufacturingEquipment } from '../data/manufacturing';
import { triggerQuoteModal } from '../components/layout/Layout';

export const ManufacturingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Manufacturing Process & Equipment"
        description="Explore AU Portable Solutions manufacturing process: Cutting, Shearing, Bending, Foaming, Finishing, and Dispatch. In-house production under one roof."
      />

      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--color-primary-navy)',
          color: '#FFFFFF',
          padding: '4rem 0 3.5rem',
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.94), rgba(21, 42, 69, 0.94)), url(/images/manufacturing-plant.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
              Precision Engineering
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Production Under One Roof
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0 }}>
              How our structures are produced, from raw material to dispatch. Handled end-to-end by experienced engineers, technicians, and skilled fabricators.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Notice Banner */}
      <section style={{ backgroundColor: '#F8FAFC', paddingTop: '2rem' }}>
        <div className="container">
          <div className="demo-banner-info">
            <Info size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Manufacturing Registry Status:</strong> The 6 fabrication stages and machinery list detailed on this page correspond directly to Page 14 of the official AU Portable Solutions company profile. Facility location details and certification documentation remain designated as <em>"Details to be confirmed"</em>.
            </div>
          </div>
        </div>
      </section>

      {/* Six-Step Manufacturing Process */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <SectionHeading
            badge="Fabrication Workflow"
            title="The Six Stages of Production"
            subtitle="Every portable cabin, modular office, and PEB structural truss follows a controlled six-stage manufacturing pipeline."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {manufacturingSteps.map((step) => {
              return (
                <div
                  key={step.stepNumber}
                  className="card manufacturing-stage-card"
                >
                  {/* Step Number Badge */}
                  <div className="manufacturing-stage-number">
                    <span className="manufacturing-stage-label">
                      Stage
                    </span>
                    <span className="manufacturing-stage-digits">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Details */}
                  <div style={{ minWidth: 0, width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary-navy)', margin: 0 }}>
                        {step.title}
                      </h3>
                      <span className="badge badge-navy" style={{ whiteSpace: 'normal', textAlign: 'left' }}>
                        {step.subtitle}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {step.description}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '0.5rem' }}>
                      {step.details.map((detail, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                          <CheckCircle2 size={15} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          .manufacturing-stage-card {
            display: grid;
            grid-template-columns: 120px minmax(0, 1fr);
            gap: 2rem;
            padding: 2rem;
            background-color: #FFFFFF;
            align-items: center;
          }
          .manufacturing-stage-number {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            background-color: rgba(30, 58, 95, 0.05);
            border-radius: var(--radius-lg);
            border: 1px solid var(--color-border-subtle);
            padding: 1.5rem 0;
          }
          .manufacturing-stage-label {
            font-size: 0.8125rem;
            color: var(--color-text-muted);
            text-transform: uppercase;
            font-weight: 700;
          }
          .manufacturing-stage-digits {
            font-size: 2.5rem;
            font-weight: 900;
            color: var(--color-teal);
            font-family: var(--font-heading);
          }
          @media (max-width: 768px) {
            .manufacturing-stage-card {
              grid-template-columns: minmax(0, 1fr) !important;
              gap: 1.25rem !important;
              padding: 1.25rem !important;
            }
            .manufacturing-stage-number {
              flex-direction: row !important;
              gap: 0.75rem !important;
              padding: 0.5rem 1rem !important;
              width: fit-content !important;
              border-radius: var(--radius-md) !important;
              height: auto !important;
            }
            .manufacturing-stage-digits {
              font-size: 1.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* Manufacturing Equipment Showcase (Exact list from Profile Page 14) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <SectionHeading
            badge="Factory Machinery"
            title="Manufacturing Equipment Infrastructure"
            subtitle="Verified machinery inventory from the official AU Portable Solutions company profile."
          />

          <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
            {manufacturingEquipment.map((eq, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-teal-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Wrench size={22} color="var(--color-teal)" />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-navy)', margin: 0 }}>
                      {eq.name}
                    </h3>
                    <span className="badge badge-gray" style={{ fontSize: '0.7rem' }}>
                      {eq.category}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {eq.functionDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Plant Inquiry CTA */}
          <div
            style={{
              marginTop: '3.5rem',
              backgroundColor: 'var(--color-bg-light)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              border: '1px solid var(--color-border-subtle)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
              Have Custom Technical Specifications?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '620px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
              Our manufacturing engineers can adapt wall thicknesses, fire ratings, steel profiles, and interior cabinetry to your exact project drawings.
            </p>
            <button
              type="button"
              onClick={() => triggerQuoteModal()}
              className="btn btn-primary"
            >
              <span>Consult Our Engineering Team</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
