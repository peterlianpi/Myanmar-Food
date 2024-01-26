/* eslint-disable react/prop-types */
import FoodsGrid from "./FoodsGrid";

function Home({ data }) {
  const myData = data;
  return (
    <main className="p-4">
      <h1 className="text-center p-4 font-semibold text-3xl">
        <hr />
        Burmese Recipes
        <hr />
      </h1>
      <FoodsGrid foods={myData.foods} />
    </main>
  );
}
export default Home;
