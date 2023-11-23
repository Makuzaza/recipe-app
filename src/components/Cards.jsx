const Cards = ({ image, title, id }) => {
  return (
    <div className="receipt-container">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <p className="title"> {title}</p>
      <button>See more</button>
    </div>
  );
};

export default Cards;
