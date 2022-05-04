const RecipeDetails = ({ recipeDetail, onClearRecipeDetail }) => {
  const imageURL = 'https://spoonacular.com/cdn/ingredients_100x100/';
  return (
    <div className='recipe__details'>
      <h1 className='recipe__details--name'>{recipeDetail.title}</h1>
      <img
        src={recipeDetail.image}
        alt={recipeDetail.title}
        className='recipe__details--image'
      />
      <div className='recipe__details--info-box'>
        <p>servings: {recipeDetail.servings}</p>
        <p>Ready In: {recipeDetail.readyInMinutes} minutes</p>
        <p>Spoonacular Score: {recipeDetail.spoonacularScore}</p>
      </div>
      <div className='recipe__details--ingredients'>
        <h1 className='recipe__details--ingredients-header'>Ingredients</h1>
        {recipeDetail.extendedIngredients.map((ingredient) => {
          return (
            <div
              key={ingredient.id}
              className='recipe__details--ingredients-item'
            >
              <img
                src={imageURL + ingredient.image}
                className='recipe__details--ingredients-image'
              />
              <p className='recipe__details--ingredients-measurements'>
                {ingredient.name} {ingredient.original}
              </p>
            </div>
          );
        })}
      </div>
      <button onClick={onClearRecipeDetail} className='button__white--outline'>
        Back to Recipes List
      </button>
    </div>
  );
};

export default RecipeDetails;
