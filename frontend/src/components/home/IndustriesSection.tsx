import React from 'react';
import { HardHat, Warehouse, Building, Coffee, Mountain, Stethoscope } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: <HardHat size={28} color="#0E9F8C" />,
      title: 'Construction & Infrastructure',
      applications: 'Site engineering offices, supervisor cabins, workforce accommodations, batching plant shelters, and security posts.'
    },
    {
      icon: <Warehouse size={28} color="#0E9F8C" />,
      title: 'Industrial & Warehousing',
      applications: 'Pre-engineered factory sheds, logistics hubs, mezzanine offices, cold storage enclosures, and generator acoustic rooms.'
    },
    {
      icon: <Building size={28} color="#0E9F8C" />,
      title: 'Commercial & Real Estate',
      applications: 'Project marketing experience centres, sample flat show units, sales lounges, and modular customer inquiry suites.'
    },
    {
      icon: <Coffee size={28} color="#0E9F8C" />,
      title: 'Hospitality & Retail',
      applications: 'Container cafés, quick-service food kiosks, boutique eco-resort chalets, beachside pop-ups, and tourist info hubs.'
    },
    {
      icon: <Mountain size={28} color="#0E9F8C" />,
      title: 'Remote Mining & Energy',
      applications: 'Liftable bunkhouses, mess halls, solar inverter rooms, telecom base stations, and rugged exploratory camp outposts.'
    },
    {
      icon: <Stethoscope size={28} color="#0E9F8C" />,
      title: 'Healthcare & Institutional',
      applications: 'Clean room partitions, emergency medical triage pods, remote testing clinics, schools, and vaccination shelters.'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <SectionHeading
          badge="Market Applications"
          title="Industries We Empower Across India"
          subtitle="From metropolitan infrastructure to extreme remote terrains, our modular spaces deliver reliable turnkey environments wherever your business expands."
        />

        <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
          {industries.map((ind, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '1.75rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-teal-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {ind.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)',
                }}
              >
                {ind.title}
              </h3>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5,
                }}
              >
                {ind.applications}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
