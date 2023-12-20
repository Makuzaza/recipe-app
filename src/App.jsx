import { useState } from "react";
import Input from "./components/Input";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./routes/recipes";
import Recipe from "./components/Recipe";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import "./index.css";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipeByIngr = async (ingredients) => {
    await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=15&apiKey=973a4b9ded3f489a9ce40c0c468c7838`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("fromAPI", data);
        setRecipes(data);
      });
  };

  function searchHandler(e) {
    setSearch(e.target.value);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Input
              fetchRecipeByIngr={fetchRecipeByIngr}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          ),
        },
        {
          path: "/recipes",
          element: (
            <Recipes
              searchHandler={searchHandler}
              search={search}
              recipes={recipes}
            />
          ),
        },
        { path: "recipes/:id", element: <Recipe /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
