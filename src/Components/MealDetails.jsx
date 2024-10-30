/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const categoryMeals = useLoaderData();
  //const { categories } = meals
  const { meals } = categoryMeals;
  console.log(meals);

  return (
    <div className="ml-14">
      <h1>Total Meal: {meals.length}</h1>

      {meals.map((meal) => (
        <div>
          <h2> {meal.strMeal} </h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
      ))}
    </div>
  );
};

export default MealDetails;
