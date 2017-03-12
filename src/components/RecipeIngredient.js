import React from 'react';

const RecipeIngredient = (props) => {

  return (
    <div className="chip">

      <span className="chip-name">{props.ingredient}</span>
      <button
        className="btn btn-clear"
        onClick={() => props.deleteIngredients(props.recipeIndex, props.ingredient)}
      ></button>

    </div>
  );
}

RecipeIngredient.propTypes = {
  ingredient: React.PropTypes.string,
  recipeIndex: React.PropTypes.number,
  deleteIngredients: React.PropTypes.func
}

export default RecipeIngredient;
