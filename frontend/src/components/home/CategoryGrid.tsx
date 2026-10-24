import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Home, Factory, Layers } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const CategoryGrid: React.FC = () => {
  const categories = [
    {
      id: 'portable-cabins',
      title: 'Portable & Site Cabins',
      categoryQuery: 'Portable Cabins',
      count: '4 Models',
      description: 'Liftable porta cabins, security guard rooms, site supervisor offices, and workforce accommodation units.',
      image: '/images/portable-cabin.jpg',
      icon: <Home size={24} color="#0E9F8C" />,
      features: ['Heavy skid base', 'High mobility', 'PUF insulated']
    },
    {
      id: 'container-spaces',
      title: 'Modular Container Spaces',
      categoryQuery: 'Container Spaces',
      count: '3 Models',
      description: 'Custom container offices, farmhouse retreats, pop-up cafes, and modern real estate marketing suites.',
      image: '/images/container-office.jpg',
      icon: <Box size={24} color="#0E9F8C" />,
      features: ['Corten steel strength', 'Contemporary styling', '10ft - 40ft sizes']
    },
    {
      id: 'pre-engineered',
      title: 'Prefab & Pre-Engineered Buildings',
      categoryQuery: 'Pre-Engineered Buildings',
      count: '2 Models',
      description: 'Clear-span industrial sheds, warehouses, canteens, clean rooms, and institutional modular buildings.',
      image: '/images/peb-building.jpg',
      icon: <Factory size={24} color="#0E9F8C" />,
      features: ['Clear spans up to 60m', 'Continuous H-beams', 'Rapid dry construction']
    },
    {
      id: 'panels-doors',
      title: 'Sandwich Panels & Insulated Doors',
      categoryQuery: 'Panels & Doors',
      count: '3 Models',
      description: 'PUF, EPS, Rockwool panels, clean room swing doors, cold storage overlap doors, and aluminium windows.',
      image: '/images/sandwich-panels.jpg',
      icon: <Layers size={24} color="#0E9F8C" />,
      features: ['0.022 W/m.K thermal barrier', 'Tongue & groove joints', 'Airtight EPDM seals']
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <SectionHeading
          badge="Product Categories"
          title="Engineered Modular & Prefabricated Solutions"
          subtitle="Explore our comprehensive portfolio of factory-built spaces designed for rapid installation, lasting durability, and changing operational needs."
        />

        <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                style={{
                  height: '180px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#E2E8F0',
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.35s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.35rem 0.65rem',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  {cat.icon}
                </div>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary-navy)',
                  }}
                >
                  {cat.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                    flexGrow: 1,
                  }}
                >
                  {cat.description}
                </p>

                {/* Feature Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {cat.features.map((f, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        backgroundColor: '#F1F5F9',
                        color: 'var(--color-text-dark)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/products?category=${encodeURIComponent(cat.categoryQuery)}`}
                  className="btn btn-outline-teal btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Explore Range</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
