import ProductPage from '../../../components/ProductPage';
import { INTIMO_UOMO } from '../../../data/products';

export const metadata = { title: 'Intimo Uomo - Notte&Dì' };

export default function Page() {
  return (
    <ProductPage
      sectionTitle="Intimo Uomo"
      activePage="intimo-uomo"
      products={INTIMO_UOMO}
    />
  );
}
