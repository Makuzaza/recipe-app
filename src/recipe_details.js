const fetchRecipeById = async (id) => {
  await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=bea3c85afe2346a6810cb7168710f978`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
fetchRecipeById();
