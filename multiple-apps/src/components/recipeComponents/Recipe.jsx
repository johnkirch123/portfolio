const Recipe = ({ recipes, onHandleRecipe }) => {
  return (
    <div className='recipe__area'>
      {recipes?.map(({ id, image, title }) => {
        return (
          <div
            key={id}
            className='recipe__card'
            onClick={() => onHandleRecipe(id)}
          >
            <img src={image} alt={title} className='recipe__card--image' />
            <div className='recipe__card--title-box'>
              <h1 className='recipe__card--title'>{title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
