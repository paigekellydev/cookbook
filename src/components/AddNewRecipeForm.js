import React, { Component } from 'react'

const baseUrl = 'http://localhost:3000'
const recipeUrl = `${baseUrl}/recipes`

export default class AddRecipeForm extends Component {

    state = {
        showForm: false,
        form: null,
        newRecipe: {
            recipeName: "",
            kitchen: "",
            category: "",
            cookTime: null,
            prepTime: null,
            ingredients: "",
            directions: "",
            img: "",
            id: this.props.newRecipeId
        }
    }
    


    handleSubmit = (event) => {
        event.preventDefault()
        this.state.newRecipe.recipeName = event.target.name.value
        this.state.newRecipe.kitchen = event.target.kitchen.value
        this.state.newRecipe.category = event.target.category.value
        this.state.newRecipe.cookTime = event.target.cook.value
        this.state.newRecipe.prepTime = event.target.prep.value
        this.state.newRecipe.ingredients = event.target.ingredients.value
        this.state.newRecipe.directions = event.target.directions.value
        this.state.newRecipe.img = event.target.image.value

        event.target.name.value = "";
        event.target.kitchen.value = "";
        event.target.category.value = "";
        event.target.cook.value = null;
        event.target.prep.value = null;
        event.target.ingredients.value = "";
        event.target.directions.value = "";
        event.target.image.value = "";

        const newRecipe = this.state.newRecipe

        this.props.addNewRecipeToState(newRecipe)
        
        fetch(recipeUrl, {
            method:"POST",
            headers: {
                'Content-Type':'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(this.state.newRecipe)
            }
        )
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
                    <label className="name">Add Recipe Name</label>
                    <input name="name" placeholder="Enter recipe name"/>
                    <label className="kitchen">From The Kitchen Of:</label>
                    <input name="kitchen" placeholder="Enter cook's name"/>
                    <label className="category">Select Category</label>
                    <input name="category" placeholder="Enter category type"/>
                    <label className="prep">Add Prep Time</label>
                    <input name="prep" placeholder="Enter prep time"/>
                    <label className="cook">Add Cook Time</label>
                    <input name="cook" placeholder="Enter cook time"/>
                    <label className="ingredients">Add Ingredients</label>
                    <input name="ingredients" placeholder="Enter ingredients"/>
                    <label className="directions">Add Recipe Directions</label>
                    <input name="directions" placeholder="Enter recipe directions"/>
                    <label className="image">Add Recipe Image</label>
                    <input name="image" placeholder="Add image url"/>
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