/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "../App.css";
const Navlink = ({ categories }) => {
  //console.log(categories);
  
  return (
    <div>
      <nav className="flex flex-col gap-4 font-medium">
        <button className="btn">
          <NavLink to="/">Home</NavLink>
        </button>

        {categories.map((category, idx) => (
          <button key={idx} className="btn">
            <NavLink to={`/Categories/${category.strCategory}`}>
              {category.strCategory}
              <img className="h-10" src={category.strCategoryThumb} alt="" />
            </NavLink>
          </button>
        ))}
        <button className="btn">
          <NavLink to="/Categories">Categories</NavLink>
        </button>
        <button className="btn">
          <NavLink to="/about">About Us</NavLink>
        </button>
        <button className="btn">
          <NavLink to="/contact">Contact</NavLink>
        </button>
        <button className="btn">
          {" "}
          <NavLink to="/price">Price</NavLink>
        </button>
      </nav>
    </div>
  );
};

export default Navlink;
