import { useNavigate /* useParams */ } from "react-router-dom";
/* import recipes from "../fake_recipes.json"; */
import styles from "./Recipe.module.css";

const Recipe = ({ oneRecipe }) => {
  const title = oneRecipe.title;
  const time = oneRecipe.readyInMinutes;
  const image = oneRecipe.image;
  const ingredientsList = [];

  const instructions = [];
  oneRecipe.extendedIngredients.map((el) => ingredientsList.push(el.nameClean));
  oneRecipe.analyzedInstructions[0].steps.map((el) =>
    instructions.push(el.step)
  );
  /*  const { id } = useParams(); */
  /* const recipe = recipes.find((el) => el.id == id); */

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.title}> {title}</div>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.inst}>
          <div className={styles.ing}>
            <div>
              <b>Ingredient:</b>
              {ingredientsList.map((el) => {
                return (
                  <span className="item" key={el}>
                    {" "}
                    {el},
                  </span>
                );
              })}
            </div>
            <div className={styles.time}>{time} min</div>
          </div>
          <div className={styles.instructions}>
            {instructions.map((el) => {
              return (
                <p className="item" key={el}>
                  {" "}
                  {el}
                </p>
              );
            })}
          </div>

          {/*  <div className={styles.instructions}>{oneRecipe.instructions}</div> */}
        </div>
        <div className={styles.buttons}>
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    </>
  );
};

export default Recipe;
