import MealItem from './MealItem';
import Card from '../UI/Card';
import classes from './MealsItemList.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
const MealsItemList = () => {
  return (
    <section className={classes.meals}>
      <Card>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
            description={meal.description}
          />
        ))}
      </Card>
    </section>
  );
};

export default MealsItemList;
