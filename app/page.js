import Link from 'next/link';
import Layout from '../components/Layout';
import ContactSection from '../components/ContactSection';

export const metadata = { title: 'Notte&Dì - Home' };

const COLLECTIONS = [
  { label: 'PIGIAMI', base: 'pigiami' },
  { label: 'COSTUMI', base: 'costumi' },
  { label: 'INTIMO', base: 'intimo' },
];

export default function Home() {
  return (
    <Layout
      activePage="home"
      breadcrumb={<strong>Home</strong>}
      extraSection={<ContactSection />}
    >
      <h2 className="welcome-title">BENVENUTI IN NOTTE&amp;DÌ</h2>

      <div className="collections-grid">
        {COLLECTIONS.map((c, i) => (
          <div className="collection-box" key={c.base} style={{ '--i': i }}>
            <Link href={`/${c.base}/donna`} className="main-btn">
              {c.label}
            </Link>
            <div className="dropdown-menu">
              <Link href={`/${c.base}/donna`}>DONNA</Link>
              <Link href={`/${c.base}/uomo`}>UOMO</Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
