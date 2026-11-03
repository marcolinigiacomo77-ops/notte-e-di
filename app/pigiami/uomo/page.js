import ProductPage from '../../../components/ProductPage';
import { PIGIAMI_UOMO } from '../../../data/products';

export const metadata = { title: 'Pigiami Uomo - Notte&Dì' };

export default function Page() {
  return (
    <ProductPage
      sectionTitle="Pigiami Uomo"
      activePage="pigiami-uomo"
      products={PIGIAMI_UOMO}
    />
  );
}
