'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from './Layout';
import { useCart } from '../context/CartContext';
import { slugify } from '../data/products';
import Reveal from './Reveal';

export default function ProductPage({ sectionTitle, activePage, products, showBreadcrumb = false }) {
  const { addToCart } = useCart();
  const [feedback, setFeedback] = useState(false);
  const base = activePage.replace('-', '/');

  const handleAdd = (name, price) => {
    addToCart(name, price);
    setFeedback(true);
    setTimeout(() => setFeedback(false), 2000);
  };

  const breadcrumb = showBreadcrumb ? (
    <>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>{sectionTitle}</strong>
    </>
  ) : null;

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
        <Reveal as="h2" className="section-title">{sectionTitle}</Reveal>
        <div className="product-grid">
          {products.map((p, i) => (
            <Reveal key={p.name} className="product-card" delay={(i % 3) * 110}>
              <Link href={`/${base}/${slugify(p.name)}`} className="product-link">
                <div className="product-image">{p.image}</div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                <p className="product-price">{p.price}€</p>
              </Link>
              <button
                onClick={() => handleAdd(p.name, p.price)}
                style={{
                  width: '100%', padding: '10px', marginTop: '10px',
                  background: 'var(--primary-pink)', color: 'white',
                  border: 'none', borderRadius: '4px', cursor: 'pointer',
                  fontWeight: 600, fontFamily: 'Montserrat, sans-serif',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.background = 'var(--hover-pink)')}
                onMouseOut={(e) => (e.target.style.background = 'var(--primary-pink)')}
              >
                🛒 Aggiungi
              </button>
            </Reveal>
          ))}
        </div>
      </Layout>
    </>
  );
}
