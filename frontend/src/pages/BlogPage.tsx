import React, { useState } from 'react';
import { Clock, User, ArrowRight, X, AlertCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { sampleArticles, articleCategories, ArticleItem } from '../data/articles';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const filteredArticles =
    selectedCategory === 'All Articles'
      ? sampleArticles
      : sampleArticles.filter((art) => art.category === selectedCategory);

  return (
    <>
      <SEO
        title="Industrial Insights & Modular Architecture Articles"
        description="Read technical guides, modular construction comparisons, and industry trends from AU Portable Solutions."
      />

      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--color-primary-navy)',
          color: '#FFFFFF',
          padding: '4rem 0 3.5rem',
          backgroundImage: 'linear-gradient(rgba(30, 58, 95, 0.94), rgba(21, 42, 69, 0.92)), url(/images/hero-factory.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
              Knowledge Base
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Industry Insights & Technical Guides
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.6, margin: 0 }}>
              Practical guides on prefabricated cabins, sandwich panel insulation, site preparation, and rapid modular architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          {/* Sample CMS Disclaimer */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="demo-banner">
              <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Sample Content Only:</strong> The articles below represent placeholder educational content for this Phase 1 static layout. Content management systems (CMS), author publishing workflows, and dynamic database storage will be integrated in subsequent phases.
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2.5rem',
              justifyContent: 'center',
            }}
          >
            {articleCategories.map((cat) => (
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

          {/* Articles Grid */}
          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={article.image}
                    alt={article.title}
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
                    {article.category}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-muted)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={14} color="var(--color-teal)" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <User size={14} color="var(--color-teal)" />
                      {article.author}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-navy)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {article.title}
                  </h2>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-body)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      flexGrow: 1,
                    }}
                  >
                    {article.summary}
                  </p>

                  <div
                    style={{
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span className="badge badge-gray" style={{ fontSize: '0.75rem' }}>
                      Sample Article
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      className="btn btn-outline-teal btn-sm"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Article Modal Reader */}
      {activeArticle && (
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
            if (e.target === e.currentTarget) setActiveArticle(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
              width: '100%',
              maxWidth: '760px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--color-primary-navy)',
                color: '#FFFFFF',
              }}
            >
              <div>
                <span className="badge badge-teal" style={{ marginBottom: '0.25rem' }}>
                  {activeArticle.category}
                </span>
                <div style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>
                  {activeArticle.readTime} • {activeArticle.author}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  padding: '0.375rem',
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Article Content */}
            <div style={{ padding: '2rem', overflowY: 'auto' }}>
              <div style={{ height: '240px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>
                {activeArticle.title}
              </h2>

              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-teal-dark)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {activeArticle.summary}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx} style={{ margin: 0 }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                <em>This is a sample article prepared for Phase 1 UI demonstration. Official technical articles will be published via backend CMS in Phase 2.</em>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
