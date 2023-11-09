import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// const itemList = [
//   {
//     title: 'Item 1',
//     image: '/assets/images/headphone.png'
//   },
//   {
//     title: 'Item 2',
//     image: '/assets/images/headphone.png'
//   },
//   {
//     title: 'Item 3',
//     image: '/assets/images/headphone.png'
//   },
//   {
//     title: 'Item 4',
//     image: '/assets/images/headphone.png'
//   }
// ];

interface CategoryCardProps {
  items: Array<{
    title: string;
    image: string;
  }>;
}

const Item = ({ item }: any) => {
  return (
    <div>
      <Image
        src="/assets/images/headphone.png"
        alt="image"
        width={100}
        height={100}
      />
      <p className="text-xs my-3">{item.title}</p>
    </div>
  );
};

export const CategoryCard: FC<CategoryCardProps> = ({ items }) => {
  return (
    <div className="bg-slate-50 px-3">
      <div className="pb-4 pt-1">
        <h3 className="py-4">Gaming accessories</h3>
        <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-2">
          {items.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
      <Link href="#">See more</Link>
    </div>
  );
};
