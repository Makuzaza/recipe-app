const fetchRecipeByIngr = async (ingredients) => {
  await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=bea3c85afe2346a6810cb7168710f978`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
fetchRecipeByIngr();
