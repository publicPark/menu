import { TypeMeal } from '@/types/type';
import MealItem from './meal-item';

export default function MealsGrid({ meals }: { meals: Array<TypeMeal> }) {
  return (
    <ul className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
