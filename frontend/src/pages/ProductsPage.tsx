import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, AlertCircle, RefreshCw } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ProductCard } from '../components/common/ProductCard';
import { sampleProducts, productCategories } from '../data/products';
import { triggerQuoteModal } from '../components/layout/Layout';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Products';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && (productCategories as readonly string[]).includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All Products') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.keyFeatures.some((f) => f.toLowerCase().includes(q)) ||
        product.applications.some((a) => a.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Products & Modular Solutions"
        description="Explore AU Portable Solutions complete catalog of container offices, portable cabins, pre-engineered buildings, security cabins, and sandwich panels."
      />

      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--color-primary-navy)',
          color: '#FFFFFF',
          padding: '4rem 0 3.5rem',
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.94), rgba(21, 42, 69, 0.94)), url(/images/container-office.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
              Solutions Catalog
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Prefabricated & Modular Products
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0 }}>
              Heavy-duty steel structures, high-density insulated cabins, and customized modular architectures engineered to exact project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          {/* Sample Data Disclaimer Notice */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="demo-banner">
              <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Local Sample Product Catalog:</strong> The products and specifications below reflect verified AU Portable Solutions profile categories. They are loaded from a separated local data module (`src/data/products.ts`) for this Phase 1 frontend interface.
              </div>
            </div>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-subtle)',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Search row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  flexGrow: 1,
                  maxWidth: '480px',
                }}
              >
                <Search
                  size={18}
                  color="var(--color-text-muted)"
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search products by keyword, size, or application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input"
                  style={{
                    paddingLeft: '2.5rem',
                    backgroundColor: '#F8FAFC',
                  }}
                />
              </div>

              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Showing <strong>{filteredProducts.length}</strong> of {sampleProducts.length} models
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                borderTop: '1px solid var(--color-border-subtle)',
                paddingTop: '1rem',
              }}
            >
              {productCategories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      padding: '0.5rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      border: isSelected
                        ? '1px solid var(--color-teal)'
                        : '1px solid var(--color-border-subtle)',
                      backgroundColor: isSelected ? 'var(--color-teal)' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : 'var(--color-primary-navy)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-3" style={{ gap: '1.75rem' }}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onRequestQuote={(name) => triggerQuoteModal(name)}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>
                No matching products found
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                We couldn't find any products matching your search term "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Products');
                }}
                className="btn btn-navy btn-sm"
              >
                <RefreshCw size={14} />
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
