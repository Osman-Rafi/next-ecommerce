/**
 * This component is responsible for loading categories card in home page.
 * In one card, there could be one, two or four categories.
 */

/**
 * !Category card Type
 */

import Image from 'next/image';

const FeaturedCategoryCard = ({ category }: any) => {
  return (
    <div className="mt-3 px-3">
      <Image
        className=""
        src="/assets/images/headphone.jpg"
        alt={'image:' + category.name}
        width={100}
        height={100}
        quality={90}
      />
      <p className="text-xs font-normal my-3">{category.name}</p>
    </div>
  );
};

export default FeaturedCategoryCard;
