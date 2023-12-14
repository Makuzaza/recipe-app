import Card from "../components/Card";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Recipes({ searchHandler, recipes, search }) {

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        {/*  <Input />
        <input type="text" placeholder="Search" onChange={searchHandler} /> */}
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
      <div class="recipe_buttons">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default Recipes;
