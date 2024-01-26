/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Center from "./Center";
import FoodItem from "./FoodItem";

function FoodsGrid({ foods, currentPage, itemsPerPage }) {
  const myFoods = foods;
  const currentPageNumber = Number(currentPage);
  const itemsPerPageNumber = Number(itemsPerPage);

  // Validate that currentPage and itemsPerPage are valid numbers
  if (
    isNaN(currentPageNumber) ||
    isNaN(itemsPerPageNumber) ||
    itemsPerPageNumber <= 0
  ) {
    console.error("Invalid currentPage or itemsPerPage values.");
    return null;
  }

  const startIndex = (currentPageNumber - 1) * itemsPerPageNumber;
  const endIndex = startIndex + itemsPerPageNumber;
  const visibleFoods = myFoods.slice(startIndex, endIndex);

  return (
    <Center>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        {visibleFoods.map((food) => (
          <Link to={`/${food.Guid}`} key={food.Guid}>
            <FoodItem food={food} />
          </Link>
        ))}
      </div>
    </Center>
  );
}
export default FoodsGrid;
