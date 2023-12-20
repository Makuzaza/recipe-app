const fetchRecipeById = async (id) => {
  await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=973a4b9ded3f489a9ce40c0c468c7838`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
fetchRecipeById();
