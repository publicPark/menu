import { TypeMeal } from '@/types/type';
import Image from 'next/image';
import style from './meal-item.module.scss';

export default function MealItem({ title, image, summary }: TypeMeal) {
  return (
    <article className={style.card}>
      {image && (
        <header className="relative w-full h-32 sm:h-48">
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </header>
      )}
      <main className="p-2">
        <h2 className="font-bold">{title}</h2>
        <p>{summary}</p>
      </main>
    </article>
  );
}
