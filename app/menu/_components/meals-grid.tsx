import { TypeMealItem } from '@/types/type'
import MealItem from './meal-item'

export default function MealsGrid({ meals }: { meals: Array<TypeMealItem> }) {
  return (
    <ul className="grid">
      {meals.map((meal) => (
        <li key={meal.id} className="grid-cols-1">
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}
