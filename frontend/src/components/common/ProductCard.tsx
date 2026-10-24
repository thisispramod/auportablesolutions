import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { ProductItem } from '../../data/products';

interface ProductCardProps {
  product: ProductItem;
  onRequestQuote?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onRequestQuote }) => {
  return (
    <div
      className="card product-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          overflow: 'hidden',
          backgroundColor: '#E2E8F0',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            zIndex: 2,
          }}
        >
          <span className="badge badge-navy" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)' }}>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}
        >
          <Link
            to={`/products/${product.slug}`}
            style={{
              color: 'var(--color-primary-navy)',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-teal)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-primary-navy)';
            }}
          >
            {product.name}
          </Link>
        </h3>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            marginBottom: '1rem',
            lineHeight: 1.5,
            flexGrow: 1,
          }}
        >
          {product.shortDescription}
        </p>

        {/* Feature Specs Snippet */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: '0.875rem',
            marginBottom: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.375rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-body)' }}>
            <CheckCircle2 size={14} color="var(--color-teal)" style={{ flexShrink: 0 }} />
            <span><strong>Insulation:</strong> {product.insulationType}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-body)' }}>
            <CheckCircle2 size={14} color="var(--color-teal)" style={{ flexShrink: 0 }} />
            <span><strong>Lead Time:</strong> {product.leadTime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
          }}
        >
          <Link
            to={`/products/${product.slug}`}
            className="btn btn-outline-navy btn-sm"
            style={{ flex: 1 }}
          >
            Details
            <ArrowRight size={14} />
          </Link>

          <button
            type="button"
            onClick={() => onRequestQuote && onRequestQuote(product.name)}
            className="btn btn-primary btn-sm"
            style={{ flex: 1.2 }}
          >
            <FileText size={14} />
            Quote
          </button>
        </div>
      </div>
    </div>
  );
};
