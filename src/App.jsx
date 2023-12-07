import { useState } from "react";
import "./App.css";
import recipes from "./fake_recipes.json";
import Input from "./components/Input";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./routes/recipes";
import Recipe from "./components/Recipe";
import Root from "./routes/root";
import ErrorPage from "./routes/error";

function App() {
  const [search, setSearch] = useState("");

  function searchHandler(e) {
    setSearch(e.target.value);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Input /> },
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
