import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { FoodContextProvider } from "./components/FoodContext";
import FoodId from "./components/FoodId";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <FoodContextProvider>
          <Routes>
            <Route path="*" element={<Layout />} />
            <Route path=":id" element={<FoodId />} />
          </Routes>
        </FoodContextProvider>
      </BrowserRouter>
    </>
  );
}
