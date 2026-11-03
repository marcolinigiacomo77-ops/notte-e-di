import ProductPage from '../../../components/ProductPage';
import { COSTUMI_UOMO } from '../../../data/products';

export const metadata = { title: 'Costumi Uomo - Notte&Dì' };

export default function Page() {
  return (
    <ProductPage
      sectionTitle="Costumi Uomo"
      activePage="costumi-uomo"
      products={COSTUMI_UOMO}
    />
  );
}
