import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Capitalize } from './helpers';

import './stylesheet/css/spectre.min.css';
import './stylesheet/css/main.css';

class Index extends React.Component {

  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.deleteIngredients = this.deleteIngredients.bind(this);
    this.setAddModalStatus = this.setAddModalStatus.bind(this);
    this.setEditModalStatus = this.setEditModalStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdits = this.handleEdits.bind(this);
    this.confirmEdits = this.confirmEdits.bind(this);

    this.state = {

      newRecipe: {
        title: "",
        ingredients: []
      },

      recipes: [
        {
          title: "Oatmeal",
          ingredients: ["oats", "honey", "milk", "yogurt", "coconut", "banana"]
        },
        {
          title: "Beans Porridge",
          ingredients: ["beans", "palm oil", "onions", "seasoning", "yam", "plantain"]
        },
        {
          title: "Yam and Egg",
          ingredients: ["yam", "eggs", "onions", "tomato", "salt"]
        },
        {
          title: "Scrambled Eggs",
          ingredients: ["eggs", "tomato", "vegetables", "milk", "cheese", "bacon"]
        },
        {
          title: "Beans Pudding (Moin Moin)",
          ingredients: ["beans", "crayfish", "nutmeg", "vegetable oil", "salt", "pepper"]
        },
        {
          title: "Cassava Flakes (Garri)",
          ingredients: ["garri", "sugar", "milk", "groundnuts", "fish"]
        }
      ],

      editingIndex: undefined,

      editingRecipe: {
        title: "",
        ingredients: []
      },

      showAddModal: false,
      showEditModal: false

    }
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem(`_ayoisaiah_recipes`);

    if (localStorageRef) {
      this.setState({
        recipes: JSON.parse(localStorageRef)
      });
    }

  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`_ayoisaiah_recipes`, JSON.stringify(nextState.recipes));
  }

  addRecipe(e) {
    e.preventDefault();
    const newRecipe = {...this.state.newRecipe};
    const recipes = this.state.recipes;

    newRecipe.title = Capitalize(newRecipe.title.trim());
    newRecipe.ingredients = newRecipe.ingredients.map(e => e.trim().toLowerCase()).filter(Boolean);

    if (newRecipe.title !== "" && newRecipe.ingredients.length !== 0) {
      recipes.push(newRecipe);

      this.setState({
        recipes,
        showAddModal: false,
        newRecipe: {
          title: "",
          ingredients: []
        }
      });
    }


  }

  editRecipe(recipe) {
    const index = this.state.recipes.indexOf(recipe);

    this.setState({
      showEditModal: true,
      editingIndex: index,
      editingRecipe: recipe
    });
  }

  deleteRecipe(recipe) {
    const recipes = this.state.recipes;
    const index = recipes.indexOf(recipe);
    recipes.splice(index, 1);

    this.setState({
      recipes
    });
  }

  deleteIngredients(recipeIndex, ingredient) {
    const recipes = this.state.recipes;
    const recipe = recipes[recipeIndex];
    const index = recipe.ingredients.indexOf(ingredient);
    recipe.ingredients.splice(index, 1);
    recipes[recipeIndex] = recipe;

    this.setState({
      recipes
    });

  }

  handleChange(name, value) {
    const newRecipe = {...this.state.newRecipe};
    newRecipe[name] = value;

    this.setState({
      newRecipe
    });

  }

  handleEdits(name, value) {
    const editingRecipe = {...this.state.editingRecipe};
    editingRecipe[name] = value;

    this.setState({
      editingRecipe
    });

  }

  confirmEdits(e) {
    e.preventDefault();
    const editingRecipe = {...this.state.editingRecipe};
    const recipes = this.state.recipes;
    const index = this.state.editingIndex;

    editingRecipe.title = Capitalize(editingRecipe.title.trim());
    editingRecipe.ingredients = editingRecipe.ingredients.map(e => e.trim().toLowerCase()).filter(Boolean);

    if (editingRecipe.title !== "" && editingRecipe.ingredients.length !== 0) {

      recipes[index] = editingRecipe;

      this.setState({
        recipes,
        showEditModal: false,
        editingIndex: undefined,
        editingRecipe: {
          title: "",
          ingredients: []
        }
      });
    }

  }

  setAddModalStatus() {
    this.setState({
      showAddModal: !this.state.showAddModal
    });
  }

  setEditModalStatus() {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  }

  render() {
    return (
      <App
        showAddModal={this.state.showAddModal}
        setAddModalStatus={this.setAddModalStatus}
        setEditModalStatus={this.setEditModalStatus}
        showEditModal={this.state.showEditModal}
        newRecipe={this.state.newRecipe}
        editingRecipe={this.state.editingRecipe}
        handleChange={this.handleChange}
        handleEdits={this.handleEdits}
        recipes={this.state.recipes}
        addRecipe={this.addRecipe}
        editRecipe={this.editRecipe}
        confirmEdits={this.confirmEdits}
        deleteRecipe={this.deleteRecipe}
        deleteIngredients={this.deleteIngredients}
      />
    );
  }

}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
