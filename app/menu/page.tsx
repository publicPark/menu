/**
 * 이 구조로 계속 다른 스타일을 만들거라서 구조를 잘 짜기
 * @returns
 */

import { getMeals } from '@/lib/meals'
import MealsGrid from './_components/meals-grid'
import style from './page.module.scss'
import { TypeMealItem } from '@/types/type'

export default async function Page() {
  const meals = (await getMeals()) as TypeMealItem[]

  return (
    <>
      <header className={style.header}>
        <h1>Jiyun Home</h1>
        <p>Welcome to my humble abodes.</p>
      </header>
      <main className="px-16 py-6">
        <MealsGrid meals={meals}></MealsGrid>
      </main>
    </>
  )
}
