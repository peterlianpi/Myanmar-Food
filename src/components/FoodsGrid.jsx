/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Center from "./Center";
import FoodItem from "./FoodItem";

function FoodsGrid({ foods }) {
  const myFoods = foods;
  return (
    <Center>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        {myFoods.map((food) => (
          <Link to={`/${food.Guid}`} key={food.Guid}>
            <FoodItem food={food} />
          </Link>
        ))}
      </div>
    </Center>
  );
}
export default FoodsGrid;
