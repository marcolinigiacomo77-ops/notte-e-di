'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from './Layout';
import { useCart } from '../context/CartContext';
import Reveal from './Reveal';

export default function ProductDetail({ product, sectionTitle, activePage, basePath }) {
  const { addToCart } = useCart();
  const [feedback, setFeedback] = useState(false);

  const handleAdd = () => {
    addToCart(product.name, product.price);
    setFeedback(true);
    setTimeout(() => setFeedback(false), 2000);
  };

  const breadcrumb = (
    <>
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href={`/${basePath}`}>{sectionTitle}</Link>
      <span>/</span>
      <strong>{product.name}</strong>
    </>
  );

  return (
    <>
      {feedback && (
        <div className="cart-toast" style={{
          position: 'fixed', top: '100px', right: '20px',
          background: 'var(--primary-pink)', color: 'white',
          padding: '12px 20px', borderRadius: '4px',
          zIndex: 9999, fontWeight: 700,
        }}>
          ✓ Articolo aggiunto al carrello
        </div>
      )}

      <Layout activePage={activePage} breadcrumb={breadcrumb}>
        <div className="product-detail">
          <Reveal className="product-detail-image">{product.image}</Reveal>
          <Reveal className="product-detail-info" delay={150}>
            <h2 className="section-title">{product.name}</h2>
            <p className="product-detail-desc">{product.long || product.desc}</p>
            <p className="product-price">{product.price}€</p>
            <button
              onClick={handleAdd}
              style={{
                padding: '12px 28px', marginTop: '16px',
                background: 'var(--primary-pink)', color: 'white',
                border: 'none', borderRadius: '4px', cursor: 'pointer',
                fontWeight: 600, fontFamily: 'Montserrat, sans-serif',
              }}
            >
              🛒 Aggiungi al carrello
            </button>
            <p style={{ marginTop: '24px' }}>
              <Link href={`/${basePath}`}>← Torna a {sectionTitle.toLowerCase()}</Link>
            </p>
          </Reveal>
        </div>
      </Layout>
    </>
  );
}
