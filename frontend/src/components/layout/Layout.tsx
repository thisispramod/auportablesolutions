import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { QuoteModal } from '../common/QuoteModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleOpenQuote = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct('');
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  // Provide handler via custom event or context for child components
  useEffect(() => {
    const onTriggerQuote = (e: Event) => {
      const customEvent = e as CustomEvent<{ productName?: string }>;
      handleOpenQuote(customEvent.detail?.productName);
    };
    window.addEventListener('open-quote-modal', onTriggerQuote);
    return () => window.removeEventListener('open-quote-modal', onTriggerQuote);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onRequestQuote={() => handleOpenQuote()} />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        defaultProduct={selectedProduct}
      />
    </div>
  );
};

// Global helper to trigger quote modal from any component
export const triggerQuoteModal = (productName?: string) => {
  window.dispatchEvent(
    new CustomEvent('open-quote-modal', {
      detail: { productName },
    })
  );
};
