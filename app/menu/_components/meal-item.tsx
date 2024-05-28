import { TypeMealItem } from '@/types/type'
import Image from 'next/image'

export default function MealItem({ title, image, summary }: TypeMealItem) {
  return (
    <article className="">
      <header>
        {image && <Image src={image} alt={title} fill />}
        <div>
          <h2>{title}</h2>
        </div>
      </header>
      <p>{summary}</p>
    </article>
  )
}
