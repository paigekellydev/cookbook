import React, { Component } from 'react'

export default class AddRecipeForm extends Component {

    state = {
        "recipe-name": "",
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div id="form-container">
                <form id="add-recipe-form" onSubmit={this.handleSubmit}>
                    <label className="recipe-name">Add Recipe Name</label>
                    <input name="recipe-name" placeholder="Enter recipe name"></input>
                    <label className="category">Select Category</label>
                    <input name="category" placeholder="Enter category type"></input>
                    {/* maybe create drop down selection for category instead of input */}
                    <label className="prep-time">Add Prep Time</label>
                    <input name="prep-time" placeholder="Enter prep time"></input>
                    <label className="cook-time">Add Cook Time</label>
                    <input name="cook-time" placeholder="Enter cook time"></input>
                    <label className="ingredients">Add Ingredients</label>
                    <input name="ingredients" placeholder="Enter ingredients"></input>
                    <label className="directions">Add Recipe Directions</label>
                    <input name="directions" placeholder="Enter recipe directions"></input>
                    <label className="image-url">Add Recipe Image</label>
                    <input name="image-url" placeholder="Add image url"></input>
                    <label className="submit"></label>
                    <input name="submit" type="submit">Submit</input>
                </form>
            </div>
        )
    }
}
