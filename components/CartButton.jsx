'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

// Pulsante carrello: rimbalza quando aggiungi un articolo
export default function CartButton() {
  const { cart, addCount } = useCart();
  const [bump, setBump] = useState(false);

  useEffect(() => {
    if (!addCount) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 800);
    return () => clearTimeout(t);
  }, [addCount]);

  return (
    <Link href="/carrello" className={`cart-header-btn${bump ? ' cart-bump' : ''}`}>
      CARRELLO{' '}
      <span className={`cart-count-badge${bump ? ' badge-pop' : ''}`}>{cart.length}</span>
    </Link>
  );
}
