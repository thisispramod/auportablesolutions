import React, { useState } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { sampleProjects, projectCategories, sampleMajorOrders } from '../data/projects';
import { triggerQuoteModal } from '../components/layout/Layout';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEO
        title="Projects & Major Orders Showcase"
        description="View sample visual portfolio and track record template for AU Portable Solutions modular cabins, PEB structures, and container installations."
      />

      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--color-primary-navy)',
          color: '#FFFFFF',
          padding: '4rem 0 3.5rem',
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.94), rgba(21, 42, 69, 0.92)), url(/images/peb-building.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
              Portfolio & Track Record
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Featured Projects & Executed Orders
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0 }}>
              Showcasing structural configurations and execution scopes across commercial offices, retail kiosks, industrial warehouses, and remote accommodation colonies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          {/* Strict Verification Disclaimer */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="demo-banner">
              <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Sample Portfolio Showcase — Details to be Confirmed:</strong>
                <p style={{ margin: '0.25rem 0 0', lineHeight: 1.5 }}>
                  In accordance with the official company profile guidelines, project entries below represent visual architectural scopes and capabilities. Real client identities, specific contract numbers, and finalized site images are placeholders awaiting commercial release.
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2.5rem',
              justifyContent: 'center',
            }}
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border:
                    selectedCategory === cat
                      ? '1px solid var(--color-teal)'
                      : '1px solid var(--color-border-subtle)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-teal)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-primary-navy)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    className="badge badge-navy"
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="badge badge-teal"
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      fontSize: '0.7rem',
                    }}
                  >
                    Sample Showcase
                  </span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-navy)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.5,
                      marginBottom: '1rem',
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      backgroundColor: 'var(--color-bg-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.875rem',
                      fontSize: '0.8125rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                    }}
                  >
                    <div>
                      <strong>Scope:</strong> {project.scope}
                    </div>
                    <div>
                      <strong>Volume:</strong> {project.units}
                    </div>
                    <div>
                      <strong>Speed:</strong> {project.completionTimeline}
                    </div>
                  </div>

                  <div
                    style={{
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '0.75rem',
                      fontSize: '0.78125rem',
                      color: 'var(--color-text-light)',
                      fontStyle: 'italic',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span>{project.clientPlaceholder}</span>
                    <span>{project.locationPlaceholder}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Orders Track Record Table (Profile Page 19) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <SectionHeading
            badge="Orders Track Record"
            title="Major Orders Registry [Format]"
            subtitle="Template structure corresponding directly to page 19 of the AU Portable Solutions company profile."
          />

          <div
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              border: '1px solid var(--color-border-strong)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-primary-navy)', color: '#FFFFFF' }}>
                  <th style={{ padding: '0.875rem 1rem', width: '8%' }}>No.</th>
                  <th style={{ padding: '0.875rem 1rem', width: '28%' }}>Client [Placeholder]</th>
                  <th style={{ padding: '0.875rem 1rem', width: '32%' }}>Requirement</th>
                  <th style={{ padding: '0.875rem 1rem', width: '12%' }}>Qty</th>
                  <th style={{ padding: '0.875rem 1rem', width: '20%' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {sampleMajorOrders.map((order) => (
                  <tr
                    key={order.no}
                    style={{
                      backgroundColor: order.no % 2 === 0 ? '#FFFFFF' : 'var(--color-bg-light)',
                      borderBottom: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>0{order.no}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                      {order.client}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                      {order.requirement}
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>{order.qty}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span
                        className={`badge ${
                          order.status.includes('Executed') ? 'badge-teal' : 'badge-navy'
                        }`}
                        style={{ fontSize: '0.7rem' }}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              type="button"
              onClick={() => triggerQuoteModal()}
              className="btn btn-primary"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
