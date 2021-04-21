import React, { Component } from 'react'

const baseUrl = 'http://localhost:3000'
const recipeUrl = `${baseUrl}/recipes`

export default class AddRecipeForm extends Component {

    state = {
        showForm: false,
        form: null,
    }
    
    // newRecipe = {
    //     recipeName: "",
    //     category: "",
    //     cookTime: null,
    //     ingredients: "",
    //     directions: "",
    //     img: ""

    // }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    showForm = (event) => {    
        this.setState({ showForm: true })
        // document.addEventListener('click', this.closeForm);
    }

    // closeForm = (event) => {
    //     if (!event.target.classList.contains('form')) {
    //         this.setState({ showForm: false });  
    //         document.removeEventListener('click', this.closeForm);
    //     }
    // }
    postRecipe = () => {
        fetch(recipeUrl, {
            method:"POST",
            headers: {
                'Content-Type':'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify()
        })
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
                    <button onClick={this.postRecipe}className="submit" type="submit">Submit</button>
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