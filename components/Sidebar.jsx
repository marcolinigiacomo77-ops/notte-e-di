'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const OPEN  = { maxHeight: '200px' };
const CLOSE = { maxHeight: '0' };

export default function Sidebar({ activePage = '', showCollLabel = true, showContatti = true }) {
  const [open, setOpen] = useState({ pigiami: false, costumi: false, intimo: false });

  // Apre automaticamente l'accordion della pagina corrente
  useEffect(() => {
    setOpen({
      pigiami: activePage === 'pigiami-donna' || activePage === 'pigiami-uomo',
      costumi: activePage === 'costumi-donna' || activePage === 'costumi-uomo',
      intimo:  activePage === 'intimo-donna'  || activePage === 'intimo-uomo',
    });
  }, [activePage]);

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const linkClass = (page) => (activePage === page ? 'active-link' : '');

  return (
    <aside className="sidebar">
      {showCollLabel && <h3>COLLEZIONI</h3>}

      {/* PIGIAMI */}
      <button
        className={`accordion${open.pigiami ? ' active' : ''}`}
        onClick={() => toggle('pigiami')}
      >
        PIGIAMI
      </button>
      <div className="panel" style={open.pigiami ? OPEN : CLOSE}>
        <Link href="/pigiami/donna" className={linkClass('pigiami-donna')}>Donna</Link>
        <Link href="/pigiami/uomo"  className={linkClass('pigiami-uomo')}>Uomo</Link>
      </div>

      {/* COSTUMI */}
      <button
        className={`accordion${open.costumi ? ' active' : ''}`}
        onClick={() => toggle('costumi')}
      >
        COSTUMI
      </button>
      <div className="panel" style={open.costumi ? OPEN : CLOSE}>
        <Link href="/costumi/donna" className={linkClass('costumi-donna')}>Donna</Link>
        <Link href="/costumi/uomo"  className={linkClass('costumi-uomo')}>Uomo</Link>
      </div>

      {/* INTIMO */}
      <button
        className={`accordion${open.intimo ? ' active' : ''}`}
        onClick={() => toggle('intimo')}
      >
        INTIMO
      </button>
      <div className="panel" style={open.intimo ? OPEN : CLOSE}>
        <Link href="/intimo/donna" className={linkClass('intimo-donna')}>Donna</Link>
        <Link href="/intimo/uomo"  className={linkClass('intimo-uomo')}>Uomo</Link>
      </div>

      <Link href="/storia"   className={`history-link ${linkClass('storia')}`}>LA NOSTRA STORIA</Link>
      {showContatti && (
        <Link href="/contatti" className={`history-link ${linkClass('contatti')}`}>CONTATTI</Link>
      )}
    </aside>
  );
}
