import { useState, useEffect } from 'react';
import { spoonacularApi, apiKey } from '../../config/recipe';
import Recipe from '../recipeComponents/Recipe';
import RecipeDetails from '../recipeComponents/RecipeDetails';
import RecipeSearch from '../recipeComponents/RecipeSearch';

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState({});
  const [show, setShow] = useState(false);

  const handleSearch = async (searchTerm) => {
    let searchString = spoonacularApi + `?query=${searchTerm}&apiKey=${apiKey}`;
    let res = await fetch(searchString);
    let result = await res.json();
    setRecipes(result.results);
    setShow(false);
  };

  const onHandleRecipe = async (id) => {
    const recipe = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
    ).then((res) => res.json());
    setRecipeDetail(recipe);
    setShow(true);
  };

  const onClearRecipeDetail = () => {
    setRecipeDetail({});
    setShow(false);
  };

  return (
    <div className='recipe'>
      <div className='recipe__container'>
        <RecipeSearch handleSearch={handleSearch} />
        {show ? (
          <RecipeDetails
            recipeDetail={recipeDetail}
            onClearRecipeDetail={onClearRecipeDetail}
          />
        ) : (
          <Recipe recipes={recipes} onHandleRecipe={onHandleRecipe} />
        )}
      </div>
    </div>
  );
};

export default RecipeApp;
