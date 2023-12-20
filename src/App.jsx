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
  const [oneRecipe, setOneRecipe] = useState({});

  const fetchRecipeByIngr = async (ingredients) => {
    await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=973a4b9ded3f489a9ce40c0c468c7838`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log("AllRecipe", data);
        setRecipes(data);
      });
  };

  const fetchRecipeById = async (id) => {
    await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=973a4b9ded3f489a9ce40c0c468c7838`
    )
      .then((response) => response.json())
      .then((data2) => {
        // console.log("oneRecipe", data2);
        setOneRecipe(data2);
      });
  };
  console.log("oneRecipe", oneRecipe);
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
              fetchRecipeById={fetchRecipeById}
            />
          ),
        },
        {
          path: "recipes/:id",
          element: <Recipe oneRecipe={oneRecipe} />,
        },
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
