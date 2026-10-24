import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';

const NotFoundPage: React.FC = () => (
  <div className="container section-padding" style={{ textAlign: 'center' }}>
    <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>404</h1>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
      The page you requested does not exist or has been moved.
    </p>
    <a href="/" className="btn btn-primary">
      Return to Home
    </a>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
