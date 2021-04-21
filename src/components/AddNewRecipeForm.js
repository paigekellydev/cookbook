import React, { Component } from 'react'

export default class AddRecipeForm extends Component {

    state = {
        showMenu: false,
        dropdownMenu: null,
        "recipe-name": "" 
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }
    showForm = (event) => {        
        this.setState({ showForm: true })
        document.addEventListener('click', this.closeForm);
        // when we try to add the closeMenu function, it automatically triggers both showMenu and closeMenu event 
        // listeners
    }

    closeForm = (event) => {
        if (!event.target.classList.contains('drop-down')) {
            this.setState({ showForm: false });  
            document.removeEventListener('click', this.closeForm);
        }
    }

    renderForm = () => {
        return (
            <div>
                <form id="add-recipe-form" onSubmit={this.handleSubmit}>
                    <label className="recipe-name">
                        Add Recipe Name
                    </label>
                    <input name="recipe-name" placeholder="Enter recipe name"/>
                    <label className="category">Select Category</label>
                    <input name="category" placeholder="Enter category type"/>
                    <label className="prep-time">Add Prep Time</label>
                    <input name="prep-time" placeholder="Enter prep time"/>
                    <label className="cook-time">Add Cook Time</label>
                    <input name="cook-time" placeholder="Enter cook time"/>
                    <label className="ingredients">Add Ingredients</label>
                    <input name="ingredients" placeholder="Enter ingredients"/>
                    <label className="directions">Add Recipe Directions</label>
                    <input name="directions" placeholder="Enter recipe directions"/>
                    <label className="image-url">Add Recipe Image</label>
                    <input name="image-url" placeholder="Add image url"/>
                    <label className="submit" type="submit">Submit</label>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div id="form-container">
                {this.renderForm()}

            </div>
        )
    }
}