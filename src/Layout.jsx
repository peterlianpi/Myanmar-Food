import { useContext } from "react";
import Home from "./components/Home";
import { FoodContext } from "./components/FoodContext";

const Layout = () => {
  const data = useContext(FoodContext);

  return (
    <>
      <Home data={data} />
      <footer className="bg-black text-white text-center p-4">
        Copyright © 2024 Peter
      </footer>
    </>
  );
};
export default Layout;
