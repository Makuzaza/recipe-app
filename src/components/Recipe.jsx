import { useNavigate, useParams } from "react-router-dom";
import recipes from "../fake_recipes.json";
import styles from "./Recipe.module.css";

const Recipe = () => {
  const { id } = useParams();
  const recipe = recipes.find((el) => el.id == id);
  console.log(recipe);
  const { title, image, ingredients, est_time, instructions } = recipe;
  const navigate = useNavigate();
  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}> {title}</div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.inst}>
        <div className={styles.ing}>
          <div>
            <b>Ingredient:</b>
            {ingredients.map((item) => {
              return (
                <span className="item" key={id}>
                  {` ${item}, `}
                </span>
              );
            })}
          </div>
          <div className={styles.time}>{est_time} min</div>
        </div>
        <div className={styles.instructions}>{instructions}</div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default Recipe;
