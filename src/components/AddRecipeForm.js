import React, { Component } from 'react'

export default class AddRecipeForm extends Component {

    state = {
        "recipe-name": ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div id="form-container">
                <form id="add-recipe-form" onSubmit={this.handleSubmit}>
                    <label className="form-input">
                        Add Recipe Name
                        <input name="recipe-name" placeholder="Enter recipe name"></input>
                    </label>
                    <br></br>
                    <label>
                        Select Category
                        <input name="category" placeholder="Enter category type"></input>
                    </label>
                    {/* maybe create drop down selection for category instead of input */}
                    <br></br>
                    <label>
                        Add Prep Time
                        <input name="prep-time" placeholder="Enter prep time"></input>
                    </label>
                    <br></br>
                    <label>
                        Add Cook Time
                        <input name="cook-time" placeholder="Enter cook time"></input>
                    </label>
                    <br></br>
                    <label>
                        Add Ingredients
                        <input name="ingredients" placeholder="Enter ingredients"></input>
                    </label>
                    <br></br>
                    <label>
                        Add Recipe Directions
                        <input name="directions" placeholder="Enter recipe directions"></input>
                    </label>
                    <br></br>
                    <label>
                        Add Recipe Image
                        <input name="image" placeholder="Add image url"></input>
                    </label>
                </form>
            </div>
        )
    }
}
