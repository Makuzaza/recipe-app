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
      { name: "cucumber", image: cucumberImage },
      { name: "carrot", image: carrotImage },
      { name: "tomato", image: tomatoImage },
      { name: "avocado", image: avokadoImage },
      { name: "cabbage", image: cabbageImage },
      { name: "garlic", image: garlicImage },
      { name: "onion", image: onionImage },
      { name: "pumpkin", image: pumpkinImage },
      { name: "radish", image: radishImage },
    ],
  },
  {
    name: "Meat/fish",
    items: [
      { name: "beef", image: beefImage },
      { name: "chicken", image: chickenImage },
      { name: "fish", image: fishImage },
      { name: "pork", image: porkImage },
      { name: "salmon", image: salmonImage },
      { name: "sausage", image: sausageImage },
    ],
  },
  {
    name: "Fruits",
    items: [
      { name: "apple", image: appleImage },
      { name: "banana", image: bananaImage },
      { name: "orange", image: orangeImage },
      { name: "grapes", image: grapesImage },
      { name: "strawberry", image: strawberryImage },
      { name: "pineapple", image: pineappleImage },
      { name: "lemon", image: lemonImage },
    ],
  },
  {
    name: "Dairy Products",
    items: [
      { name: "milk", image: milkImage },
      { name: "cheese", image: cheeseImage },
      { name: "yogurt", image: yogurtImage },
      { name: "butter", image: butterImage },
      { name: "eggs", image: eggsImage },
    ],
  },
  {
    name: "Basics",
    items: [
      { name: "potato", image: potatoImage },
      { name: "rice", image: riceImage },
      { name: "pasta", image: pastaImage },
    ],
  },
];

function Input({ fetchRecipeByIngr, recipes, setRecipes }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestoins] = useState([]);
  const [typing, setTyping] = useState(false);

  console.log("selectedItem", selectedItems);
  console.log("recipesArr", recipes);

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
  function addItemsFromInput(item) {
    if (selectedItems.includes(item)) {
      setInput("");
      return;
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, item]);
      setInput("");
    }
  }

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
              setTyping(true);
            }}
            value={input}
          />
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div
                key={i}
                className={styles.suggestion}
                onClick={() => {
                  suggestionHandler(suggestion.name);
                  setTyping(false);
                  addItemsFromInput(suggestion.name);
                }}
              >
                {suggestion.name}
              </div>
            ))}
        </div>
      </div>

      {!typing &&
        categories.map((category, index) => (
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
        <div className={styles.selectedItem}>You have:</div>
        <div className={styles.selectedItem}>
          {selectedItems.map((itemName, index) => (
            <div key={index}>
              <button
                className={styles.choosenItems}
                onClick={() => handleClose(itemName)}
              >
                {" "}
                {itemName} ⛌
              </button>
            </div>
          ))}
        </div>
      </div>

      <Link to="/recipes">
        <button onClick={() => fetchRecipeByIngr(selectedItems)}>Submit</button>
      </Link>
    </div>
  );
}
export default Input;
