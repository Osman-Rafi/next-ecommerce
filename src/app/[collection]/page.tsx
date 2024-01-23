import Grid from '@/components/ui/grid';
import { PRODUCT_COLLECTIONS } from '@/config/navigations';
import ProductOverview from './product-overview';
import { IProductOverview } from './types';

const getProductsCollection = async () => {
  const products = await fetch(PRODUCT_COLLECTIONS).then((res) => res.json());
  return products;
};

const Collection = async () => {
  const products = (await getProductsCollection()) as IProductOverview[];
  return (
    <div className="p-4">
      <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,315px)]">
        {products.map((product) => (
          <ProductOverview
            key={product.id}
            product={product}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Collection;
