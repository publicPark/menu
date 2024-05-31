/**
 * 이 구조로 계속 다른 스타일을 만들거라서 구조를 잘 짜기
 * @returns
 */

import { getHouse, getMeals } from '@/lib/meals';
import MealsGrid from '../_components/meals-grid';
import style from './page.module.scss';
import { TypeHouse, TypeMeal } from '@/types/type';
import { Suspense } from 'react';
import Loading from '../../_components/layout/loading-salad';

async function Meals({ houseKey }: { houseKey: string }) {
  const meals = (await getMeals(houseKey)) as TypeMeal[];

  return <MealsGrid meals={meals}></MealsGrid>;
}

async function House({ houseKey }: { houseKey: string }) {
  const house = (await getHouse(houseKey)) as TypeHouse;
  return (
    <>
      <h1>{house.title}</h1>
      <section className="whitespace-pre-line mx-auto">{house.summary}</section>
    </>
  );
}

export default function Page({
  params: { houseKey },
}: {
  params: { houseKey: string };
}) {
  return (
    <>
      <header className={style.header}>
        <House houseKey={houseKey} />
      </header>
      <main className="px-16 py-6">
        <Suspense fallback={<Loading />}>
          <Meals houseKey={houseKey} />
        </Suspense>
      </main>
    </>
  );
}
