import { Link } from "react-router-dom";
import styles from "./Input.module.css";
import { useState } from "react";
import cucumberImage from "../components/images/cucumber.png";
import carrotImage from "../components/images/carrot.png";
import tomatoImage from "../components/images/tomato.png";
import avokadoImage from "../components/images/avokado.png";
import cabbageImage from "../components/images/cabbage.png";
import garlicImage from "../components/images/garlic.png";
import onionImage from "../components/images/onion.png";
import pumpkinImage from "../components/images/pumpkin.png";
import radishImage from "../components/images/radish.png";
import beefImage from "../components/images/cow.png";
import chickenImage from "../components/images/chicken.png";
import fishImage from "../components/images/fish.png";
import porkImage from "../components/images/pork.png";
import salmonImage from "../components/images/salmon.png";
import sausageImage from "../components/images/sausages.png";
import appleImage from "../components/images/apple.png";
import bananaImage from "../components/images/banana.png";
import orangeImage from "../components/images/orange.png";
import grapesImage from "../components/images/grape.png";
import strawberryImage from "../components/images/strawberry.png";
import pineappleImage from "../components/images/pineapple.png";
import lemonImage from "../components/images/lemon.png";
import milkImage from "../components/images/milk.png";
import cheeseImage from "../components/images/cheese.png";
import yogurtImage from "../components/images/yogurt.png";
import butterImage from "../components/images/butter.png";
import eggsImage from "../components/images/egg.png";
import potatoImage from "../components/images/potato.png";
import riceImage from "../components/images/rice.png";
import pastaImage from "../components/images/pasta.png";

const categories = [
  {
    name: "Vegetables",
    items: [
      { name: "Cucumber", image: cucumberImage },
      { name: "Carrot", image: carrotImage },
      { name: "Tomato", image: tomatoImage },
      { name: "Avocado", image: avokadoImage },
      { name: "Cabbage", image: cabbageImage },
      { name: "Garlic", image: garlicImage },
      { name: "Onion", image: onionImage },
      { name: "Pumpkin", image: pumpkinImage },
      { name: "Radish", image: radishImage },
    ],
  },
  {
    name: "Meat/fish",
    items: [
      { name: "Beef", image: beefImage },
      { name: "Chicken", image: chickenImage },
      { name: "Fish", image: fishImage },
      { name: "Pork", image: porkImage },
      { name: "Salmon", image: salmonImage },
      { name: "Sausage", image: sausageImage },
    ],
  },
  {
    name: "Fruits",
    items: [
      { name: "Apple", image: appleImage },
      { name: "Banana", image: bananaImage },
      { name: "Orange", image: orangeImage },
      { name: "Grapes", image: grapesImage },
      { name: "Strawberry", image: strawberryImage },
      { name: "Pineapple", image: pineappleImage },
      { name: "Lemon", image: lemonImage },
    ],
  },
  {
    name: "Dairy Products",
    items: [
      { name: "Milk", image: milkImage },
      { name: "Cheese", image: cheeseImage },
      { name: "Yogurt", image: yogurtImage },
      { name: "Butter", image: butterImage },
      { name: "Eggs", image: eggsImage },
    ],
  },
  {
    name: "Basics",
    items: [
      { name: "Potato", image: potatoImage },
      { name: "Rice", image: riceImage },
      { name: "Pasta", image: pastaImage },
    ],
  },
];

function Input() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestoins] = useState([]);

  const getSuggestions = async (input) => {
    await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?query=${input}&number=5&apiKey=bea3c85afe2346a6810cb7168710f978`
    )
      .then((res) => res.json())
      .then((data) => {
        setSuggestoins(data);
      });
  };

  const suggestionHandler = (text) => {
    console.log("text", text);

    setInput(text);
    console.log("afterClick", input);

    setSuggestoins([]);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((i) => i !== item)
      );
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, item]);
    }
  };

  const handleClose = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((selectedItem) => selectedItem !== item)
    );
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWithButton}>
        <div>
          <input
            placeholder="Type here ..."
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
              getSuggestions(e.target.value);
            }}
            value={input}
          />
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div
                key={i}
                className={styles.suggestion}
                onClick={() => suggestionHandler(suggestion.name)}
              >
                {suggestion.name}
              </div>
            ))}
        </div>

        <button>
          <span>➕</span> Add
        </button>
      </div>

      {categories.map((category, index) => (
        <div key={index} className={styles.dropdown}>
          <button onClick={() => handleCategoryClick(category.name)}>
            {category.name}
          </button>
          {selectedCategory === category.name && (
            <div className={styles.dropdownContent}>
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  onClick={() => handleItemClick(item.name)}
                  className={styles.selected}
                >
                  <img src={item.image} />
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className={styles.selectedItems}>
        <div className={styles.selectedItem}>You chose:</div>
        <div className={styles.selectedItem}>
          {selectedItems.map((itemName, index) => (
            <div key={index}>
              <button onClick={() => handleClose(itemName)}>
                {" "}
                {itemName}×
              </button>
            </div>
          ))}
        </div>
      </div>

      <Link to="/recipes">
        <button>Submit</button>
      </Link>
    </div>
  );
}
export default Input;
