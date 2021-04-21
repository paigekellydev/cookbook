import React, { Component } from 'react'

export default class AddRecipeForm extends Component {

    state = {
        showForm: false,
        form: null,
        recipeName: "" 
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }
    showForm = (event) => {    
        this.setState({ showForm: true })
        document.addEventListener('click', this.closeForm);
    }

    closeForm = (event) => {
        if (!event.target.classList.contains('form')) {
            this.setState({ showForm: false });  
            document.removeEventListener('click', this.closeForm);
        }
    }

    renderForm = () => {
        return (
            this.state.showForm ? (
                <div
                    className="form"
                    ref={(element) => {
                    this.state.form = element;
                    }}
                >
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
                </div> )
            : ( null )
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.showForm}  className="form">Add New Recipe</button>    
                {this.renderForm()}
            </div>
        )
    }
}