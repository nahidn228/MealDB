import { useLoaderData } from "react-router-dom";
import Category from "./Category";
const Categories = () => {
  const meals = useLoaderData();
  
  const { categories } = meals;
  //console.log(categories);
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl">
        Our Meal Categories: {categories.length}
      </h2>
      <div className="grid grid-cols-2 gap-6 p-10">
        {categories.map((category) => (
          <Category key={Category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
