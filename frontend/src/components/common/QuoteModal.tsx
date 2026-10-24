import React, { useState, useEffect } from 'react';
import { X, Send, AlertTriangle, Info } from 'lucide-react';
import { sampleProducts } from '../../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: defaultProduct || (sampleProducts[0]?.name ?? ''),
    dimensions: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'pending_backend_notice'
  >('idle');

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number (at least 8 digits)';
    }
    if (!formData.product) errs.product = 'Please select a product category';
    if (!formData.message.trim()) errs.message = 'Please provide details of your requirement';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Per instructions: "Since the backend does not exist yet, make the form clearly indicate that submission integration is pending. Do not falsely report that an enquiry was submitted or saved."
      setSubmissionStatus('pending_backend_notice');
    }
  };

  const handleReset = () => {
    setSubmissionStatus('idle');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          width: '100%',
          maxWidth: '640px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-primary-navy)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '0.25rem' }}>
              Direct Factory Quotation
            </span>
            <h3 id="modal-title" style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0 }}>
              Request a Custom Quote
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote modal"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '0.375rem',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', flexGrow: 1 }}>
          {submissionStatus === 'pending_backend_notice' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1rem 0' }}>
              <div
                style={{
                  backgroundColor: '#FEF3C7',
                  border: '1px solid #F59E0B',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <AlertTriangle size={24} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: '#92400E', fontSize: '1rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                    Phase 1 Frontend Demonstration Notice
                  </h4>
                  <p style={{ color: '#78350F', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                    <strong>Submission integration is pending backend deployment.</strong> Your quotation parameters for <em>{formData.product}</em> were validated client-side successfully, but no live API or database exists in this initial phase.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  fontSize: '0.875rem',
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                  Validated Request Summary:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem', color: 'var(--color-text-body)' }}>
                  <li><strong>Requester:</strong> {formData.name} {formData.company ? `(${formData.company})` : ''}</li>
                  <li><strong>Contact:</strong> {formData.email} | {formData.phone}</li>
                  <li><strong>Selected Product:</strong> {formData.product}</li>
                  {formData.dimensions && <li><strong>Dimensions/Size:</strong> {formData.dimensions}</li>}
                  {formData.location && <li><strong>Site Location:</strong> {formData.location}</li>}
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={handleReset} className="btn btn-navy">
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="demo-banner-info" style={{ marginBottom: '1.25rem' }}>
                <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Fill in your project specifications below to receive an itemized factory quotation with freight to your destination.
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-company">
                    Company Name
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Infra Projects Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="modal-email">
                    Work Email <span className="required">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    id="modal-phone"
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
                  <label className="form-label" htmlFor="modal-product">
                    Product Required <span className="required">*</span>
                  </label>
                  <select
                    id="modal-product"
                    className="form-select"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    {sampleProducts.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom Modular Solution">Custom Modular Solution</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="modal-dimensions">
                    Dimensions / Layout
                  </label>
                  <input
                    id="modal-dimensions"
                    type="text"
                    className="form-input"
                    placeholder="e.g. 20ft x 10ft with restroom"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-location">
                  Project Site Location / Delivery Pin Code
                </label>
                <input
                  id="modal-location"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Greater Noida, UP / Bengaluru, KA"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-message">
                  Project Details / Requirements <span className="required">*</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Please specify quantity, intended application, door/window preferences, or urgent timeline constraints..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '0.75rem',
                  marginTop: '1.5rem',
                }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-outline-navy btn-sm"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  Submit Quote Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
