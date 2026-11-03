'use client';

import { useState } from 'react';

// ─── Sezione Contatti (fuori dal .container) ────────────────────────────────
export default function ContactSection() {
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
    <section style={{ margin: '80px 0 0', background: 'linear-gradient(to right, #ffffff 0%, #ffffff 48%, #f5e6eb 48%, #f5e6eb 100%)' }}>
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto' }}>

        {/* LEFT - Informazioni */}
        <div style={{ flex: 1, padding: '60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ color: 'var(--text-dark)', fontSize: '1.8rem', marginTop: 0, marginBottom: '40px', fontWeight: 700 }}>
            INFORMAZIONI
          </h2>

          <div style={{ marginBottom: '35px' }}>
            <h4 style={{ color: 'var(--primary-pink)', margin: '0 0 8px 0', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '1px' }}>📧 EMAIL</h4>
            <p style={{ margin: 0, color: '#666' }}>chiaramachella@libero.it</p>
          </div>

          <div style={{ marginBottom: '35px' }}>
            <h4 style={{ color: 'var(--primary-pink)', margin: '0 0 8px 0', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '1px' }}>📱 TELEFONO</h4>
            <p style={{ margin: 0, color: '#666' }}>+39 348 313 6509</p>
          </div>

          <div style={{ marginBottom: '35px' }}>
            <h4 style={{ color: 'var(--primary-pink)', margin: '0 0 8px 0', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '1px' }}>📍 INDIRIZZO</h4>
            <p style={{ margin: 0, color: '#666' }}>
              Corso Fratelli Cairoli<br />Macerata, Italy
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--primary-pink)', margin: '0 0 8px 0', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '1px' }}>🕐 ORARI</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '0.95rem', lineHeight: '1.8' }}>
              Lunedì: Mattina chiuso<br />
              Martedì – Sabato:<br />
              &nbsp;&nbsp;Mattina: 9:00 – 12:30<br />
              &nbsp;&nbsp;Pomeriggio: 16:00 – 19:30<br />
              Domenica: chiuso
            </p>
          </div>
        </div>

        {/* RIGHT - Form contatti */}
        <div style={{ flex: 1, padding: '60px 40px', background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,230,235,0.5) 100%)' }}>
          <h2 style={{ color: 'var(--text-dark)', fontSize: '1.8rem', marginTop: 0, marginBottom: '40px', fontWeight: 700 }}>
            CONTATTACI
          </h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Campo nascosto per Web3Forms */}
            <input type="hidden" name="subject" value="Nuova richiesta da Notte&Dì" />

            <div className="form-group">
              <label htmlFor="name">NOME E COGNOME</label>
              <input type="text" id="name" name="name" placeholder="Inserisci il tuo nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">TUA EMAIL</label>
              <input type="email" id="email" name="email" placeholder="esempio@email.it" required />
            </div>

            <div className="form-group">
              <label htmlFor="product">TIPO DI PRODOTTO</label>
              <select id="product" name="product" required>
                <option value="">Seleziona un prodotto...</option>
                <option value="intimo-uomo">Intimo Uomo</option>
                <option value="intimo-donna">Intimo Donna</option>
                <option value="pigiami-uomo">Pigiami Uomo</option>
                <option value="pigiami-donna">Pigiami Donna</option>
                <option value="costumi-uomo">Costumi Uomo</option>
                <option value="costumi-donna">Costumi Donna</option>
                <option value="general">Domanda Generale</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGGIO</label>
              <textarea id="message" name="message" placeholder="Scrivi qui la tua richiesta..." required />
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
        </div>

      </div>
    </section>
  );
}
