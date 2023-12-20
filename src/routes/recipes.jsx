import Card from "../components/Card";
/* import Input from "../components/Input"; */
import { useNavigate } from "react-router-dom";
import styles from "./recipes.module.css";

function Recipes({ searchHandler, recipes, search }) {
  const navigate = useNavigate();
  return (
    <>
      {/*  <Input />
        <input type="text" placeholder="Search" onChange={searchHandler} /> */}
      <div className={styles.container}>
        { recipes.length === 0 ? (
          <p>No recipes found. Choose any other products.</p>
        ) : (recipes
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <Card key={item.id} {...item} />
          )))}
      </div>

      <div className={styles.recipe_buttons}>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default Recipes;
