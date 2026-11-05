'use client';

import Link from 'next/link';
import Sidebar from './Sidebar';
import SocialSticky from './SocialSticky';
import CartButton from './CartButton';

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
              <CartButton />
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
