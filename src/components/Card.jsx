import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ image, title, id }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <div className={styles.detailsContainer}>
        {" "}
        <p className="title"> {title}</p>
        <Link to={`/recipes/${id}`}>
          <button>View Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

/*
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
 */
