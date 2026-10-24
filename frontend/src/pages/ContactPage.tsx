import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Globe,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { sampleProducts } from '../data/products';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Container Offices',
    size: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast can a porta cabin or container office be delivered?',
      a: 'Standard 20 ft and 10 ft factory-built units are typically ready for dispatch within 5 to 14 working days, depending on customization, insulation thickness, and interior cabinetry.'
    },
    {
      q: 'What site preparation is required before delivery?',
      a: 'The ground should be firm, compacted, and leveled. For standard portable cabins, concrete sleeper blocks or PCC pedestals at the corner skid points are sufficient. Ensure crane and trailer road access.'
    },
    {
      q: 'Can units be lifted and relocated after a project ends?',
      a: 'Yes. Every unit is engineered with integrated corner lifting lugs and heavy-duty structural steel skids designed for crane hoisting and flatbed truck transport across project sites.'
    },
    {
      q: 'Do you offer custom dimensions and restroom integration?',
      a: 'Absolutely. We customize dimensions from 10ft to 40ft+ multi-unit linkable complexes, including attached executive washrooms, pantries, and glass curtain wall facades.'
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details of your enquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Per instructions: "Since the backend does not exist yet, make the form clearly indicate that submission integration is pending. Do not falsely report that an enquiry was submitted or saved."
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us & Direct Factory Enquiry"
        description="Connect with AU Portable Solutions for prefabricated structures, portable cabins, container spaces, and sandwich panels. Submit project enquiries."
      />

      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--color-primary-navy)',
          color: '#FFFFFF',
          padding: '4rem 0 3.5rem',
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.94), rgba(21, 42, 69, 0.92)), url(/images/container-facade.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
              Enquiries & Estimates
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Contact AU Portable Solutions
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0 }}>
              Connect with our structural sales team for inquiries, drawings, and ex-factory quotation estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '3.5rem',
              alignItems: 'flex-start',
            }}
            className="contact-grid"
          >
            {/* Left: Responsive Enquiry Form */}
            <div
              className="card"
              style={{
                padding: '2.5rem',
                backgroundColor: '#FFFFFF',
              }}
            >
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                Project Enquiry & Request for Quote
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', marginBottom: '2rem' }}>
                Please provide your space dimensions, product requirement, and site location.
              </p>

              {isSubmitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1rem 0' }}>
                  <div className="demo-banner">
                    <AlertTriangle size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ color: '#92400E', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
                        Phase 1 Frontend Demonstration Notice
                      </h4>
                      <p style={{ color: '#78350F', fontSize: '0.9rem', lineHeight: 1.5, marginTop: '0.35rem' }}>
                        <strong>Submission integration is pending backend deployment.</strong> Your enquiry parameters were validated client-side successfully, but no live API or database exists in this initial phase.
                      </p>
                      <p style={{ color: '#78350F', fontSize: '0.875rem', margin: '0.5rem 0 0' }}>
                        No enquiry was sent to a server. For real business enquiries, please reach our team at <strong>sales@yourdomain.com</strong>.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--color-bg-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem',
                      fontSize: '0.875rem',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                      Validated Client Information:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', color: 'var(--color-text-body)' }}>
                      <li><strong>Name:</strong> {formData.name}</li>
                      <li><strong>Company:</strong> {formData.company || 'Not specified'}</li>
                      <li><strong>Email:</strong> {formData.email}</li>
                      <li><strong>Phone:</strong> {formData.phone}</li>
                      <li><strong>Product:</strong> {formData.product}</li>
                      <li><strong>Destination:</strong> {formData.city || 'Not specified'}</li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-navy"
                    style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="e.g. Anand Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company">
                        Organization / Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        className="form-input"
                        placeholder="e.g. Apex Infra Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        Official Email <span className="required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="anand@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-product">
                        Required Solution
                      </label>
                      <select
                        id="contact-product"
                        className="form-select"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      >
                        {sampleProducts.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Custom Modular Architecture">Custom Modular Architecture</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-size">
                        Estimated Dimensions / Units
                      </label>
                      <input
                        id="contact-size"
                        type="text"
                        className="form-input"
                        placeholder="e.g. 20ft x 10ft (Qty: 2)"
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-city">
                      Project Site Location / Delivery Pin Code
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Bengaluru / Greater Noida / Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Project Requirements & Queries <span className="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Please mention expected delivery timeline, panel insulation preference (PUF/Rockwool), and interior fitment preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <Send size={18} />
                    <span>Send Project Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Verified Contact & Presence Placeholders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Presence Details Box */}
              <div
                className="card"
                style={{
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
                  Offices & Supply Network
                </span>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '1.25rem' }}>
                  AU Portable Solutions Locations
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-primary-navy)', display: 'block' }}>Head Office:</strong>
                      <span style={{ color: 'var(--color-text-muted)' }}>[Full address to be confirmed in official registry]</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-primary-navy)', display: 'block' }}>Manufacturing Plant:</strong>
                      <span style={{ color: 'var(--color-text-muted)' }}>[Factory location to be confirmed in official registry]</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Building2Icon size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-primary-navy)', display: 'block' }}>Branch Offices:</strong>
                      <span style={{ color: 'var(--color-text-muted)' }}>[City] · [City] · [City]</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <Globe size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-primary-navy)', display: 'block' }}>Supply Network:</strong>
                      <span style={{ color: 'var(--color-text-muted)' }}>[Cities / regions served across India]</span>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Phone size={18} color="var(--color-teal)" />
                      <div>
                        <span style={{ color: 'var(--color-text-muted)' }}>Hotline: </span>
                        <a href="tel:+91" style={{ color: 'var(--color-primary-navy)', fontWeight: 700 }}>
                          +91 __________
                        </a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail size={18} color="var(--color-teal)" />
                      <div>
                        <span style={{ color: 'var(--color-text-muted)' }}>Email: </span>
                        <a href="mailto:sales@yourdomain.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 700 }}>
                          sales@yourdomain.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div
                className="card"
                style={{
                  padding: '1.75rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
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
                  <Clock size={22} color="var(--color-teal)" />
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary-navy)', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                    Operating Hours
                  </h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
                    Monday – Saturday: 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive FAQs Accordion */}
          <div style={{ marginTop: '4rem', maxWidth: '840px', margin: '4rem auto 0' }}>
            <SectionHeading
              badge="Frequently Asked Questions"
              title="Common Customer Inquiries"
              subtitle="Quick answers regarding delivery schedules, site preparation, and modular flexibility."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border-subtle)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '1.15rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'transparent',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-navy)',
                      }}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp size={18} color="var(--color-teal)" /> : <ChevronDown size={18} color="var(--color-text-muted)" />}
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.25rem 1.25rem',
                          fontSize: '0.925rem',
                          color: 'var(--color-text-body)',
                          lineHeight: 1.6,
                          borderTop: '1px solid var(--color-border-subtle)',
                          paddingTop: '0.875rem',
                        }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

function Building2Icon(props: { size?: number; color?: string; style?: React.CSSProperties }) {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={props.style}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
