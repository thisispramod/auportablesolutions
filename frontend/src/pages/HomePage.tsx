import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, AlertCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/common/ProductCard';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { sampleProducts } from '../data/products';
import { sampleProjects } from '../data/projects';
import { manufacturingSteps } from '../data/manufacturing';
import { sampleArticles } from '../data/articles';
import { triggerQuoteModal } from '../components/layout/Layout';

export const HomePage: React.FC = () => {
  const featuredProducts = sampleProducts.filter((p) => p.featured).slice(0, 6);
  const featuredProjects = sampleProjects.slice(0, 3);
  const latestArticles = sampleArticles.slice(0, 3);

  return (
    <>
      <SEO
        title="Portable Spaces. Lasting Solutions."
        description="AU Portable Solutions supplies prefabricated structures, portable office cabins, container solutions, and sandwich panels engineered for lasting durability across India."
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Product Categories Grid */}
      <CategoryGrid />

      {/* 3. Featured Products Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              gap: '1rem',
            }}
          >
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>
                Engineered Product Lines
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  margin: 0,
                }}
              >
                Featured Solutions
              </h2>
            </div>

            <Link
              to="/products"
              className="btn btn-outline-navy btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>View All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '1.75rem' }}>
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRequestQuote={(name) => triggerQuoteModal(name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. About AU Portable Solutions Section (Verified profile info) */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="about-preview-grid"
          >
            {/* Visual stack */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <img
                  src="/images/manufacturing-plant.jpg"
                  alt="AU Portable Solutions Facility and Assembly"
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                />
              </div>

              {/* Floating verified badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.25rem',
                  right: '1.5rem',
                  backgroundColor: 'var(--color-primary-navy)',
                  color: '#FFFFFF',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  maxWidth: '260px',
                }}
              >
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-teal)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Brand Promise
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, marginTop: '0.25rem' }}>
                  Portable Spaces. Lasting Solutions.
                </div>
              </div>
            </div>

            {/* Verified Profile Text */}
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
                About AU Portable Solutions
              </span>

              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem',
                }}
              >
                Engineered Spaces Built for Demanding Projects
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                AU Portable Solutions supplies prefabricated structures and portable cabins for commercial, industrial, institutional, and residential projects. From site offices and staff accommodation to container cafés and pre-engineered buildings, we deliver spaces that are quick to install, built to last, and adaptable to changing needs.
              </p>

              {/* Verified Mission & Vision Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1.75rem',
                }}
                className="mission-vision-boxes"
              >
                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-subtle)',
                    borderLeft: '4px solid var(--color-primary-navy)',
                  }}
                >
                  <strong style={{ display: 'block', color: 'var(--color-primary-navy)', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                    Our Mission
                  </strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                    To make a difference that reaches beyond our client work, using knowledge and capabilities to address pressing needs in society.
                  </p>
                </div>

                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-subtle)',
                    borderLeft: '4px solid var(--color-teal)',
                  }}
                >
                  <strong style={{ display: 'block', color: 'var(--color-teal-dark)', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                    Our Vision
                  </strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                    To reduce project costs by supplying cost-effective portable offices to remote sites where permanent construction is difficult.
                  </p>
                </div>
              </div>

              <Link to="/about" className="btn btn-navy">
                <span>Read Full Company Overview</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-preview-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
          @media (max-width: 600px) {
            .mission-vision-boxes {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Manufacturing Process Section (Cutting, Shearing, Bending, Foaming, Finishing, Dispatch) */}
      <section className="section-padding" style={{ backgroundColor: '#1E3A5F', color: '#FFFFFF' }}>
        <div className="container">
          <SectionHeading
            badge="In-House Production"
            title="Manufacturing Process Under One Roof"
            subtitle="From raw structural steel to final site dispatch, every stage is precision-controlled by our engineers and technicians."
            light
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
              gap: '1rem',
            }}
            className="process-grid"
          >
            {manufacturingSteps.map((step) => (
              <div
                key={step.stepNumber}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'background var(--transition-normal), transform var(--transition-normal)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(14, 159, 140, 0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'var(--color-teal)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.stepNumber}
                </div>

                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '0.35rem',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color: '#CBD5E1',
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/manufacturing" className="btn btn-outline-white">
              <span>View Machinery & Production Capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .process-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 640px) {
            .process-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 0.75rem !important;
            }
          }
          @media (max-width: 360px) {
            .process-grid {
              grid-template-columns: minmax(0, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* 7. Featured Projects Gallery (Sample Entries Clearly Marked) */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="demo-banner">
              <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Sample Portfolio Showcase:</strong> In accordance with verified company profile guidelines, project entries below illustrate structural capabilities. Real client names and final contract records are subject to official verification.
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              gap: '1rem',
            }}
          >
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
                Work Portfolio
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  margin: 0,
                }}
              >
                Featured Project Showcase
              </h2>
            </div>

            <Link to="/projects" className="btn btn-outline-navy btn-sm">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '1.75rem' }}>
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    className="badge badge-teal"
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    }}
                  >
                    {proj.category}
                  </span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem', flexGrow: 1 }}>
                    {proj.scope}
                  </p>

                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.75rem' }}>
                    <div><strong>Configuration:</strong> {proj.units}</div>
                    <div style={{ color: 'var(--color-text-light)', marginTop: '0.25rem', fontStyle: 'italic' }}>
                      {proj.clientPlaceholder}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries & Applications */}
      <IndustriesSection />

      {/* 9. Latest Articles Preview Section (Sample Content Clearly Identified) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              gap: '1rem',
            }}
          >
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>
                Knowledge Base & Insights
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  margin: 0,
                }}
              >
                Latest Modular Engineering Articles
              </h2>
            </div>

            <Link to="/blog" className="btn btn-outline-navy btn-sm">
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '1.75rem' }}>
            {latestArticles.map((art) => (
              <article
                key={art.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src={art.image}
                    alt={art.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    <span className="badge badge-gray">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.35 }}>
                    <Link to="/blog" style={{ color: 'var(--color-primary-navy)' }}>
                      {art.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1.25rem', flexGrow: 1 }}>
                    {art.summary}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.75rem' }}>
                    <span style={{ color: 'var(--color-text-light)' }}>Sample Article</span>
                    <Link to="/blog" style={{ color: 'var(--color-teal)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Read More <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact / Enquiry CTA Banner */}
      <section
        style={{
          backgroundColor: 'var(--color-primary-navy-dark)',
          color: '#FFFFFF',
          padding: '4rem 0',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '2px solid var(--color-teal)',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
                Get Started
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
                Need a Custom Portable Cabin or Modular Structure?
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', margin: 0, lineHeight: 1.6 }}>
                Speak with our engineering team for sizing recommendations, 3D layouts, and a direct ex-factory quotation delivered to your project pin code.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => triggerQuoteModal()}
                className="btn btn-primary btn-lg"
              >
                <span>Request a Fast Quote</span>
                <ArrowRight size={18} />
              </button>

              <Link to="/contact" className="btn btn-outline-white btn-lg">
                <span>Contact Sales Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
