'use client';

import Link from 'next/link';
import Sidebar from './Sidebar';
import SocialSticky from './SocialSticky';
import { useCart } from '../context/CartContext';

export default function Layout({
  children,
  activePage    = '',
  showCart      = true,
  showCollLabel = true,
  showContatti  = true,
  breadcrumb    = null,
  extraSection  = null,
  footer        = null,
}) {
  const { cart } = useCart();

  return (
    <>
      <header>
        {showCart ? (
          <>
            <div className="header-left">
              <h1 className="logo">
                <Link href="/">Notte&amp;Dì</Link>
              </h1>
            </div>
            <div className="header-right">
              <Link href="/carrello" className="cart-header-btn">
                CARRELLO{' '}
                <span className="cart-count-badge">{cart.length}</span>
              </Link>
            </div>
          </>
        ) : (
          <h1 className="logo">
            <Link href="/">Notte&amp;Dì</Link>
          </h1>
        )}
      </header>

      <div className="container">
        <Sidebar
          activePage={activePage}
          showCollLabel={showCollLabel}
          showContatti={showContatti}
        />
        <main className="main-content">
          {breadcrumb && <div className="breadcrumb">{breadcrumb}</div>}
          {children}
        </main>
      </div>

      {extraSection}
      {footer}

      <SocialSticky />
    </>
  );
}
