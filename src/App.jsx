import { useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import recipes from "./fake_recipes.json";
import Input from "./components/Input";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Recipes from "./routes/recipes";
import Recipe from "./components/Recipe";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import About from "./routes/about";
import Cards from "./components/Cards";

function App() {
  const [search, setSearch] = useState("");

  function searchHandler(e) {
    setSearch(e.target.value);
  }
  return (
    <Routes>
      <Route path="/" element={<Input />} />
      <Route path="/recipes">
        <Route
          index
          element={
            <Recipes
              searchHandler={searchHandler}
              recipes={recipes}
              search={search}
            />
          }
        />
        <Route path=":id" element={<Recipe />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

/* function App() {
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
        { path: "/", element: <Home /> },
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
        { path: "recipes/:name", element: <Card /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
} */

// return (
//   <>
//     <div className="container">
//       <Input />
//       <input type="text" placeholder="Search" onChange={searchHandler} />
//       <div className="cards">
//         {recipes
//           .filter((item) =>
//             item.title.toLowerCase().includes(search.toLocaleLowerCase())
//           )
//           .map((item) => (
//             <Card key={item.id} {...item} />
//           ))}
//       </div>
//     </div>
//   </>
// );
// }

export default App;
