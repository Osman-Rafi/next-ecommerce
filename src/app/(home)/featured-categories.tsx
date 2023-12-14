/**
 * This component is responsible rendering the content of featured categories cards
 */

import { routes } from '@/config';
import FeaturedCategoryCard from './components/featured-category-card';
import { IFeaturedDetailsProps } from './types';

import { clsx } from 'clsx';
import Link from 'next/link';

export const revalidate = 1; // revalidation time

async function getFeaturedCategories() {
  return (await fetch(routes.FEATERED_CATEGORIES).then((res) =>
    res.json()
  )) as IFeaturedDetailsProps[];
}

export default async function FeaturedCategories() {
  const featuredCategories = await getFeaturedCategories();
  const gridCount = (count: number): string =>
    clsx([
      'inline-grid gap-2.5 my-3 w-full',
      { 'grid-cols-1': count === 1 },
      { 'grid-cols-2': count === 4 }
    ]);

  return (
    <div className="inline-grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 p-6 w-full">
      {featuredCategories.map((item, index) => (
        <div
          key={index}
          className="bg-white p-3"
        >
          <h3 className="text-lg font-semibold ml-3 mt-2">{item.title}</h3>
          <div className={gridCount(item.categories.length)}>
            {item.categories.map((category) => (
              <FeaturedCategoryCard
                key={category.id}
                title="Test"
                category={category}
              />
            ))}
          </div>
          <Link
            href="#"
            className="text-xs ml-3 text-blue-600/50 font-semibold block mb-2"
          >
            See more
          </Link>
        </div>
      ))}
    </div>
  );
}
