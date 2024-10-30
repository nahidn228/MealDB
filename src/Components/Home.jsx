import { Outlet, useLoaderData } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Navlink from "./Navlink";

const Home = () => {
  const meals = useLoaderData();
  const { categories } = meals;
  return (
    <div>
      <div className="sticky top-0 z-50 bg-transparent">
        <Header></Header>
      </div>
      <div className="border-r-2 fixed w-56 h-screen overflow-y-scroll ml-6 bg-white ">
          <Navlink
            key={categories.idCategory}
            categories={categories}
          ></Navlink>
        </div>
      <div className=" my-10 ml-60">
        
        <div className="col-span-3 ">
          <Outlet></Outlet>
        </div>
      <Footer></Footer>
      </div>

    </div>
  );
};

export default Home;
