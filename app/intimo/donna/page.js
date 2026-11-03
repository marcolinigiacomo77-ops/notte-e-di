import ProductPage from '../../../components/ProductPage';
import { INTIMO_DONNA } from '../../../data/products';

export const metadata = { title: 'Intimo Donna - Notte&Dì' };

export default function Page() {
  return (
    <ProductPage
      sectionTitle="Intimo Donna"
      activePage="intimo-donna"
      products={INTIMO_DONNA}
    />
  );
}
