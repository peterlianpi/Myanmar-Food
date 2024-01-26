/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function FoodItem({ food }) {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `/img/${food.Name}.jpg`;
    img.onload = () => {
      setImageExists(true);
    };
    img.onerror = () => {
      setImageExists(false);
    };
  }, [food.Name]);

  const myFood = food;
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all  flex flex-col md:flex-row h-70 md:h-40 max-w-auto  items-center ">
      <div className="flex  w-40 h-40 md:h-full  rounded-md m-0 p-0 relative">
        {imageExists ? (
          <img
            className="object-contian w-full"
            src={`/img/${myFood.Name}.jpg `}
            alt={`Photo of ${myFood.Name}`}
          />
        ) : (
          <img
            className="object-contian w-full"
            src={`/img/default.png`}
            alt={`Photo of default.png`}
          />
        )}

        <div className="bg-green-500 p-1 rounded-full absolute -left-2 -bottom-1 w-44 text-xs text-center shadow-sm border border-red-100 md:-left-5 md:-bottom-4 text-white">
          Code : {myFood.Guid}
        </div>
      </div>

      <h2 className="text-gray-600 text-md  md:text-sm font-semibold px-4 py-4 md:w-[230px] h-auto md:text-left w-full">
        {myFood.Name}
      </h2>
    </div>
  );
}
export default FoodItem;
