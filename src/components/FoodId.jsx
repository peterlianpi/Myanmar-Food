import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FoodContext } from "./FoodContext";
import BookMark from "./icons/BookMark";

function FoodId() {
  const { id } = useParams();
  const data = useContext(FoodContext);
  const foods = data.foods;
  const users = data.users;
  const navigate = useNavigate();
  const [imageExists, setImageExists] = useState(false);

  const selectedFood = foods.find((food) => food.Guid === id);

  useEffect(() => {
    const img = new Image();
    img.src = `/img/${selectedFood.Name}.jpg`;
    img.onload = () => {
      setImageExists(true);
    };
    img.onerror = () => {
      setImageExists(false);
    };
  }, [selectedFood.Name]);

  const back = () => {
    navigate("..");
  };

  if (!selectedFood) {
    return <div>Food not found!</div>;
  }

  return (
    <>
      <div className="flex flex-col px-8 sm:p-10 sm:grid sm:grid-cols-my-Columns sm:h-80 items-center text-center my-4 relative">
        <div className="h-70 w-70 sm:mr-0 sm:ml-auto sm:w-[450px] sm:h-auto">
          {imageExists ? (
            <img
              className="w-full h-full object-center rounded-lg"
              src={`/img/${selectedFood.Name}.jpg`}
              alt={selectedFood.Name}
            />
          ) : (
            <img
              className="object-contian w-full"
              src={`/img/default.png`}
              alt={`Photo of default.png`}
            />
          )}
        </div>
        <div className="text-left sm:p-8 relative">
          <button
            className="absolute sm:right-10 sm:top-10  py-1 px-4 rounded-lg bg-blue-700 text-white hover:bg-blue-600 right-0 top-4"
            onClick={() => back()}
          >
            Back
          </button>
          <div>
            <p className="font-semibold italic text-2xl pt-4 ">For</p>
            <div className="text-gray-700 text-xl pb-6 italic">
              {users.map(
                (user) =>
                  selectedFood.UserType === user.UserCode &&
                  user.UserMMType + " Or " + user.UserEngType
              )}
            </div>
            <hr />
          </div>
          <p className="font-semibold italic text-2xl pb-2 ">Menu Name</p>
          <p className=" italic text-xl pb-6">{selectedFood.Name}</p>
          <hr />
          <p className="font-semibold italic text-2xl pt-2 pb-4 ">
            CookingInstructions
          </p>
          <div className="pl-6">
            <BookMark />
            <p className="pl-6 pb-4">{selectedFood.Ingredients} </p>
          </div>
          <hr />
          <p className=" font-semibold italic text-2xl py-2 ">How to cook?</p>
          <p className="mb-4">{selectedFood.CookingInstructions}</p>
        </div>
      </div>
    </>
  );
}
export default FoodId;
