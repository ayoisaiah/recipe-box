import React from 'react';
import RecipeIngredient from './RecipeIngredient';

const RecipeCard = (props) => {
  let recipeIngredient;

    if (props.recipe) {
      recipeIngredient = props.recipe.ingredients.map((item, index) => (
          <RecipeIngredient
            recipeIndex={props.index}
            deleteIngredients={props.deleteIngredients}
            ingredient={item}
            key={index}
          />
        )
      );
    }

  return (
    <div className="col-xl-4 col-sm-6 col-xs-12 col-4 column" >
      <div className="card">

        <div className="card-header">
            <h3 className="card-title">{props.recipe.title}</h3>
        </div>

        <div className="card-body">
          {recipeIngredient}
        </div>

        <div className="card-footer">
            <button className="btn btn-link delete" onClick={() => props.deleteRecipe(props.recipe)}>Delete</button>
            <button className="btn btn-default" onClick={() => props.editRecipe(props.recipe)}>Edit</button>
        </div>

      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: React.PropTypes.object,
  deleteRecipe: React.PropTypes.func,
  editRecipe: React.PropTypes.func,
  deleteIngredients: React.PropTypes.func,
  index: React.PropTypes.number
}

export default RecipeCard;
