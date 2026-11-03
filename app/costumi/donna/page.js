import ProductPage from '../../../components/ProductPage';
import { COSTUMI_DONNA } from '../../../data/products';

export const metadata = { title: 'Costumi Donna - Notte&Dì' };

export default function Page() {
  return (
    <ProductPage
      sectionTitle="Costumi Donna"
      activePage="costumi-donna"
      products={COSTUMI_DONNA}
    />
  );
}
