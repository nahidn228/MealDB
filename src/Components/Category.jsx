/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Category = ({ category }) => {
  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
    category;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className="h-50" src={strCategoryThumb} alt={strCategory} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {strCategory} </h2>
          {/* <p> {strCategoryDescription} </p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
