import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  Layers,
  ChevronRight,
  Send,
  AlertTriangle,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { sampleProducts } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { triggerQuoteModal } from '../components/layout/Layout';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = sampleProducts.find((p) => p.slug === slug);

  // Gallery state
  const [activeImage, setActiveImage] = useState<string>('');

  // In-page enquiry state
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '1 Unit',
    location: '',
    message: '',
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.gallery[0] || product.image);
      setInquirySubmitted(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container section-padding" style={{ textAlign: 'center' }}>
        <SEO title="Product Not Found" />
        <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>
          Product Not Found
        </h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          The requested modular structure model could not be located in our catalog.
        </p>
        <Link to="/products" className="btn btn-primary">
          <ArrowLeft size={16} />
          Return to Product Catalog
        </Link>
      </div>
    );
  }

  // Related products from same or other category
  const relatedProducts = sampleProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.featured))
    .slice(0, 3);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryData.name && inquiryData.phone && inquiryData.email) {
      setInquirySubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title={`${product.name} - Specifications & Dimensions`}
        description={product.shortDescription}
      />

      {/* Breadcrumb Header */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-border-subtle)',
          padding: '1rem 0',
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)' }}>
              Home
            </Link>
            <ChevronRight size={14} color="var(--color-text-light)" />
            <Link to="/products" style={{ color: 'var(--color-text-muted)' }}>
              Products
            </Link>
            <ChevronRight size={14} color="var(--color-text-light)" />
            <span style={{ color: 'var(--color-primary-navy)', fontWeight: 600 }}>
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '3.5rem',
              alignItems: 'flex-start',
            }}
            className="product-detail-grid"
          >
            {/* Gallery Left */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-subtle)',
                  marginBottom: '1rem',
                  height: '420px',
                }}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      style={{
                        width: '90px',
                        height: '70px',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        border: activeImage === img ? '2px solid var(--color-teal)' : '2px solid transparent',
                        padding: 0,
                        cursor: 'pointer',
                        opacity: activeImage === img ? 1 : 0.7,
                        transition: 'opacity var(--transition-fast)',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  padding: '1.25rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <ShieldCheck size={22} color="var(--color-teal)" style={{ margin: '0 auto 0.25rem' }} />
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>Direct Factory</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Ex-factory pricing</div>
                </div>

                <div style={{ textAlign: 'center', borderLeft: '1px solid var(--color-border-subtle)', borderRight: '1px solid var(--color-border-subtle)' }}>
                  <Clock size={22} color="var(--color-teal)" style={{ margin: '0 auto 0.25rem' }} />
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>{product.leadTime}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Typical turnaround</div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <Layers size={22} color="var(--color-teal)" style={{ margin: '0 auto 0.25rem' }} />
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>Custom Sizing</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>10ft to 40ft+ bespoke</div>
                </div>
              </div>
            </div>

            {/* Product Info Right */}
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <span className="badge badge-teal">{product.category}</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}
              >
                {product.name}
              </h1>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-teal-dark)',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                {product.tagline}
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                {product.fullDescription}
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '2rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => triggerQuoteModal(product.name)}
                  className="btn btn-primary btn-lg"
                  style={{ flexGrow: 1 }}
                >
                  <FileText size={18} />
                  <span>Request an Itemized Quote</span>
                </button>

                <Link to="/contact" className="btn btn-outline-navy btn-lg">
                  <span>Contact Sales</span>
                </Link>
              </div>

              {/* Standard Sizes Available */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
                  Standard Dimensions & Configurations
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.standardSizes.map((size, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        backgroundColor: '#F1F5F9',
                        color: 'var(--color-primary-navy)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border-subtle)',
                      }}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: '1.5rem',
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
                  Standard Inclusions & Structural Features
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                      <CheckCircle2 size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .product-detail-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* Technical Specifications Table */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              Technical Specifications
            </h2>

            <div
              style={{
                border: '1px solid var(--color-border-strong)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9375rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary-navy)', color: '#FFFFFF' }}>
                    <th style={{ padding: '1rem 1.25rem', width: '35%', fontWeight: 700 }}>Parameter</th>
                    <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Engineering Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? '#FFFFFF' : 'var(--color-bg-light)',
                        borderBottom: '1px solid var(--color-border-subtle)',
                      }}
                    >
                      <td style={{ padding: '0.875rem 1.25rem', fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                        {spec.label}
                      </td>
                      <td style={{ padding: '0.875rem 1.25rem', color: 'var(--color-text-body)' }}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Applications & Customization Options */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
              <div
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
                  Common Applications
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product.applications.map((app, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}>
                      <CheckCircle2 size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.75rem' }}>
                  Custom Options & Add-ons
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product.customizationOptions.map((opt, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}>
                      <CheckCircle2 size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Page Quick Quote Form Section */}
      <section className="section-padding" style={{ backgroundColor: '#1E3A5F', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>
              Instant Enquiry
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              Request a Quotation for {product.name}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Submit your dimensions and destination pin code to receive an itemized factory quotation.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem',
              color: 'var(--color-text-dark)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {inquirySubmitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
                <div className="demo-banner">
                  <AlertTriangle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ color: '#92400E', fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                      Phase 1 Client-Side Demonstration
                    </h4>
                    <p style={{ color: '#78350F', fontSize: '0.875rem', lineHeight: 1.5, marginTop: '0.25rem' }}>
                      <strong>Submission integration is pending backend deployment.</strong> Your requirement parameters for <em>{product.name}</em> were validated client-side. No database or server was contacted.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="btn btn-navy"
                  style={{ alignSelf: 'center', marginTop: '1rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="inq-name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="inq-name"
                      type="text"
                      className="form-input"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="inq-phone">
                      Contact Phone <span className="required">*</span>
                    </label>
                    <input
                      id="inq-phone"
                      type="tel"
                      className="form-input"
                      required
                      placeholder="+91 __________"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="inq-email">
                      Work Email <span className="required">*</span>
                    </label>
                    <input
                      id="inq-email"
                      type="email"
                      className="form-input"
                      required
                      placeholder="name@company.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="inq-location">
                      Site Destination / City
                    </label>
                    <input
                      id="inq-location"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Delhi NCR / Bengaluru / Pune"
                      value={inquiryData.location}
                      onChange={(e) => setInquiryData({ ...inquiryData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inq-message">
                    Specific Size / Custom Specifications
                  </label>
                  <textarea
                    id="inq-message"
                    rows={3}
                    className="form-textarea"
                    placeholder="e.g. 20ft unit with 2 sliding windows, air conditioning ducting, and anti-skid vinyl..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem' }}>
                  <Send size={16} />
                  <span>Request Factory Quote for {product.name}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Carousel / Grid */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>
                Complementary Solutions
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-navy)', margin: 0 }}>
                Related Product Lines
              </h2>
            </div>
            <Link to="/products" className="btn btn-outline-navy btn-sm">
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '1.75rem' }}>
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onRequestQuote={(name) => triggerQuoteModal(name)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
