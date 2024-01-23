import Grid from '@/components/ui/grid';

import Image from 'next/image';
import React from 'react';
import { IProductOverview } from './types';
import { truncate } from '@/utils/stringUtils';

interface ProductOverviewProps {
  product: IProductOverview;
}

const ProductOverview = ({
  product
}: ProductOverviewProps): React.JSX.Element => {
  return (
    <Grid.Item className="relative cursor-pointer border border-slate-300 rounded-md overflow-hidden">
      <Image
        className="aspect-[2/3] w-full hover:scale-105 duration-300 transform-gpu"
        alt={product.title}
        src={product.image}
        height={100}
        width={100}
        unoptimized
      />
      <div className="absolute bottom-[1em] left-[1em] flex items-center border border-gray-400 rounded-full px-3 p-1 bg-neutral-100">
        <h2 className="font-bold text-sm text-[11px]">
          {truncate(product.title, 20)}
        </h2>
        <p className="ml-3 bg-blue-500 text-white font-bold rounded-full p-1 text-[11px] px-2">
          ${product.price}
        </p>
      </div>
    </Grid.Item>
  );
};

export default ProductOverview;
