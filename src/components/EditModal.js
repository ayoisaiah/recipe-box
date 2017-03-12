import React from 'react';

class EditModal extends React.Component {

  constructor() {
    super();
    this.handleEdits = this.handleEdits.bind(this);
  }


  handleEdits(event) {
    const target = event.target;
    const name = target.name;
    const value = (target.name === "title") ? target.value : target.value.split(",");
    this.props.handleEdits(name, value);
  }

  render() {
    return (
      <div className={"modal " + (this.props.showEditModal ? "active" : "") }>
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <div className="modal-header">
            <button className="btn btn-clear float-right" onClick={this.props.setEditModalStatus}></button>
            <div className="modal-title">Edit Recipe</div>
          </div>

          <form onSubmit={this.props.confirmEdits}>
            <div className="modal-body">
              <div className="content">

                <div className="form-group">
                  <label className="form-label" htmlFor="recipe-title">Title</label>
                  <input className="form-input" type="text" placeholder="Recipe title" value={this.props.editingRecipe.title} onChange={this.handleEdits} name="title" autoFocus />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="recipe-ingredients">Ingredients</label>
                  <input className="form-input" type="text" placeholder="Enter ingredients separated by commas" value={this.props.editingRecipe.ingredients.join()} onChange={this.handleEdits} name="ingredients" />
                </div>

              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" onClick={this.props.confirmEdits}>Finish</button>
            </div>
          </form>
        </div>

      </div>
    );
  }

}

EditModal.propTypes = {
  showEditModal: React.PropTypes.bool,
  setEditModalStatus: React.PropTypes.func,
  handleEdits: React.PropTypes.func,
  confirmEdits: React.PropTypes.func,
  editingRecipe: React.PropTypes.object
}

export default EditModal;
