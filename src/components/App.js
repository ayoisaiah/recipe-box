import React from 'react';
import RecipeCard from './RecipeCard';
import AddModal from './AddModal';
import EditModal from './EditModal';

const App = (props) => {

  let { recipes } = props;
  let recipe = recipes.map((recipe, index) => (
      <RecipeCard
        recipe={recipe}
        key={index}
        deleteRecipe={props.deleteRecipe}
        editRecipe={props.editRecipe}
        deleteIngredients={props.deleteIngredients}
        index={index}
      />
    )
  );

  return (
    <div className="container">
      <div className="columns">

        <div className="column col-xs-12">
          <h1>freeCodeCamp Recipe Box</h1>

        </div>

      </div>
      <div className="columns">
        {recipe}
      </div>

      <AddModal
        showAddModal={props.showAddModal}
        setAddModalStatus={props.setAddModalStatus}
        newRecipe={props.newRecipe}
        handleChange={props.handleChange}
        addRecipe={props.addRecipe}
      />

      <EditModal
        showEditModal={props.showEditModal}
        setEditModalStatus={props.setEditModalStatus}
        editingRecipe={props.editingRecipe}
        handleEdits={props.handleEdits}
        confirmEdits={props.confirmEdits}
      />

      <button className="btn btn-primary fab" onClick={props.setAddModalStatus}>
        Add recipe
      </button>

      <footer>
        <small>Developed by <a href="https://freshman.tech">Ayo Isaiah</a>. View on <a href="https://github.com/ayoisaiah/recipe-box">Github</a>.</small>
      </footer>
    </div>
  );
}

App.propTypes = {
  recipes: React.PropTypes.array,
  showAddModal: React.PropTypes.bool,
  showEditModal: React.PropTypes.bool,
  addRecipe: React.PropTypes.func,
  editRecipe: React.PropTypes.func,
  deleteRecipe: React.PropTypes.func,
  deleteIngredients: React.PropTypes.func,
  setAddModalStatus: React.PropTypes.func,
  setEditModalStatus: React.PropTypes.func,
  handleEdits: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  confirmEdits: React.PropTypes.func,
  newRecipe: React.PropTypes.object,
  editingRecipe: React.PropTypes.object,
}

export default App;
