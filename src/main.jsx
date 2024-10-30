import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import MealDetails from "./Components/MealDetails";
import Price from "./Components/Price";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    element: <Home></Home>,
    children: [
      {
        path: "/categories",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Categories></Categories>,
      },
      {
        path: "/categories/:categoryId",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`),
        element: <MealDetails></MealDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/price",
        element: <Price></Price>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
