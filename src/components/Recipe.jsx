import { useNavigate, useParams } from "react-router-dom";
import recipes from "../fake_recipes.json";

const Recipe = () => {
  const { id } = useParams();
  const recipe = recipes.find((el) => el.id == id);
  console.log(recipe);
  const { title, image, ingredients, est_time, instructions } = recipe;
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="title"> {title}</div>
      <div>
        <img className="image" src={image} alt={title} />
      </div>
      <div className="inst">
        <div className="ing">
          <div>
            Ingredient:
            {ingredients.map((item) => {
              return (
                <p className="item" key={id}>
                  {`${item}, `}
                </p>
              );
            })}
          </div>
          <div>Time: {est_time} min</div>
        </div>
        {instructions}
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default Recipe;
