import LoadingSalad from '@/app/_components/layout/loading-salad';
import { getHouses } from '@/lib/meals';
import { TypeHouse } from '@/types/type';
import Link from 'next/link';
import { Suspense } from 'react';
import GoogleMap from '../_components/google-map';

async function Houses() {
  const houses = (await getHouses()) as TypeHouse[];

  return (
    <>
      <GoogleMap houses={houses} />
      <ul className="text-center mt-16 border-1">
        {houses.map((house, index) => (
          <li className="underline" key={index}>
            <Link href={`/menu/${house.key}`}>{house.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Page() {
  return (
    <>
      <h1>Houses</h1>
      <section className="">
        <Suspense fallback={<LoadingSalad />}>
          <Houses />
        </Suspense>
      </section>
    </>
  );
}
