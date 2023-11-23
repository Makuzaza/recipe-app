const Card = ({ image, title, ingredients, est_time, instructions, id }) => {
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
      <button>Ok</button>
    </div>
  );
};

export default Card;
