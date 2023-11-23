import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import recipes from "./fake_recipes.json";
import Input from "./components/Input";

function App() {
  const [search, setSearch] = useState("");
  function searchHandler(e) {
    setSearch(e.target.value);
  }
  return (
    <>
      <div className="container">
        <Input />
        <input type="text" placeholder="Search" onChange={searchHandler} />
        <div className="cards">
          {recipes
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .map((item) => (
              <Card key={item.id} {...item} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
