'use client';

import { useState } from 'react';
import Layout from './Layout';

export default function ContattiPage() {
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    // ⬇️  Aggiungi qui la chiave Web3Forms (vedi .env.local.example)
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '');

    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>

      <Layout activePage="contatti">
        <h2 className="section-title">CONTATTI</h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* Info contatto */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,230,235,0.5) 100%)', border: '2px solid var(--border-subtle)', borderRadius: '8px', padding: '40px', marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '30px' }}>INFORMAZIONI DI CONTATTO</h3>

            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: 'var(--primary-pink)', marginBottom: '8px' }}>📧 EMAIL</h4>
              <p style={{ margin: 0, color: '#666' }}>chiaramachella@libero.it</p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: 'var(--primary-pink)', marginBottom: '8px' }}>📱 TELEFONO</h4>
              <p style={{ margin: 0, color: '#666' }}>+39 348 313 6509</p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: 'var(--primary-pink)', marginBottom: '8px' }}>📍 INDIRIZZO BOUTIQUE</h4>
              <p style={{ margin: 0, color: '#666' }}>
                Corso Fratelli Cairoli, Macerata<br />Italy
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--primary-pink)', marginBottom: '8px' }}>🕐 ORARI DI APERTURA</h4>
              <p style={{ margin: 0, color: '#666', lineHeight: '1.8' }}>
                Lunedì: Mattina chiuso<br />
                Martedì – Sabato:<br />
                &nbsp;&nbsp;Mattina: 9:00 – 12:30<br />
                &nbsp;&nbsp;Pomeriggio: 16:00 – 19:30<br />
                Domenica: chiuso
              </p>
            </div>
          </div>

          {/* Form messaggio */}
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '25px' }}>INVIACI UN MESSAGGIO</h3>
          <form className="contact-form" style={{ marginBottom: '40px' }} onSubmit={handleSubmit}>
            {/* Campo nascosto per Web3Forms */}
            <input type="hidden" name="subject" value="Messaggio da pagina Contatti - Notte&Dì" />

            <div className="form-group">
              <label htmlFor="name">NOME E COGNOME</label>
              <input type="text" id="name" name="name" placeholder="Inserisci il tuo nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">TUA EMAIL</label>
              <input type="email" id="email" name="email" placeholder="esempio@email.it" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject_msg">OGGETTO</label>
              <input type="text" id="subject_msg" name="subject_msg" placeholder="Oggetto del messaggio" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGGIO</label>
              <textarea id="message" name="message" placeholder="Scrivi il tuo messaggio..." required style={{ minHeight: '200px' }} />
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'INVIO IN CORSO...' : 'INVIA MESSAGGIO'}
            </button>

            {status === 'success' && (
              <p style={{ color: '#4caf50', fontWeight: 700, marginTop: '12px', textAlign: 'center' }}>
                ✓ Messaggio inviato! Ti contatteremo presto.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#f44336', fontWeight: 700, marginTop: '12px', textAlign: 'center' }}>
                ✗ Errore nell&#39;invio. Riprova o contattaci via WhatsApp.
              </p>
            )}
          </form>

          {/* Social */}
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '25px' }}>SEGUICI SUI SOCIAL</h3>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            <a
              href="https://www.facebook.com/NotteedÌ-Macerata-Notte-e-DÌ-intimo-100063919485863/"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 30px', background: '#3b5998', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 600 }}
            >
              FACEBOOK
            </a>
            <a
              href="https://wa.me/3483136509?text=Ciao%20Notte%26Di%20vorrei%20informazioni"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 30px', background: '#25d366', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 600 }}
            >
              WHATSAPP
            </a>
          </div>

        </div>
      </Layout>
    </>
  );
}
