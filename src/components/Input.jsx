import { Link } from "react-router-dom";
import styles from "./Input.module.css";
import React, { useState } from "react";
import cucumberImage from '../components/images/cucumber.png';
import carrotImage from '../components/images/carrot.png';
import tomatoImage from '../components/images/tomato.png';
import avokadoImage from '../components/images/avokado.png';
import cabbageImage from '../components/images/cabbage.png';
import basilImage from '../components/images/basil.png';
import parsleyImage from '../components/images/parsley.png';
import garlicImage from '../components/images/garlic.png';
import onionImage from '../components/images/onion.png';
import pumpkinImage from '../components/images/pumpkin.png';
import radishImage from '../components/images/radish.png';
import beefImage from '../components/images/beef.png';
import chickenImage from '../components/images/beef.png';
import fishImage from '../components/images/beef.png';
import porkImage from '../components/images/beef.png';
import salmonImage from '../components/images/beef.png';
import appleImage from '../components/images/apple.png';
import milkImage from '../components/images/milk.png';

const categories = [
  { name: "Vegetables", 
  items: [
    { name: "Cucumber", image: cucumberImage },
    { name: "Carrot", image: carrotImage },
    { name: "Tomato", image: tomatoImage }, 
    { name: "Avocado", image: avokadoImage }, 
    { name: "Cabbage", image: cabbageImage }, 
    { name: "Basil", image: basilImage }, 
    { name: "Parsley", image: parsleyImage }, 
    { name: "Garlic", image: garlicImage }, 
    { name: "Onion", image: onionImage }, 
    { name: "Pumpkin", image: pumpkinImage }, 
    { name: "Radish", image: radishImage }
  ] },
  { name: "Meat/fish", 
  items: [
    { name: "Beef", image: beefImage },
    { name: "Chicken", image: chickenImage },
    { name: "Fish", image: fishImage },
    { name: "Pork", image: porkImage },
    { name: "Salmon", image: salmonImage }
  ] },
  { name: "Fruits", 
  items: [
    { name: "Apple", image: appleImage },
    { name: "Banana", image: appleImage },
    { name: "Orange", image: appleImage },
    { name: "Grapes", image: appleImage },
    { name: "Strawberry", image: appleImage },
    { name: "Pineapple", image: appleImage }
  ] },
  { name: "Dairy Products", 
  items: [
    { name: "Milk", image: milkImage },
    { name: "Cheese", image: milkImage },
    { name: "Yogurt", image: milkImage },
    { name: "Butter", image: milkImage },
    { name: "Eggs", image: milkImage }
  ] },
];

function Input() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prevSelected) => prevSelected.filter((i) => i !== item));
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, item]);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Type here the products" />
      
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
        <div  className={styles.selectedItem}>You chose:</div>
        <div className={styles.selectedItem}>
          {selectedItems.map((itemName, index) => (
          <div key={index}>{itemName}</div>  
        ))}</div>
      </div>

      <Link to="/recipes">
        <button>Submit</button>
      </Link>
    </div>
  );
}
export default Input;
