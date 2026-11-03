import { notFound } from 'next/navigation';
import ProductDetail from '../../../../components/ProductDetail';
import { SECTIONS, slugify } from '../../../../data/products';

export function generateStaticParams() {
  const params = [];
  for (const key of Object.keys(SECTIONS)) {
    const [section, gender] = key.split('/');
    for (const p of SECTIONS[key].products) {
      params.push({ section, gender, slug: slugify(p.name) });
    }
  }
  return params;
}

function findProduct(section, gender, slug) {
  const entry = SECTIONS[`${section}/${gender}`];
  if (!entry) return null;
  const product = entry.products.find((p) => slugify(p.name) === slug);
  return product ? { entry, product } : null;
}

export function generateMetadata({ params }) {
  const found = findProduct(params.section, params.gender, params.slug);
  if (!found) return { title: 'Prodotto non trovato - Notte&Dì' };
  return { title: `${found.product.name} - Notte&Dì` };
}

export default function ProductPageDetail({ params }) {
  const found = findProduct(params.section, params.gender, params.slug);
  if (!found) notFound();

  const { entry, product } = found;
  const basePath = `${params.section}/${params.gender}`;

  return (
    <ProductDetail
      product={product}
      sectionTitle={entry.title}
      activePage={`${params.section}-${params.gender}`}
      basePath={basePath}
    />
  );
}
