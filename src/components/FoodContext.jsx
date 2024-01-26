/* eslint-disable react/prop-types */
import { createContext } from "react";
import food from "../assets/BurmeseRecipes.json";
import user from "../assets/UserTypes.json";

export const FoodContext = createContext({});

export function FoodContextProvider({ children }) {
  const foods = food;
  const users = user;

  return (
    <>
      <FoodContext.Provider value={{ foods, users }}>
        {children}
      </FoodContext.Provider>
    </>
  );
}
