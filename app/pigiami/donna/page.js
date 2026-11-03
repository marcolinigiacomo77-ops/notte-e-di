import ProductPage from '../../../components/ProductPage';
import { PIGIAMI_DONNA } from '../../../data/products';

export const metadata = { title: 'Pigiami Donna - Notte&Dì' };

export default function Page() {
  return (
    <ProductPage
      sectionTitle="PIGIAMI DONNA"
      activePage="pigiami-donna"
      products={PIGIAMI_DONNA} showBreadcrumb
    />
  );
}
