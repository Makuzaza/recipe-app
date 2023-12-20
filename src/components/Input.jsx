import { Link } from "react-router-dom";
import styles from "./Input.module.css";
import { useState } from "react";
import { categories } from "../categoryList";

// managing selected category, selected items, user input, suggestions, and typing state.
function Input({ fetchRecipeByIngr }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestoins] = useState([]);
  const [typing, setTyping] = useState(false);

  console.log("selectedItem", selectedItems);

  // asynchronous request to API to fetch ingredients based on the user's input
  const getSuggestions = async (input) => {
    await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?query=${input}&number=5&apiKey=973a4b9ded3f489a9ce40c0c468c7838`
    )
      .then((res) => res.json())
      .then((data) => {
        setSuggestoins(data);
      });
  };

  // handle user interactions
  const suggestionHandler = (text) => {
    setInput(text);
    setSuggestoins([]);
  };

  // select - deselect category
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      //clicked category is the one that is currently selected
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      // item is already in the list
      setSelectedItems((prevSelected) =>
        prevSelected.filter((i) => i !== item)
      );
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, item]);
    }
  };

  // remove item from the list
  const handleClose = (item) => {
    setSelectedItems(
      (
        prevSelected // create a new array
      ) => prevSelected.filter((selectedItem) => selectedItem !== item)
    );
  };

  // checks whether the item is already in the list
  function addItemsFromInput(item) {
    if (selectedItems.includes(item)) {
      // checks if the selectedItems array already includes item
      setInput("");
      return;
    } else {
      //the item is not in the list of selected items
      // creates a new array with the previous items and adds the new item to it
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
              // trigger when the input value changes
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

      {/* when typing is false */}
      {/* dropdown menu of categories with items */}
      {!typing &&
        categories.map((category, index) => (
          <div key={index} className={styles.dropdown}>
            <button onClick={() => handleCategoryClick(category.name)}>
              {category.name}
            </button>
            {selectedCategory === category.name && ( // show items belonging to the selected category
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

      {/* list of selected item. */}
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
