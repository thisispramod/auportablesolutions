import React from 'react';
import { Shield, Zap, Wrench, ThermometerSnowflake, Repeat, Truck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Zap size={28} color="var(--color-teal)" />,
      title: 'Rapid Deployment (Days vs Months)',
      description: 'Factory-manufactured modular construction eliminates weather delays, concrete curing periods, and labor shortages. Units arrive ready for immediate connection.'
    },
    {
      icon: <ThermometerSnowflake size={28} color="var(--color-teal)" />,
      title: 'Advanced Thermal Comfort',
      description: 'High-density Polyurethane Foam (PUF) and Rockwool insulated cores significantly reduce HVAC energy consumption, ensuring comfort in harsh climatic zones.'
    },
    {
      icon: <Shield size={28} color="var(--color-teal)" />,
      title: 'Structural Steel Durability',
      description: 'Constructed using reinforced steel skids, corten shipping containers, and multi-coat epoxy primer systems formulated to resist corrosion and seismic stresses.'
    },
    {
      icon: <Wrench size={28} color="var(--color-teal)" />,
      title: 'Custom Engineering & Finishes',
      description: 'From 10ft security outposts to multi-module executive offices with attached washrooms, conference rooms, and bespoke claddings.'
    },
    {
      icon: <Repeat size={28} color="var(--color-teal)" />,
      title: '100% Relocatable Asset Value',
      description: 'Unlike permanent brick-and-mortar structures that become sunk costs, modular cabins can be lifted, transported, and repurposed across multiple project lifecycles.'
    },
    {
      icon: <Truck size={28} color="var(--color-teal)" />,
      title: 'Pan-Site Logistics & Support',
      description: 'Equipped with heavy crane lifting lugs and engineered tie-down brackets for safe transport to remote infrastructure sites, mines, and expressways.'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <SectionHeading
          badge="Why Choose Us"
          title="Engineered for Performance. Built for Reliability."
          subtitle="AU Portable Solutions delivers high-performance modular buildings backed by rigorous factory fabrication and client-centric engineering."
        />

        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          {points.map((pt, idx) => (
            <div
              key={idx}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-border-subtle)',
                transition: 'all var(--transition-normal)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-teal)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-subtle)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                {pt.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)',
                  lineHeight: 1.3,
                }}
              >
                {pt.title}
              </h3>

              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
