'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from './Layout';
import { useCart } from '../context/CartContext';

export default function CarrelloPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('✓ Ordine confermato!\n\nGrazie per il tuo acquisto.\nTi invieremo un email di conferma con i dettagli della spedizione.');
    clearCart();
    location.href = '/';
  };

  const breadcrumb = (
    <>
      <Link href="/">Home</Link>
      <span>/</span>
      <strong>Carrello</strong>
    </>
  );

  return (
    <>

      <Layout activePage="" breadcrumb={breadcrumb}>
        <h2 className="section-title">IL TUO CARRELLO</h2>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* ─── Carrello vuoto ─── */}
          {cart.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>Il carrello è vuoto</p>
              <Link href="/" className="main-btn" style={{ display: 'inline-block', padding: '15px 40px', textDecoration: 'none', background: 'var(--primary-pink)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 700 }}>
                Continua lo Shopping
              </Link>
            </div>
          )}

          {/* ─── Carrello con prodotti ─── */}
          {cart.length > 0 && (
            <>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary-pink)' }}>
                    <th style={{ textAlign: 'left',   padding: '15px', fontWeight: 700 }}>PRODOTTO</th>
                    <th style={{ textAlign: 'center', padding: '15px', fontWeight: 700 }}>PREZZO</th>
                    <th style={{ textAlign: 'center', padding: '15px', fontWeight: 700 }}>AZIONE</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '15px' }}>{item.name}</td>
                      <td style={{ textAlign: 'center', padding: '15px', color: 'var(--primary-pink)', fontWeight: 700 }}>{item.price}€</td>
                      <td style={{ textAlign: 'center', padding: '15px' }}>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{ background: '#ff4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                        >
                          Rimuovi
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Riepilogo */}
              <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,230,235,0.5) 100%)', border: '2px solid var(--border-subtle)', borderRadius: '8px', padding: '30px', marginBottom: '40px' }}>
                <h3 style={{ marginTop: 0, color: 'var(--text-dark)', marginBottom: '20px' }}>RIEPILOGO ORDINE</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
                  <span>Subtotale:</span><span>{total.toFixed(2)}€</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
                  <span>Spedizione:</span><span>Gratis</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary-pink)', borderTop: '2px solid var(--primary-pink)' }}>
                  <span>TOTALE:</span><span>{total.toFixed(2)}€</span>
                </div>
              </div>

              {/* Form checkout */}
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '20px' }}>INFORMAZIONI DI SPEDIZIONE</h3>
              <form className="contact-form" style={{ maxWidth: '600px' }} onSubmit={handleCheckout}>

                <div className="form-group">
                  <label htmlFor="fullname">NOME E COGNOME</label>
                  <input type="text" id="fullname" name="fullname" placeholder="Inserisci il tuo nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" id="email" name="email" placeholder="esempio@email.it" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">TELEFONO</label>
                  <input type="tel" id="phone" name="phone" placeholder="+39 123 456 7890" required />
                </div>
                <div className="form-group">
                  <label htmlFor="address">INDIRIZZO DI SPEDIZIONE</label>
                  <input type="text" id="address" name="address" placeholder="Via, numero civico" required />
                </div>
                <div className="form-group">
                  <label htmlFor="city">CITTÀ</label>
                  <input type="text" id="city" name="city" placeholder="Città" required />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">CAP</label>
                  <input type="text" id="zip" name="zip" placeholder="00000" required />
                </div>

                <h3 style={{ color: 'var(--text-dark)', marginTop: '30px', marginBottom: '20px' }}>METODO DI PAGAMENTO</h3>

                <div style={{ padding: '15px', border: '2px solid #ddd', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
                  <input type="radio" id="card" name="payment" value="card" defaultChecked style={{ marginRight: '10px' }} />
                  <label htmlFor="card" style={{ cursor: 'pointer', fontWeight: 600 }}>💳 Carta di Credito</label>
                </div>
                <div style={{ padding: '15px', border: '2px solid #ddd', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
                  <input type="radio" id="paypal" name="payment" value="paypal" style={{ marginRight: '10px' }} />
                  <label htmlFor="paypal" style={{ cursor: 'pointer', fontWeight: 600 }}>🅿️ PayPal</label>
                </div>
                <div style={{ padding: '15px', border: '2px solid #ddd', borderRadius: '4px', marginBottom: '30px', cursor: 'pointer' }}>
                  <input type="radio" id="bank" name="payment" value="bank" style={{ marginRight: '10px' }} />
                  <label htmlFor="bank" style={{ cursor: 'pointer', fontWeight: 600 }}>🏦 Bonifico Bancario</label>
                </div>

                <button type="submit" className="submit-btn" style={{ width: '100%', padding: '18px', fontSize: '1.1rem' }}>
                  COMPLETA L&apos;ACQUISTO
                </button>
              </form>

              <Link href="/" style={{ display: 'inline-block', marginTop: '20px', color: 'var(--primary-pink)', textDecoration: 'none', fontWeight: 600 }}>
                ← Continua lo shopping
              </Link>
            </>
          )}

        </div>
      </Layout>
    </>
  );
}
