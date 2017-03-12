import React from 'react';

class AddModal extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = (target.name === "title") ? target.value : target.value.split(",");
    this.props.handleChange(name, value);
  }

  render() {

    return (
      <div className={"modal " + (this.props.showAddModal ? "active" : "") }>
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <div className="modal-header">
            <button className="btn btn-clear float-right" onClick={this.props.setAddModalStatus}></button>
            <div className="modal-title">Add Recipe</div>
          </div>
          <form onSubmit={this.props.addRecipe}>
            <div className="modal-body">
              <div className="content">

                <div className="form-group">
                  <label className="form-label" htmlFor="recipe-title">Title</label>
                  <input className="form-input" type="text" placeholder="Recipe title" value={this.props.newRecipe.title} id="add-recipe-title" onChange={this.handleChange} name="title" autoFocus />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="recipe-ingredients">Ingredients</label>
                  <input className="form-input" type="text" placeholder="Enter ingredients separated by commas" value={this.props.newRecipe.ingredients.join()} onChange={this.handleChange} name="ingredients" />
                </div>

              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" onClick={this.props.addRecipe}>Add</button>
            </div>
          </form>
        </div>


      </div>
    );
  }

}

AddModal.propTypes = {
  showAddModal: React.PropTypes.bool,
  setAddModalStatus: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  addRecipe: React.PropTypes.func,
  newRecipe: React.PropTypes.object,
}

export default AddModal;
